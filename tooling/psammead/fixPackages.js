/* eslint-disable no-console */
const runExec = require('./runExec');

module.exports = () => {
  console.error('* Oh no! Internal dependencies error!');
  console.log(
    '* I am attempting to fix internal dependencies. This may take a minute...',
  );

  return runExec({ command: 'yarn fix:pkgs' });
};
