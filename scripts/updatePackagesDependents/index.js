const { exec } = require('shelljs');
const getPackagesDependents = require('../utilities/getPackagesDependents');

module.exports = packages => {
  const updateDependents = packagesString =>
    new Promise(resolve => {
      exec(
        `npx lerna exec --parallel --no-bail -- npx npm-check-updates ${packagesString} -u -a`,
        {},
        resolve,
      );
    });

  return Promise.all([
    getPackagesDependents(packages),
    updateDependents(packages.join(', ')),
  ]).then(([updatedDependents]) => updatedDependents);
};
