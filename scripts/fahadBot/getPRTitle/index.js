const PRs = require('../PRs.json');

const getPRTitle = () => {
  console.log('Getting Pull Request Titles');
  const branchName = [];
  const PRTitle = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < PRs.length; index++) {
    branchName[index] = PRs[index].head.ref;
    if (branchName[index].includes('dependabot') === true) {
      PRTitle[index] = PRs[index].title;
    } else {
      delete PRTitle[index];
    }
  }
  return PRTitle.filter(function(one) {
    return one != null;
  });
};

module.exports = getPRTitle;
