const getGhRepo = require('../getGhRepo');

const commitChanges = async ({
  username,
  repoName,
  branchName,
  path,
  content,
  message,
}) => {
  if (!branchName) return Promise.reject(Error('Invalid branch name'));
  if (!path) return Promise.reject(Error('Invalid repository path'));
  if (!content) return Promise.reject(Error('Invalid commit content'));
  if (!message) return Promise.reject(Error('Invalid commit message'));

  const repo = await getGhRepo(username, repoName);

  // eslint-disable-next-line no-console
  console.log(`* Updating remote file "${path}"`);

  return repo.writeFile(branchName, path, content, message, {});
};

module.exports = commitChanges;
