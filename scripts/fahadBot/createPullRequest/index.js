const axios = require('axios');
const getPullRequestBody = require('../getPullRequestBody/index');
const getBranchName = require('../getBranchName');
const mergePullRequests = require('../mergePullRequests');

const authToken = process.env.GITHUB_TOKEN;

const theBranches = getBranchName();

const createPullRequest = async () => {
  const headBranch = await mergePullRequests();
  console.log(headBranch);
  console.log('Making a pull request.');
  const axiosPR = branchNames => {
    axios
      .post(
        'https://api.github.com/repos/bbc/psammead/pulls',
        {
          title: 'fahadBot - Bump dependencies',
          head: `${headBranch}`,
          base: 'latest',
          body: `${getPullRequestBody(branchNames)}`,
        },
        {
          headers: {
            'content-type': 'application/vnd.github.v3+json',
            Authorization: authToken,
          },
        },
      )
      .catch(function(error) {
        console.log(error.response.data.errors);
      });
  };
  axiosPR(theBranches);
};

createPullRequest();

module.exports = createPullRequest;
