const commitRemoteChanges = require('../../../utilities/commitRemoteChanges');
const updatePackageFile = require('../../updatePackageFile');

const updatePackageJson = async (
  packageJson,
  publishedPackages,
  branchName,
) => {
  const newPackageJson = updatePackageFile(packageJson, publishedPackages);
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
