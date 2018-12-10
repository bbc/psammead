const { exec } = require('shelljs');

module.exports = () =>
  exec('npx lerna ls --parseable', { silent: true })
    .stdout.split('\n')
    .filter(p => p);
