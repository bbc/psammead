const GitHub = require('github-api');

const getRemoteFile = async (username, repoName, branch, path) => {
  const gh = new GitHub({
    token: process.env.GITHUB_TOKEN,
  });
  const repo = gh.getRepo(username, repoName);
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
