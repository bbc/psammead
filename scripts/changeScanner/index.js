/* eslint-disable no-console */
const chalk = require('chalk');
const { exec } = require('shelljs');
const { readFileSync } = require('fs');
const equals = require('ramda/src/equals');

const getChanges = require('./getChanges');

const packageFileName = 'package.json';
const lockFileName = 'yarn.lock';

// Files always required to have been changed with every psammead package change.
const requiredChanges = ['CHANGELOG.md', packageFileName];

const changes = getChanges();

const getChangedFilePath = ({ packageName, matchFile }) =>
  changes[packageName].find(changedFile => changedFile.includes(matchFile));

const isMissingRequiredChangedFile = ({ packageName, requiredFile }) =>
  !changes[packageName].some(changedFile => changedFile.includes(requiredFile));

const someDepsHaveChanged = ({ localPackageFile, remotePackageFile }) => {
  const {
    dependencies: localDeps,
    devDependencies: localDevDeps,
    peerDependencies: localPeerDeps,
  } = JSON.parse(localPackageFile);
  const {
    dependencies: remoteDeps,
    devDependencies: remoteDevDeps,
    peerDependencies: remotePeerDeps,
  } = JSON.parse(remotePackageFile);
  const depsHaveChanged = !equals(localDeps, remoteDeps);
  const devDepsHaveChanged = !equals(localDevDeps, remoteDevDeps);
  const peerDepsHaveChanged = !equals(localPeerDeps, remotePeerDeps);

  return depsHaveChanged || devDepsHaveChanged || peerDepsHaveChanged;
};

const getFileChangeError = packageName => requiredFile => {
  const isPackageFile = requiredFile === packageFileName;

  if (isPackageFile) {
    const packageFilePath = getChangedFilePath({
      packageName,
      matchFile: packageFileName,
    });
    const lockFilePath = getChangedFilePath({
      packageName,
      matchFile: lockFileName,
    });
    const packageFileHasChanged = Boolean(packageFilePath);
    const lockFileHasChanged = Boolean(lockFilePath);

    if (packageFileHasChanged && !lockFileHasChanged) {
      const localPackageFile = readFileSync(packageFilePath, 'utf8');
      const remotePackageFile = exec(
        `git show origin/latest:${packageFilePath}`,
        {
          silent: true,
        },
      ).stdout;

      if (someDepsHaveChanged({ localPackageFile, remotePackageFile })) {
        return `Branch must update ${lockFileName} in ${packageName}`;
      }
    }
  }
  if (isMissingRequiredChangedFile({ packageName, requiredFile })) {
    return `Branch must update ${requiredFile} in ${packageName}`;
  }

  return '';
};

const errors = Object.keys(changes)
  .map(packageName => requiredChanges.map(getFileChangeError(packageName)))
  .flat()
  .filter(Boolean);

/* eslint-disable no-console */
if (errors.length > 0) {
  console.error(
    [
      'Please update the version number and CHANGELOG for every package that is being',
      'changed in this branch. The following problems were found:',
    ]
      .join('\n')
      .concat('\n'),
  );
  console.error(chalk.red(errors.join('\n').concat('\n')));

  process.exit(1);
} else {
  console.log(
    chalk.green('All packages have met minimum change requirements 🎉'),
  );
}
/* eslint-enable no-console */
