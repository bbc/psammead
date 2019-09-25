const getGhRepo = require('../getGhRepo');

const createRemoteBranch = async ({
  username,
  repoName,
  newBranch,
  oldBranch,
}) => {
  const fromBranch = oldBranch || 'latest';
  const repo = getGhRepo(username, repoName);
  return repo.createBranch(fromBranch, newBranch);
};

module.exports = createRemoteBranch;
