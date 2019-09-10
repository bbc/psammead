const { exec } = require('shelljs');
const fs = require('fs');
const path = require('path');

const DEFAULT_PACKAGE_NAME = 'psammead';

const getPackageFolders = () => {
  const folders = fs
    .readdirSync(path.resolve('./packages/components'), {
      withFileTypes: true,
    })
    .filter(f => f.isDirectory());
  return folders.map(f => f.name);
};

const getChanges = () => {
  exec(`git fetch --all;`, { silent: true });

  const validPackageNames = getPackageFolders().concat(DEFAULT_PACKAGE_NAME);

  const execute = exec(`git diff --name-only origin/latest`, {
    silent: true,
  }).stdout;

  const changedFiles = execute.split('\n').filter(Boolean);

  const changedPackages = {};

  changedFiles.forEach(fileName => {
    const nameParts = fileName.split('/');

    const [packageName, filePath] = validPackageNames.some(name =>
      fileName.startsWith(`packages/components/${name}`),
    )
      ? [nameParts[2], nameParts.splice(3).join('/')]
      : [DEFAULT_PACKAGE_NAME, fileName];

    const revisedPackageName = validPackageNames.includes(packageName)
      ? packageName
      : DEFAULT_PACKAGE_NAME;

    (changedPackages[revisedPackageName] =
      changedPackages[revisedPackageName] || []).push(filePath);
  });

  return changedPackages;
};

module.exports = getChanges;
