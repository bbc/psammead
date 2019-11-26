const GitHub = require('github-api');
const getPackageNames = require('./getPackageNames');
const getPRBody = require('../getPullRequestBody');

const createPullRequest = ({ packages, bumpedPackagesObj, branchName }) => {
  const gh = new GitHub({
    token: process.env.GITHUB_TOKEN,
  });

  const repo = gh.getRepo('bbc', 'psammead');
  const title = `Talos - Bump ${getPackageNames(packages)}`;

  // eslint-disable-next-line no-console
  console.log(`* Creating Pull Request with title "${title}"`);

  return repo.createPullRequest({
    title,
    base: 'latest',
    body: getPRBody(bumpedPackagesObj),
    head: branchName,
  });
};

module.exports = createPullRequest;
