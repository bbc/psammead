const axios = require('axios');

const authToken = process.env.GITHUB_TOKEN;

const getPullRequests = async () => {
  console.log('Getting Dependabot Pull Requests');
  const response = await axios.get(
    'https://api.github.com/repos/bbc/psammead/pulls',
    {
      headers: {
        'content-type': 'application/vnd.github.v3+json',
        Authorization: authToken,
      },
    },
  );
  const pullRequestData = response.data;
  return pullRequestData;
};

module.exports = getPullRequests;
