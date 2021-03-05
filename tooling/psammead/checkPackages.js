/* eslint-disable no-console */
const chalk = require('chalk');
const runExec = require('./runExec');

module.exports = () => {
  console.log(
    chalk.bold.cyan('I am checking internal dependencies are all good...'),
  );

  return runExec({ command: 'yarn check:pkgs' });
};
