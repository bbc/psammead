const PRs = require('../PRs.json');

const getPRNumber = () => {
  const branchName = [];
  const pullRequestNumber = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < PRs.length; index++) {
    branchName[index] = PRs[index].head.ref;
    if (branchName[index].includes('dependabot') === true) {
      pullRequestNumber[index] = PRs[index].number;
    }
  }
  return pullRequestNumber.filter(function(one) {
    return one != null;
  });
};

module.exports = getPRNumber;
