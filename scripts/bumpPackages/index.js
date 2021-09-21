const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const getPackagePath = require('../utilities/getPackagePath');
const getPackages = require('../utilities/getPackages');

const isAlpha = packageDir => {
  const { version } = JSON.parse(readFileSync(`${packageDir}/package.json`));

  return version.includes('-alpha');
};

const runExec = (version, packageDir) => {
  if (!packageDir) {
    return null;
  }
  const isAlphaVersion = isAlpha(packageDir);
  const versionTag = isAlphaVersion ? 'prerelease' : version;

  return execSync(
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
};

module.exports = ({ packageNames, version }) => {
  const packagePaths = getPackages().map(({ location }) => location);
  const bumpVersion = packageName =>
    runExec(version, getPackagePath(packageName));

  packageNames.map(bumpVersion);

  return [packageNames, packagePaths];
};
