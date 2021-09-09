const { exec } = require('child_process');
const getPackagePath = require('../utilities/getPackagePath');
const getPackages = require('../utilities/getPackages');

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
  if (!packageDir) {
    return Promise.resolve();
  }
  const isAlphaVersion = await isAlpha(packageDir);
  const versionTag = isAlphaVersion ? 'prerelease' : version;

  return new Promise((resolve, reject) => {
    exec(
      `yarn version ${versionTag}`,
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

module.exports = ({ packageNames, version }) => {
  const packagePaths = getPackages().map(({ location }) => location);
  const bumpVersion = packageName =>
    runExec(version, getPackagePath(packageName));
  return Promise.all([
    packageNames,
    packagePaths,
    ...packageNames.map(bumpVersion),
  ]);
};
