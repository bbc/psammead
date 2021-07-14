const { exec } = require('shelljs');

module.exports = () => {
  const output = exec('yarn workspaces list --json', { silent: true });

  return output.stdout.split('\n').map(JSON.parse);
};
