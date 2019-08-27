const { exec } = require('shelljs');

// Get all packages in lerna scope.
module.exports = () => {
  const packages = exec('npx lerna ls --parseable', { silent: true })
    .stdout.split('\n')
    .filter(Boolean);
  if (packages.length) {
    const prefix = packages[0].split('/packages')[0];
    return [`${prefix}`, ...packages];
  }
  return packages;
};
