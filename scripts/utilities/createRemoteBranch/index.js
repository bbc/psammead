const getGhRepo = require('../getGhRepo');

const createRemoteBranch = async ({
  username,
  repoName,
  newBranch,
  oldBranch,
}) => {
  if (!newBranch) return Promise.reject(Error('Invalid new branch name'));

  const fromBranch = oldBranch || 'latest';
  const repo = await getGhRepo(username, repoName);

  // eslint-disable-next-line no-console
  console.log(`* Creating remote branch "${newBranch}" from "${fromBranch}"`);

  return repo.createBranch(fromBranch, newBranch);
};

module.exports = createRemoteBranch;
