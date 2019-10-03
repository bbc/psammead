const commitRemoteChanges = require('../../../utilities/commitRemoteChanges');

const mergeUpdates = (packageJson, publishedPackages) => {
  const newPackageJson = { ...packageJson };
  Object.keys(publishedPackages).forEach(key => {
    if (newPackageJson.dependencies[key])
      newPackageJson.dependencies[key] = publishedPackages[key];
    if (newPackageJson.devDependencies[key])
      newPackageJson.devDependencies[key] = publishedPackages[key];
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
