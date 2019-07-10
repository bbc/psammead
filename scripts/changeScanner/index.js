const chalk = require('chalk');
const getChanges = require('./getChanges');

const errors = [];

// Files required to have been changed with every psammead package change.
const requiredChanges = ['CHANGELOG.md', 'package-lock.json', 'package.json'];

const changes = getChanges();

Object.keys(changes).forEach(packageName => {
  requiredChanges.forEach(requiredFile => {
    if (!changes[packageName].includes(requiredFile)) {
      errors.push(`Must change ${requiredFile} in ${packageName}`);
    }
  });
});

if (errors.length > 0) {
  // eslint-disable-next-line no-console
  errors.forEach(error => console.log(chalk.red(error)));
  process.exit(1);
} else {
  // eslint-disable-next-line no-console
  console.log(
    chalk.green('All packages have met minmum change requirements 🎉'),
  );
}
