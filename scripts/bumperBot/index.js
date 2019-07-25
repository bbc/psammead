const getChangedPackages = require('./getChangedPackages');
const upgradeDependencies = require('../upgradeDependencies');
const bumpPackages = require('../bumpPackages/index.js');
const getPackagePath = require('../utilities/getPackagePath');
const runNpmInstall = require('../regeneratePackageLocks/runNpmInstall');
const bumpChangelogs = require('../bumpChangelogs/index.js');
const checkoutBranch = require('./checkoutBranch');
const commitChanges = require('./commitChanges');
const createPR = require('./createPR');
const getBranchName = require('./getBranchName');

const packages = getChangedPackages();
const stuff = upgradeDependencies(packages);
const branchName = getBranchName();

stuff.then(bumpedPackages => {
  const bumpedPackagesNoBBCPrefix = bumpedPackages.map(dep =>
    dep.replace('@bbc/', ''),
  );

  bumpPackages({ packageNames: bumpedPackagesNoBBCPrefix, version: 'patch' })
    .then(() =>
      Promise.all(
        bumpedPackagesNoBBCPrefix.map(dep =>
          runNpmInstall(getPackagePath(dep)),
        ),
      ),
    )
    .then(() => checkoutBranch(branchName))
    .then(() => {
      commitChanges('Bump Dependencies');

      return createPR({ packages, bumpedPackages, branchName });
    })
    .then(({ data }) =>
      bumpChangelogs({
        packageNames: bumpedPackagesNoBBCPrefix,
        prLink: data.html_url,
        changesDescription: 'Bump Dependencies',
      }),
    )
    .then(() => {
      commitChanges('Update changelogs');
    });
});
