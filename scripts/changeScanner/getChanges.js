const { exec } = require('shelljs');

const DEFAULT_PACKAGE_NAME = 'psammead';

const getChanges = () => {
  exec(`git fetch --all;`, { silent: true });

  const execute = exec(`git diff --name-only origin/latest`, {
    silent: true,
  }).stdout;

  const changedFiles = execute.split('\n').filter(Boolean);

  const changedPackages = {};

  changedFiles.forEach(fileName => {
    const nameParts = fileName.split('/');

    const validPackageNamePattern = /packages\/(components|utilities|containers)\/.+\//i;

    const isValidPackageName = validPackageNamePattern.test(fileName);

    const [packageName] = isValidPackageName
      ? [nameParts[2], nameParts.splice(3).join('/')]
      : [DEFAULT_PACKAGE_NAME, fileName];

    const revisedPackageName = isValidPackageName
      ? packageName
      : DEFAULT_PACKAGE_NAME;

    (changedPackages[revisedPackageName] =
      changedPackages[revisedPackageName] || []).push(fileName);
  });

  return changedPackages;
};

module.exports = getChanges;
