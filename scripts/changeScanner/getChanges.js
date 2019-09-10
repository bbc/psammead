const { exec } = require('shelljs');

const getChanges = () => {
  exec(`git fetch --all;`, { silent: true });

  const execute = exec(`git diff --name-only origin/latest`, {
    silent: true,
  }).stdout;

  const changedFiles = execute.split('\n').filter(Boolean);

  const changedPackages = {};

  changedFiles.forEach(fileName => {
    const nameParts = fileName.split('/');

    const [packageName, filePath] = fileName.startsWith('packages/')
      ? [nameParts[2], nameParts.splice(3).join('/')]
      : ['psammead', fileName];

    (changedPackages[packageName] = changedPackages[packageName] || []).push(
      filePath,
    );
  });

  return changedPackages;
};

module.exports = getChanges;
