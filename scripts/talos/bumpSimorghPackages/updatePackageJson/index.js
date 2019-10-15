const semver = require('semver');
const commitRemoteChanges = require('../../../utilities/commitRemoteChanges');

const shouldUpdate = (oldVersion, newVersion) => {
  return (
    semver.validRange(oldVersion) &&
    semver.validRange(oldVersion) &&
    semver.intersects(oldVersion, newVersion)
  );
};

const mergeUpdates = (packageJson, publishedPackages) => {
  let newPackageJson = { ...packageJson };
  Object.keys(publishedPackages).forEach(key => {
    const newVersion = publishedPackages[key];
    const oldVersion = newPackageJson.dependencies[key];
    const oldDevVersion = newPackageJson.devDependencies[key];

    if (shouldUpdate(oldVersion, newVersion))
      newPackageJson = {
        ...newPackageJson,
        dependencies: { ...newPackageJson.dependencies, [key]: newVersion },
      };
    if (shouldUpdate(oldDevVersion, newVersion))
      newPackageJson = {
        ...newPackageJson,
        devDependencies: {
          ...newPackageJson.devDependencies,
          [key]: newVersion,
        },
      };
  });
  return newPackageJson;
};

const updatePackageJson = async (
  packageJson,
  publishedPackages,
  branchName,
) => {
  const newPackageJson = mergeUpdates(packageJson, publishedPackages);
  await commitRemoteChanges({
    repoName: 'simorgh',
    branchName,
    path: 'package.json',
    content: JSON.stringify(newPackageJson, null, 2),
    message: 'Talos - Update package.json',
  });
  return newPackageJson;
};

module.exports = updatePackageJson;
