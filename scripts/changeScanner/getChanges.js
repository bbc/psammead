const { exec } = require('shelljs');

const getChanges = () => {
  const execute = exec(`git diff --name-status latest`, {
    silent: true,
  }).stdout;

  const changedFiles = execute
    .replace(/M\t/g, '')
    .split('\n')
    .filter(val => val);

  const changedPackages = {};

  changedFiles.forEach(fileName => {
    const nameParts = fileName.split('/');
    const packageName = nameParts[2];
    const filePath = nameParts.splice(3).join('/');

    (changedPackages[packageName] = changedPackages[packageName] || []).push(
      filePath,
    );
  });

  return changedPackages;
};

module.exports = getChanges;
