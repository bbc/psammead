const getRemoteFile = require('../../utilities/getRemoteFile');
const createRemoteBranch = require('../../utilities/createRemoteBranch');
const createPullRequest = require('../../utilities/createPullRequest');
const getPackageNames = require('../createPullRequest/getPackageNames');
const getChangelogHead = require('../getChangelogHead');
const getUpdates = require('./getUpdates');
const updatePackageLock = require('./updatePackageLock');
const updatePackageJson = require('./updatePackageJson');

const path = 'package.json';
const repoName = 'simorgh';

const getSimorghPullRequestBody = updates => {
  return updates
    .map(update => `${update}\n\n${getChangelogHead(update)}`)
    .join('\n\n\n');
};

const bumpSimorghPackages = async (publishedPackages, branchName) => {
  const packageList = Object.keys(publishedPackages);
  const title = `Talos - Bump ${getPackageNames(packageList)}`;

  const response = await getRemoteFile({
    repoName,
    branch: 'latest',
    path,
  });
  const oldPackageJson = JSON.parse(response.data.contents);
  const updates = [
    ...new Set([
      ...getUpdates(oldPackageJson.dependencies, publishedPackages),
      ...getUpdates(oldPackageJson.devDependencies, publishedPackages),
    ]),
  ];
  await createRemoteBranch({ newBranch: branchName, repoName });
  const newPackageJson = await updatePackageJson(
    oldPackageJson,
    publishedPackages,
    branchName,
  );
  await updatePackageLock(newPackageJson, branchName);
  const body = getSimorghPullRequestBody(updates);
  return createPullRequest({ branchName, repoName, title, body });
};

module.exports = bumpSimorghPackages;
