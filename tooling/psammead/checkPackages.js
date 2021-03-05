const runExec = require('./runExec');

module.exports = () => {
  // eslint-disable-next-line no-console
  console.log('* I am checking internal dependencies are all good...');

  return runExec({ command: 'yarn check:pkgs' });
};
