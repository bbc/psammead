const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const getPackagePath = require('../utilities/getPackagePath');
const getPackages = require('../utilities/getPackages');

const getVersion = packageDir => {
  const { version } = JSON.parse(readFileSync(`${packageDir}/package.json`));

  return version;
};

const runExec = (strategy, packageName) => {
  const packageDir = getPackagePath(packageName);

  if (packageDir) {
    const version = getVersion(packageDir);
    const isAlphaVersion = version.includes('-alpha');
    const versionTag = isAlphaVersion ? 'prerelease' : strategy;

    execSync(
      `yarn version ${versionTag}`,
      {
        cwd: packageDir,
      },
      error => {
        if (error) {
          console.log(error);
        }
      },
    );

    const newVersion = getVersion(packageDir);

    console.log(
      '✔',
      packageName,
      `version has been bumped: ${version} -> ${newVersion}`,
    );
  }
};

module.exports = ({ packageNames, strategy }) => {
  const packagePaths = getPackages().map(({ location }) => location);
  const bumpVersion = packageName => runExec(strategy, packageName);

  packageNames.map(bumpVersion);

  return [packageNames, packagePaths];
};
