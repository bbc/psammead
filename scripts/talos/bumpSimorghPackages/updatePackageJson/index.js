const commitRemoteChanges = require('../../../utilities/commitRemoteChanges');

const updatePackageJson = async (
  packageJson,
  publishedPackages,
  branchName,
) => {
  const newPackageJson = { ...packageJson };
  Object.keys(publishedPackages).forEach(key => {
    if (newPackageJson.dependencies[key])
      newPackageJson.dependencies[key] = publishedPackages[key];
  });
  await commitRemoteChanges({
    repoName: 'simorgh',
    branchName,
    path: 'package.json',
    content: JSON.stringify(newPackageJson),
    message: 'Talos - Update package.json',
  });
  return newPackageJson;
};

module.exports = updatePackageJson;
