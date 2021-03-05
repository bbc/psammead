const { exec } = require('child_process');
const getPackages = require('../getPackages');

const isAlpha = packageDir =>
  new Promise((resolve, reject) => {
    exec(
      'npm version',
      {
        cwd: packageDir,
      },
      (error, stdout) => {
        if (error) {
          reject(error);
        } else {
          const alphaRegex = new RegExp(/@bbc.*-alpha/);
          resolve(alphaRegex.test(stdout));
        }
      },
    );
  });

const runExec = async (version, packageDir) => {
  const isAlphaVersion = await isAlpha(packageDir);
  const versionTag = isAlphaVersion ? 'prerelease' : version;

  return new Promise((resolve, reject) => {
    exec(
      `yarn version --${versionTag} --no-git-tag-version`,
      {
        cwd: packageDir,
      },
      error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      },
    );
  });
};

module.exports = ({ packages, version }) => {
  const packagesData = getPackages();
  const packagePaths = packages.map(
    packageName => packagesData[packageName].location,
  );
  const bumpVersion = packagePath => runExec(version, packagePath);

  return Promise.all([
    packages,
    packagePaths,
    ...packagePaths.map(bumpVersion),
  ]);
};
