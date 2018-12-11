const semver = require('semver');
const getRegistryVersion = require('../src/getRegistry');

module.exports = packageJson =>
  (!packageJson.publish || packageJson.publish !== 'false') &&
  semver.gt(packageJson.version, getRegistryVersion(packageJson.name));
