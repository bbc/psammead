const { exec } = require('shelljs');
const getPackagesDependents = require('../utilities/getPackagesDependents');

module.exports = packages => {
  const updateDependents = packageList =>
    new Promise(resolve => {
      exec(
        `npx lerna exec --parallel --no-bail -- npx npm-check-updates ${packageList} -u -a`,
        {},
        resolve,
      );
    });

  return Promise.all([
    getPackagesDependents(packages),
    updateDependents(packages.join(', ')),
  ]).then(([updatedDependents]) => updatedDependents);
};
