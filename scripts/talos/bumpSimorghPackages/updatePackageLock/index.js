const fs = require('fs');
const { exec, rm, mkdir } = require('shelljs');

const readFileSync = require('../../../utilities/readFileSync');
const commitRemoteChanges = require('../../../utilities/commitRemoteChanges');
const getRemoteFile = require('../../../utilities/getRemoteFile');

const updatePackageLock = async (packageFile, branchName) => {
  const lockResponse = await getRemoteFile({
    repoName: 'simorgh',
    branch: 'latest',
    path: 'package-lock.json',
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
    repoName: 'simorgh',
    branchName,
    path: 'package-lock.json',
    content: newPackageLock,
    message: 'Talos - Update package-lock.json',
  });
};

module.exports = updatePackageLock;
