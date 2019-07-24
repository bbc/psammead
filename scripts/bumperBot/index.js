const { execSync } = require('child_process');
const GitHub = require('github-api');
const getChangedPackages = require('./getChangedPackages');
const getPRBody = require('./getPRBody');
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
    .then(() => {
      const branchName = `BumperBot${getDate()}`;

      execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });
      execSync(`git add packages`, { stdio: 'inherit' });
      execSync(`git commit -m "Bump Deps"`, { stdio: 'inherit' });
      execSync(`git push origin HEAD`, { stdio: 'inherit' });

      const gh = new GitHub({
        token: process.env.GITHUB_TOKEN,
      });

      const repo = gh.getRepo('bbc', 'psammead');

      return repo.createPullRequest({
        title: `BumperBot: Bump ${packages.join(', ')}`,
        body: getPRBody(packages, bumpedPackages),
        head: branchName,
        base: 'BumperBotIntegrate-new-new-new-new-new',
        draft: true,
      });
    })
    .then(({ data }) => {
      return bumpChangelogs({
        packageNames: bumpedPackagesNoBBCPrefix,
        prLink: data.html_url,
        changesDescription: 'Bump Dependencies',
      });
    })
    .then(() => {
      execSync(`git add packages`, { stdio: 'inherit' });
      execSync(`git commit -m "Bump Deps"`, { stdio: 'inherit' });
      execSync(`git push origin HEAD`, { stdio: 'inherit' });
    });
});
