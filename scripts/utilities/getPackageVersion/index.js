const readFile = require('../readFileSync');
const getPackagePath = require('../getPackagePath');

const getPackageVersion = packageName => {
  const path = getPackagePath(packageName.replace('@bbc/', ''));
  const packageJson = JSON.parse(readFile(`${path}/package.json`));
  return packageJson.version;
};

module.exports = getPackageVersion;
