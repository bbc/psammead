const { execSync } = require('child_process');
const GitHub = require('github-api');
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
      const branchName = `BumperBot${getDate()}`;

      execSync(`git fetch --all`);
      execSync(`git checkout -f latest`);
      execSync(`git checkout -b ${branchName}`);
      execSync(`git add packages`);
      execSync(`git commit -m "Bump Deps"`);
      execSync(`git push origin HEAD`);

      const gh = new GitHub({
        token: process.env.GITHUB_TOKEN,
      });

      return gh.createPullRequest({
        title: 'Hello World',
        body: 'Body of PR',
        head: branchName,
        base: 'latest',
      });
    })
    .then(({ html_url }) => { // eslint-disable-line
      console.log(`PR is at ${html_url}`); // eslint-disable-line
    });
});
