const axios = require('axios');

const authToken = process.env.GITHUB_TOKEN;

const createNewBranch = async () => {
  const response = await axios.post(
    'https://api.github.com/repos/bbc/psammead/git/refs',
    {
      ref: `refs/heads/fahadBot-${Math.floor(Math.random() * 100000000 + 1)}`,
      sha: 'a7a621ec4379a2be86ef6979963e9df9f73237bf',
    },
    {
      headers: {
        'content-type': 'application/vnd.github.v3+json',
        Authorization: authToken,
      },
    },
  );
  const postResponse = response.data.ref;
  const newBranchName = postResponse.slice(11, 25);
  return newBranchName;
};

module.exports = createNewBranch;
