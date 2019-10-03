const getGhRepo = require('../getGhRepo');

const createPullRequest = async ({
  branchName,
  title,
  body,
  base,
  username,
  repoName,
}) => {
  if (!branchName) return Promise.reject(Error('Invalid branch name'));
  if (!title) return Promise.reject(Error('Invalid pull request title'));
  if (!body) return Promise.reject(Error('Invalid pull request body'));

  const repo = await getGhRepo(username, repoName);

  // eslint-disable-next-line no-console
  console.log(`* Creating Pull Request with title "${title}"`);

  return repo.createPullRequest({
    title,
    body,
    head: branchName,
    base: base || 'latest',
  });
};

module.exports = createPullRequest;
