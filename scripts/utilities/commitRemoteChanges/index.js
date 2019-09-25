const getGhRepo = require('../getGhRepo');

const commitChanges = async ({
  username,
  repoName,
  branch,
  path,
  content,
  message,
}) => {
  const repo = getGhRepo(username, repoName);
  return repo.writeFile(branch, path, content, message, {});
};

module.exports = commitChanges;
