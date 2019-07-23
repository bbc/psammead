const getChangedPackages = require('./getChangedPackages');
const upgradeDependencies = require('../upgradeDependencies');
const bumpPackages = require('../bumpPackages/index.js');
const getPackagePath = require('../utilities/getPackagePath');
const runNpmInstall = require('../regeneratePackageLocks/runNpmInstall');
const bumpChangelogs = require('../bumpChangelogs/index.js');

const packages = getChangedPackages();
const stuff = upgradeDependencies(packages);

stuff.then(bumpedPackages => {
  const bumpedPackagesNoBBCPrefix = bumpedPackages.map(dep =>
    dep.replace('@bbc/', ''),
  );

  bumpPackages({ packageNames: bumpedPackagesNoBBCPrefix, version: 'patch' })
    .then(() => {
      return Promise.all(
        bumpedPackagesNoBBCPrefix.map(dep =>
          runNpmInstall(getPackagePath(dep)),
        ),
      );
    })
    .then(() =>
      bumpChangelogs({
        packageNames: bumpedPackagesNoBBCPrefix,
        prLink: 'https://hello.com',
        changesDescription: 'Bump Dependancies',
      }),
    )
    .then(() => {
      console.log('Done');
    });
});
