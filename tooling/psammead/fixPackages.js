/* eslint-disable no-console */
const chalk = require('chalk');

const runExec = require('./runExec');

module.exports = () => {
  console.log(
    chalk.bold.cyan(
      [
        'Oh no! Internal dependencies are not up to date!',
        'I am attempting to fix internal dependencies. This may take a minute...',
      ].join('\n'),
    ),
  );

  return runExec({ command: 'yarn fix:pkgs' });
};
