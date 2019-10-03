const getGhRepo = require('../getGhRepo');

const getRemoteFile = async ({ username, repoName, branch, path }) => {
  if (!path) return Promise.reject(Error('Invalid path'));

  const repo = await getGhRepo(username, repoName);
  const response = await repo.getContents(branch || 'latest', path);
  return {
    ...response,
    data: {
      ...response.data,
      contents: Buffer.from(response.data.content, 'base64').toString('binary'),
    },
  };
};

module.exports = getRemoteFile;
