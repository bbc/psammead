const fs = require('fs');
const { exec, rm, mkdir } = require('shelljs');

const readFileSync = require('../../utilities/readFileSync');
const getRemoteFile = require('../../utilities/getRemoteFile');
const createRemoteBranch = require('../../utilities/createRemoteBranch');
const commitRemoteChanges = require('../../utilities/commitRemoteChanges');
const createPullRequest = require('../../utilities/createPullRequest');
const getBranchName = require('../getBranchName');
const getPackageNames = require('../createPullRequest/getPackageNames');
const getChangelogHead = require('../getChangelogHead');

const path = 'package.json';
const lockPath = 'package-lock.json';
const repoName = 'simorgh';
const branchName = getBranchName();

const getPublishedPackages = bumpedPackages => {
  const publishedPackages = {};
  Object.values(bumpedPackages).forEach(bumpedPackage => {
    const sections = bumpedPackage.split(' ');
    if (sections.length === 3) {
      const packageName = sections[0];
      const version = sections[2];
      publishedPackages[packageName] = version;
    }
  });
  return publishedPackages;
};

const getUpdates = (dependencies, publishedPackages) => {
  const updates = [];
  Object.keys(publishedPackages).forEach(packageName => {
    const version = dependencies[packageName];
    if (version)
      updates.push(
        `${packageName}  ${version}  →  ${publishedPackages[packageName]}`,
      );
  });
  return updates;
};

const updatePackageJson = async (packageJson, publishedPackages) => {
  const newPackageJson = { ...packageJson };
  Object.keys(publishedPackages).forEach(key => {
    if (newPackageJson.dependencies[key])
      newPackageJson.dependencies[key] = publishedPackages[key];
  });
  await commitRemoteChanges({
    repoName,
    branchName,
    path,
    content: JSON.stringify(newPackageJson),
    message: 'Talos - Update package.json',
  });
  return newPackageJson;
};

const updatePackageLock = async packageFile => {
  const lockResponse = await getRemoteFile({
    repoName,
    branch: 'latest',
    path: lockPath,
  });
  const packageLock = lockResponse.data.contents;
  const folder = 'simorgh-package';
  rm('-rf', `./${folder}`);
  mkdir(`./${folder}`);
  fs.writeFileSync(`./${folder}/package.json`, packageFile);
  fs.writeFileSync(`./${folder}/package-lock.json`, packageLock);
  exec('npm install', { cwd: `./${folder}` });
  const newPackageLock = readFileSync(`./${folder}/package-lock.json`);
  rm('-rf', `./${folder}`);

  commitRemoteChanges({
    repoName,
    branchName,
    path,
    content: JSON.stringify(newPackageLock),
    message: 'Talos - Update package-lock.json',
  });
};

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
