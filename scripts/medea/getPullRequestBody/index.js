const PRs = require('../PRs.json');

const getPRBody = () => {
  const branchName = [];
  const PRBody = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < PRs.length; index++) {
    branchName[index] = PRs[index].head.ref;
    if (branchName[index].includes('dependabot') === true) {
      PRBody[index] = PRs[index].body;
    } else {
      delete PRBody[index];
    }
  }
  return PRBody.filter(function(one) {
    return one != null;
  });
};

module.exports = getPRBody;
