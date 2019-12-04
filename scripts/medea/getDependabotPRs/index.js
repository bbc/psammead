const axios = require('axios');

const authToken = 'process.env.GITHUB_TOKEN';

const getPullRequests = async () => {
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
  return pullRequestData.filter(function(one) {
    return one != null;
  });
};

module.exports = getPullRequests;
