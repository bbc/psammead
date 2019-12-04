const axios = require('axios');
const getPRNumber = require('../getPRNumber');
const getPRTitle = require('../getPRTitle');

const authToken =
  'process.env.GITHUB_TOKEN';

const closePullRequest = async () => {
  const pullRequestsToClose = getPRNumber();
  const pullRequestTitlesToClose = getPRTitle();
  const axiosRequest = index => {
    axios.patch(
      `https://api.github.com/repos/bbc/psammead/pulls/${pullRequestsToClose[index]}`,
      {
        title: pullRequestTitlesToClose[index],
        state: 'closed',
      },
      {
        headers: {
          'content-type': 'application/vnd.github.v3+json',
          Authorization: authToken,
        },
      },
    );
  };
  for (let index = 0; index < pullRequestsToClose.length; index++) {
    axiosRequest(index);
  }
};

module.exports = closePullRequest;
