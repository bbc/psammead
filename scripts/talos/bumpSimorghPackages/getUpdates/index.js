const semver = require('semver');

const getUpdates = (dependencies, publishedPackages) => {
  return Object.keys(publishedPackages)
    .filter(packageName => {
      const oldVersion = dependencies[packageName];
      const newVersion = publishedPackages[packageName];
      return (
        semver.validRange(oldVersion) &&
        semver.validRange(newVersion) &&
        semver.intersects(oldVersion, newVersion)
      );
    })
    .map(
      packageName =>
        `${packageName}  ${dependencies[packageName]}  →  ${publishedPackages[packageName]}`,
    );
};

module.exports = getUpdates;
