const axios = require('axios');
const getBranchName = require('../getBranchName');
const createNewBranch = require('../createNewBranch');

const authToken = process.env.GITHUB_TOKEN;

const branches = getBranchName();

const mergePullRequests = async () => {
  const baseBranch = await createNewBranch();
  console.log('Merging pull requests');
  const axiosRequest = branches1 => {
    axios
      .post(
        'https://api.github.com/repos/bbc/psammead/merges',
        {
          base: `${baseBranch}`,
          head: `${branches1}`,
          commit_message: 'Beep boop... merging stuff',
        },
        {
          headers: {
            'content-type': 'application/vnd.github.v3+json',
            Authorization: authToken,
          },
        },
      )
      .catch(function(error) {
        console.log(error);
      });
  };
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index <= branches.length - 1; index++) {
    axiosRequest(branches[index]);
  }
  return baseBranch;
};

module.exports = mergePullRequests;
