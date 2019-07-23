const { execSync } = require('child_process');
const getChangedPackages = require('./getChangedPackages');
const upgradeDependencies = require('../upgradeDependencies');
const bumpPackages = require('../bumpPackages/index.js');
const getPackagePath = require('../utilities/getPackagePath');
const runNpmInstall = require('../regeneratePackageLocks/runNpmInstall');
const bumpChangelogs = require('../bumpChangelogs/index.js');

const packages = getChangedPackages();
const stuff = upgradeDependencies(packages);

const getDate = () => {
  const today = new Date();
  const date = `${today.getFullYear()}${today.getMonth() +
    1}${today.getDate()}`;
  const time = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
  return date + time;
};

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
      execSync(`git fetch`);
      execSync(`git checkout latest`);
      execSync(`git checkout -b BumperBot${getDate()}`);
      execSync(`git add packages`);
      execSync(`git commit -m "Bump Deps"`);
      execSync(`git push origin HEAD`);

      console.log('Done');
    });
});
