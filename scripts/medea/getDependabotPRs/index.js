const axios = require('axios');

const user = 'FK78';
const authToken = process.env.GITHUB_TOKEN;

const getPullRequests = async () => {
  const response = await axios.get(
    'https://api.github.com/repos/bbc/psammead/pulls',
    {
      headers: {
        'content-type': 'application/vnd.github.v3+json',
      },
      auth: {
        username: user,
        password: authToken,
      },
    },
  );
  const pullRequestData = response.data;
  return pullRequestData;
};

module.exports = getPullRequests;
