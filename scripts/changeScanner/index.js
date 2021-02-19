/* eslint-disable no-console */
const chalk = require('chalk');
const { exec } = require('shelljs');
const { readFileSync } = require('fs');
const getChanges = require('./getChanges');

const errors = [];
const packageFileName = 'package.json';
const lockFileName = 'yarn.lock';

// Files required to have been changed with every psammead package change.
const requiredChanges = ['CHANGELOG.md', packageFileName];

const changes = getChanges();

Object.keys(changes).forEach(packageName => {
  requiredChanges.forEach(requiredFile => {
    const isPackageFile = requiredFile === packageFileName;

    if (isPackageFile) {
      const packageFilePath = changes[packageName].find(changedFile =>
        changedFile.includes(packageFileName),
      );
      if (packageFilePath) {
        const localPackageFile = readFileSync(packageFilePath, 'utf8');
        const remotePackageFile = exec(
          `git show origin/latest:${packageFilePath}`,
          {
            silent: true,
          },
        ).stdout;

        const localDeps = JSON.parse(localPackageFile).dependencies;
        const localDevDeps = JSON.parse(localPackageFile).devDependencies;
        const remoteDeps = JSON.parse(remotePackageFile).dependencies;
        const remoteDevDeps = JSON.parse(remotePackageFile).devDependencies;
        const remotePeerDeps = JSON.parse(remotePackageFile).peerDependencies;
        const remotePeerDevDeps = JSON.parse(remotePackageFile)
          .peerDependencies;
        const depsHasChanged =
          JSON.stringify(localDeps) !== JSON.stringify(remoteDeps);
        const devDepsHasChanged =
          JSON.stringify(localDevDeps) !== JSON.stringify(remoteDevDeps);
        const peerDepsHasChanged =
          JSON.stringify(remotePeerDeps) !== JSON.stringify(remotePeerDevDeps);

        if (depsHasChanged || devDepsHasChanged || peerDepsHasChanged) {
          errors.push(`Branch must update ${lockFileName} in ${packageName}`);
        }
      }
    }
    if (
      !changes[packageName].some(changedFile =>
        changedFile.includes(requiredFile),
      )
    ) {
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
