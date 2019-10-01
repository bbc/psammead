const getRemoteFile = require('../../utilities/getRemoteFile');
const createRemoteBranch = require('../../utilities/createRemoteBranch');
const createPullRequest = require('../../utilities/createPullRequest');
const getBranchName = require('../getBranchName');
const getPackageNames = require('../createPullRequest/getPackageNames');
const getChangelogHead = require('../getChangelogHead');
const getPublishedPackages = require('./getPublishedPackages');
const getUpdates = require('./getUpdates');
const updatePackageLock = require('./updatePackageLock');
const updatePackageJson = require('./updatePackageJson');

const path = 'package.json';
const repoName = 'simorgh';
const branchName = getBranchName();

const getSimorghPullRequestBody = updates => {
  return updates.map(update => getChangelogHead(update)).join('\n\n');
};

const bumpSimorghPackages = async bumpedPackages => {
  const publishedPackages = getPublishedPackages(bumpedPackages);
  const packageList = Object.keys(publishedPackages);
  const title = `Talos - Bump ${getPackageNames(packageList)}`;

  const response = await getRemoteFile({
    repoName,
    branch: 'latest',
    path,
  });
  const oldPackageJson = JSON.parse(response.data.contents);
  const updates = [
    ...getUpdates(oldPackageJson.dependencies, publishedPackages),
    ...getUpdates(oldPackageJson.devDependencies, publishedPackages),
  ];
  await createRemoteBranch({ newBranch: branchName, repoName });
  const newPackageJson = await updatePackageJson(
    oldPackageJson,
    publishedPackages,
  );
  await updatePackageLock(newPackageJson);
  const body = getSimorghPullRequestBody(updates);
  createPullRequest({ branchName, repoName, title, body });
};

module.exports = bumpSimorghPackages;
