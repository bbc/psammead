const axios = require('axios');

const authToken = '';

const createNewBranch = () => {
  const axiosPostCreate = async () => {
    await axios.post(
      'https://api.github.com/repos/bbc/psammead/git/refs',
      {
        ref: `refs/heads/medea-${Math.floor(Math.random() * 100000000 + 1)}`,
        sha: 'a7a621ec4379a2be86ef6979963e9df9f73237bf',
      },
      {
        headers: {
          'content-type': 'application/vnd.github.v3+json',
          Authorization: authToken,
        },
      },
    );
  };
  axiosPostCreate();
};

module.exports = createNewBranch;
