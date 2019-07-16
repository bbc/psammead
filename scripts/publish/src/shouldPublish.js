const semver = require('semver');

module.exports = async (packageJson, lts) => {
  return !packageJson.private && semver.gt(packageJson.version, lts);
};
