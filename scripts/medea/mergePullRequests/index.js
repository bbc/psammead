const fs = require('fs');
const axios = require('axios');
const getBranchName = require('../getBranchName');
const createNewBranch = require('../createNewBranch');
const getDependabotPRs = require('../getDependabotPRs');
const PRs = require('../PRs.json');

let baseBranch;

const authToken = '';

const mergePullRequests = () => {
  const branchName = [];
  createNewBranch();

  getDependabotPRs().then(value => {
    const dependabotPRData = JSON.stringify(value);
    fs.writeFileSync('../PRs.json', dependabotPRData);
  });

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < PRs.length; index++) {
    branchName[index] = PRs[index].head.ref;
    if (branchName[index].includes('medea-') === true) {
      baseBranch = branchName[index];
    }
  }

  const axiosPRCreate = async () => {
    const axiosRequest = index => {
      axios.post(
        'https://api.github.com/repos/bbc/psammead/merges',
        {
          base: baseBranch,
          head: `${getBranchName[index]}`,
          commit_message: 'Beep boop... merging stuff',
        },
        {
          headers: {
            'content-type': 'application/vnd.github.v3+json',
            Authorization: authToken,
          },
        },
      );
    };
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < getBranchName.length; index++) {
      axiosRequest(index);
    }
  };
  console.log('Running CPR');
  axiosPRCreate(baseBranch);
};

module.exports = mergePullRequests;
