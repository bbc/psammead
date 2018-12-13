const semver = require('semver');
const getRegistryVersion = require('../src/getRegistryVersion');

module.exports = packageJson =>
  !packageJson.private &&
  semver.gt(packageJson.version, getRegistryVersion(packageJson.name));
