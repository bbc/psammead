/* eslint-disable no-console */
const chalk = require('chalk');
const { exec } = require('shelljs');
const { readFileSync } = require('fs');
const getChanges = require('./getChanges');

const errors = [];
const packageFileName = 'package.json';
const packageLockFileName = 'yarn.lock';

// Files required to have been changed with every psammead package change.
const requiredChanges = ['CHANGELOG.md', packageLockFileName, packageFileName];

const changes = getChanges();

Object.keys(changes).forEach(packageName => {
  requiredChanges.forEach(requiredFile => {
    try {
      if (requiredFile === packageLockFileName) {
        const packageFilePath = requiredFile.replace(
          packageLockFileName,
          packageFileName,
        );
        const localPackageFile = readFileSync(packageFilePath);
        const remotePackageFile = exec(`git show latest:${packageFilePath}`, {
          silent: true,
        }).stdout;

        console.log('packageFilePath', packageFilePath);
        console.log('localPackageFile', localPackageFile);
        console.log('remotePackageFile', remotePackageFile);

        const localDeps = JSON.parse(localPackageFile).dependencies;
        const localDevDeps = JSON.parse(localPackageFile).devDependencies;
        const remoteDeps = JSON.parse(remotePackageFile).dependencies;
        const remoteDevDeps = JSON.parse(remotePackageFile).devDependencies;
        const depsHasChanged =
          JSON.stringify(localDeps) !== JSON.stringify(remoteDeps);
        const devDepsHasChanged =
          JSON.stringify(localDevDeps) !== JSON.stringify(remoteDevDeps);

        if (depsHasChanged || devDepsHasChanged) {
          throw new Error();
        }
      } else if (
        !changes[packageName].some(changedFile =>
          changedFile.includes(requiredFile),
        )
      ) {
        throw new Error();
      }
    } catch (error) {
      console.log('error', error);
      errors.push(`Branch must update ${requiredFile} in ${packageName}`);
    }
  });
});

/* eslint-disable no-console */
if (errors.length > 0) {
  console.error(`Please update the version number and CHANGELOG for every package that is being
changed in this branch. The following problems were found:
`);
  errors.forEach(error => console.error(chalk.red(error)));
  console.error(''); // empty line for spacing
  process.exit(1);
} else {
  console.log(
    chalk.green('All packages have met minimum change requirements 🎉'),
  );
}
/* eslint-enable no-console */
