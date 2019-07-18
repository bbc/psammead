const { exec } = require('shelljs');

// Get all packages in lerna scope.
module.exports = () =>
  exec('npx lerna ls --parseable', { silent: true })
    .stdout.split('\n')
    .filter(Boolean);
