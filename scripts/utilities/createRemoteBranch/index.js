const GitHub = require('github-api');

const createRemoteBranch = async (username, repoName, newBranch, oldBranch) => {
  const fromBranch = oldBranch || 'latest';
  const gh = new GitHub({
    token: process.env.GITHUB_TOKEN,
  });
  const repo = gh.getRepo(username, repoName);
  return repo.createBranch(fromBranch, newBranch);
};

module.exports = createRemoteBranch;
