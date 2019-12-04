const PRs = require('../PRs.json');

const getBranchName = () => {
  const branchName = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < PRs.length; index++) {
    branchName[index] = PRs[index].head.ref;
    if (branchName[index].includes('dependabot') !== true) {
      delete branchName[index];
    }
  }
  return branchName.filter(function(one) {
    return one != null;
  });
};

module.exports = getBranchName;
