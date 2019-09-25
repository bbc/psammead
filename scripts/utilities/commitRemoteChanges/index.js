const GitHub = require('github-api');

const commitChanges = async (
  username,
  repoName,
  branch,
  path,
  content,
  message,
) => {
  const gh = new GitHub({
    token: process.env.GITHUB_TOKEN,
  });
  const repo = gh.getRepo(username, repoName);
  return repo.writeFile(branch, path, content, message, {});
};

module.exports = commitChanges;
