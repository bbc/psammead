const getGhRepo = require('../getGhRepo');

const getRemoteFile = async ({ username, repoName, branch, path }) => {
  const repo = getGhRepo(username, repoName);
  const response = await repo.getContents(branch, path);
  return {
    ...response,
    data: {
      ...response.data,
      contents: Buffer.from(response.data.content, 'base64').toString('binary'),
    },
  };
};

module.exports = getRemoteFile;
