const getGhRepo = require('../getGhRepo');

const createPullRequest = ({
  branchName,
  title,
  body,
  base,
  username,
  repo: repoName,
}) => {
  const repo = getGhRepo(username, repoName);

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
