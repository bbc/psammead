const chalk = require('chalk');
const getChanges = require('./getChanges');

const errors = [];

// Files required to have been changed with every psammead package change.
const requiredChanges = ['CHANGELOG.md', 'package.json'];

const changes = getChanges();

Object.keys(changes).forEach(packageName => {
  const packageChanges = changes[packageName];

  requiredChanges.forEach(requiredFile => {
    if (!packageChanges.includes(requiredFile)) {
      errors.push(`Branch must update ${requiredFile} in ${packageName}`);
    }
  });

  // const packageLock = 'package-lock.json';
  // if (packageChanges.includes(packageLock)) {
  //   errors.push(
  //     `${packageLock} file found in ${packageName} - please delete as it not required for yarn projects`,
  //   );
  // }
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
