const semver = require('semver');

const shouldUpdate = (oldVersion, newVersion) => {
  return (
    semver.validRange(oldVersion) &&
    semver.validRange(oldVersion) &&
    semver.intersects(oldVersion, newVersion)
  );
};

const updatePackageFile = (oldPackageJson, publishedPackages) => {
  let packageJson = { ...oldPackageJson };
  const upgradedPackages = [];

  Object.keys(publishedPackages).forEach(key => {
    const newVersion = publishedPackages[key];

    if (packageJson.dependencies) {
      const oldVersion = packageJson.dependencies[key];
      if (shouldUpdate(oldVersion, newVersion)) {
        packageJson = {
          ...packageJson,
          dependencies: { ...packageJson.dependencies, [key]: newVersion },
        };
        // upgradedPackages = {
        //   ...upgradedPackages,
        //   [key]: { from: oldVersion, to: newVersion },
        // };
        upgradedPackages.push(`${key}  ${oldVersion}  →  ${newVersion}`);
      }
    }

    if (packageJson.devDpendencies) {
      const oldDevVersion = packageJson.devDependencies[key];
      if (shouldUpdate(oldDevVersion, newVersion)) {
        packageJson = {
          ...packageJson,
          devDependencies: {
            ...packageJson.devDependencies,
            [key]: newVersion,
          },
        };
        upgradedPackages.push(`${key}  ${oldDevVersion}  →  ${newVersion}`);
      }
    }

    if (packageJson.peerDependencies) {
      const oldPeerVersion = packageJson.peerDependencies[key];
      if (shouldUpdate(oldPeerVersion, newVersion)) {
        packageJson = {
          ...packageJson,
          devDependencies: {
            ...packageJson.devDependencies,
            [key]: newVersion,
          },
        };
        upgradedPackages.push(`${key}  ${oldPeerVersion}  →  ${newVersion}`);
      }
    }
  });
  return { packageJson, upgradedPackages };
};

module.exports = updatePackageFile;
