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

const changedPackages = getChanges();

const getChangedFilePath = ({ packageName, matchFile }) => {
  const packageChanges = changedPackages[packageName];

  return packageChanges
    ? packageChanges.find(changedFile => changedFile.includes(matchFile))
    : '';
};

const isMissingRequiredChangedFile = ({ packageName, requiredFile }) =>
  !changedPackages[packageName].some(changedFile =>
    changedFile.includes(requiredFile),
  );

const depsHaveChanged = ({ localPackageFile, remotePackageFile }) => {
  const { dependencies: localDeps } = JSON.parse(localPackageFile);
  const { dependencies: remoteDeps } = JSON.parse(remotePackageFile);

  return !equals(localDeps, remoteDeps);
};

const getRemotePackageFile = packageFilePath =>
  exec(`git show origin/latest:${packageFilePath}`, {
    silent: true,
  }).stdout;

const getFileChangeError = packageName => requiredFile => {
  const isPackageFile = requiredFile === packageFileName;

  if (isPackageFile) {
    const packageFilePath = getChangedFilePath({
      packageName,
      matchFile: packageFileName,
    });
    const lockFilePath = getChangedFilePath({
      packageName: 'psammead',
      matchFile: lockFileName,
    });
    const packageFileHasChanged = Boolean(packageFilePath);
    const lockFileHasChanged = Boolean(lockFilePath);

    if (packageFileHasChanged && !lockFileHasChanged) {
      const localPackageFile = readFileSync(packageFilePath, 'utf8');
      const remotePackageFile = getRemotePackageFile(packageFilePath);

      if (
        !remotePackageFile ||
        depsHaveChanged({ localPackageFile, remotePackageFile })
      ) {
        return `Dependencies in ${packageName} have changed. Branch must update ${lockFileName} in Psammead root`;
      }
    }
  }
  if (isMissingRequiredChangedFile({ packageName, requiredFile })) {
    return `Branch must update ${requiredFile} in ${packageName}`;
  }

  return '';
};

const changedPackageNames = Object.keys(changedPackages);
const errors = changedPackageNames
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
