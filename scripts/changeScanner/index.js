/* eslint-disable no-console */
const chalk = require('chalk');

const getChanges = require('./getChanges');

const packageFileName = 'package.json';

// Files always required to have been changed with every psammead package change.
const requiredChanges = ['CHANGELOG.md', packageFileName];

const changedPackages = getChanges();

const isMissingRequiredChangedFile = ({ packageName, requiredFile }) =>
  !changedPackages[packageName].some(changedFile =>
    changedFile.includes(requiredFile),
  );

const getFileChangeError = packageName => requiredFile => {
  if (packageName === 'psammead') {
    return '';
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
