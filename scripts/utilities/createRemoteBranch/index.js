const getGhRepo = require('../getGhRepo');

const createRemoteBranch = async ({
  username,
  repoName,
  newBranch,
  oldBranch,
}) => {
  const fromBranch = oldBranch || 'latest';
  const repo = getGhRepo(username, repoName);

  // eslint-disable-next-line no-console
  console.log(`* Creating remote branch "${newBranch}" from "${fromBranch}"`);

  return repo.createBranch(fromBranch, newBranch);
};

module.exports = createRemoteBranch;
