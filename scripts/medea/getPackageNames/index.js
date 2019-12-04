const PRs = require('../PRs.json');

const getPackageNames = () => {
  const branchName = [];
  const packageName = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < PRs.length; index++) {
    branchName[index] = PRs[index].head.ref;
    if (branchName[index].includes('dependabot') === true) {
      const PRTitle = PRs[index].title;
      packageName[index] = PRTitle.substring(
        PRTitle.lastIndexOf('p') + 1,
        PRTitle.lastIndexOf('f'),
      );
    }
  }
  return packageName;
};

module.exports = getPackageNames;
