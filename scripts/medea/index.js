const fs = require('fs');
const getDependabotPRs = require('./getDependabotPRs/index');
const getPackageNames = require('./getPackageNames/index');
// const getPRTitle = require('./getPRTitle/index');
const getBranchName = require('./getBranchName/index');

// const getChangedPackages = require('./getChangedPackages');
const upgradeDependencies = require('../upgradeDependencies');
const bumpPackages = require('../bumpPackages/index.js');
const getPackagePath = require('../utilities/getPackagePath');
const runNpmInstall = require('../regeneratePackageLocks/runNpmInstall');
const bumpChangelogs = require('../bumpChangelogs/index');
const checkoutBranch = require('../talos/checkoutBranch/index');
const commitChanges = require('../talos/commitChanges/index');
const createPullRequest = require('../talos/createPullRequest/index');
// const getBranchName = require('./getBranchName');

const medea = () => {
  const packages = getPackageNames();
  const branchName = getBranchName();

  getDependabotPRs().then(value => {
    const dependabotPRData = JSON.stringify(value);
    fs.writeFileSync('PRs.json', dependabotPRData);
  });

  if (packages.length <= 0) {
    // eslint-disable-next-line no-console
    console.log(`No packages were published!`);
    process.exit();
  }

  return upgradeDependencies(packages)
    .then(bumpedPackagesObj => {
      const bumpedPackages = Object.keys(bumpedPackagesObj);
      if (bumpedPackages.length <= 0) {
        // eslint-disable-next-line no-console
        console.log('No packages to bump!');
        process.exit();
      }

      return bumpPackages({
        packageNames: packages,
        version: 'patch',
      })
        .then(() =>
          Promise.all(packages.map(dep => runNpmInstall(getPackagePath(dep)))),
        )
        .then(() => checkoutBranch(branchName))
        .then(() => commitChanges('Medea - Bump Dependencies'))
        .then(() =>
          createPullRequest({ packages, bumpedPackagesObj, branchName }),
        )
        .then(({ data }) =>
          Promise.all(
            packages.map((packageName, index) => {
              const description = 'Medea - Bump Dependencies';
              const descriptionDetail = bumpedPackagesObj[bumpedPackages[index]]
                .map(text => text.split(' ')[0])
                .join(', ');
              return bumpChangelogs({
                packageNames: [packageName],
                prLink: data.html_url,
                changesDescription: `${description} - ${descriptionDetail}`,
              });
            }),
          ),
        )
        .then(() => commitChanges('Medea - Update changelogs'));
    })
    .catch(e => {
      // eslint-disable-next-line no-console
      console.error(e);
      // eslint-disable-next-line no-console
      if (e.stdout) console.error(e.stdout);
      // eslint-disable-next-line no-console
      if (e.stderr) console.error(e.stderr);
      process.exit(1);
    });
};

module.exports = medea;
