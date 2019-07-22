const { exec } = require('child_process');
const getPackagePath = require('../utilities/getPackagePath');
const getPackages = require('../utilities/getPackages');

const runExec = (version, packageDir) =>
  new Promise((resolve, reject) => {
    exec(
      `npm version ${version}`,
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

module.exports = ({ packageNames, version }) => {
  const packagePaths = getPackages();
  const bumpVersion = packageName =>
    runExec(version, getPackagePath(packageName));

  return Promise.all([
    packageNames,
    packagePaths,
    ...packageNames.map(bumpVersion),
  ]);
};
