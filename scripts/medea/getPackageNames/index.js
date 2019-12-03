const PRs = require('../PRs.json');

const getPackageNames = () => {
  const branchName = [];
  const packageName = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < PRs.length; index++) {
    branchName[index] = PRs[index].head.ref;
    if (branchName[index].includes('dependabot') === true) {
      packageName[index] = PRs[index].title;
      packageName[index] = packageName[index].substring(
        packageName[index].lastIndexOf('p') + 1,
        packageName[index].lastIndexOf('f'),
      );
    } else {
      delete packageName[index];
    }
  }
  return packageName;
};

module.exports = getPackageNames;
