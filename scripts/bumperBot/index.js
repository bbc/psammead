const getChangedPackages = require('./getChangedPackages');
const upgradeDependencies = require('../upgradeDependencies');
const bumpPackages = require('../bumpPackages/index.js');
const getPackagePath = require('../utilities/getPackagePath');
const runNpmInstall = require('../regeneratePackageLocks/runNpmInstall');
const bumpChangelogs = require('../bumpChangelogs/index.js');
const checkoutBranch = require('./checkoutBranch');
const commitChanges = require('./commitChanges');
const createPullRequest = require('./createPullRequest');
const getBranchName = require('./getBranchName');

const packages = getChangedPackages();
const branchName = getBranchName();

// if (packages.length <= 0) {
//   // eslint-disable-next-line no-console
//   console.log(`No packages were published!`);
//   process.exit();
// }

upgradeDependencies(packages)
  .then(bumpedPackages => {
    // if (bumpedPackages.length <= 0) {
    //   // eslint-disable-next-line no-console
    //   console.log('No packages to bump!');
    //   process.exit();
    // }

    const bumpedPackagesNoBBCPrefix = bumpedPackages.map(dep =>
      dep.replace('@bbc/', ''),
    );

    return bumpPackages({
      packageNames: bumpedPackagesNoBBCPrefix,
      version: 'patch',
    })
      .then(() =>
        Promise.all(
          bumpedPackagesNoBBCPrefix.map(dep =>
            runNpmInstall(getPackagePath(dep)),
          ),
        ),
      )
      .then(() => checkoutBranch(branchName))
      .then(() => commitChanges('Talos - Bump Dependencies'))
      .then(() => createPullRequest({ packages, bumpedPackages, branchName }))
      .then(({ data }) =>
        bumpChangelogs({
          packageNames: bumpedPackagesNoBBCPrefix,
          prLink: data.html_url,
          changesDescription: 'Talos - Bump Dependencies',
        }),
      )
      .then(() => commitChanges('Talos - Update changelogs'));
  })
  .catch(e => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  });
