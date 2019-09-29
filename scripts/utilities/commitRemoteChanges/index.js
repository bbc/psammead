const getGhRepo = require('../getGhRepo');

const commitChanges = async ({
  username,
  repoName,
  branchName,
  path,
  content,
  message,
}) => {
  const repo = getGhRepo(username, repoName);

  // eslint-disable-next-line no-console
  console.log(`* Updating remote file "${path}"`);

  return repo.writeFile(branchName, path, content, message, {});
};

module.exports = commitChanges;
