const GitHub = require('github-api');
const getPRBody = require('./getPRBody');

const createPR = ({ packages, bumpedPackages, branchName }) => {
  const gh = new GitHub({
    token: process.env.GITHUB_TOKEN,
  });

  const repo = gh.getRepo('bbc', 'psammead');

  return repo.createPullRequest({
    title: `BumperBot: Bump ${packages.join(', ')}`,
    body: getPRBody(packages, bumpedPackages),
    head: branchName,
    base: 'BumperBotIntegrate-new-new-new-new-new',
    draft: true,
  });
};

module.exports = createPR;
