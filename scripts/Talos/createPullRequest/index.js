const GitHub = require('github-api');
const getPRBody = require('../getPullRequestBody');

const createPullRequest = ({ packages, bumpedPackages, branchName }) => {
  const gh = new GitHub({
    token: process.env.GITHUB_TOKEN,
  });

  const repo = gh.getRepo('bbc', 'psammead');
  const title = `Talos - Bump ${packages.join(', ')}`;

  // eslint-disable-next-line no-console
  console.log(`* Creating Pull Request with title "${title}"`);

  return repo.createPullRequest({
    title,
    body: getPRBody(packages, bumpedPackages),
    head: branchName,
    base: 'BumperBotIntegrate-new-new-new-new-new',
    draft: true,
  });
};

module.exports = createPullRequest;
