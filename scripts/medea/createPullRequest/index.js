const axios = require('axios');
const getPullRequestBody = require('../getPullRequestBody/index');

const authToken = 'process.env.GITHUB_TOKEN';

const createPullRequest = ({ bumpedPackagesObj, branchName }) => {
  const axiosPR = async () => {
    await axios.post(
      'https://api.github.com/repos/bbc/psammead/pulls',
      {
        title: 'TEST',
        body: getPullRequestBody(bumpedPackagesObj),
        head: branchName,
        base: 'latest',
      },
      {
        headers: {
          'content-type': 'application/vnd.github.v3+json',
          Authorization: authToken,
        },
      },
    );
  };
  console.log('Running CPR');
  axiosPR();
};

module.exports = createPullRequest;
