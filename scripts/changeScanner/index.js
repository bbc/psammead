const chalk = require('chalk');
const getChanges = require('./getChanges');

const errors = [];

// Files required to have been changed with every psammead package change.
const requiredChanges = ['CHANGELOG.md', 'package-lock.json', 'package.json'];

const changes = getChanges();

Object.keys(changes).forEach(packageName => {
  requiredChanges.forEach(requiredFile => {
    if (!changes[packageName].includes(requiredFile)) {
      errors.push(`Branch must update ${requiredFile} in ${packageName}`);
    }
  });
});

/* eslint-disable no-console */
if (errors.length > 0) {
  errors.forEach(error => console.error(chalk.red(error)));
  console.log(''); // empty line for spacing
  process.exit(1);
} else {
  console.log(
    chalk.green('All packages have met minimum change requirements 🎉'),
  );
}
/* eslint-enable no-console */
