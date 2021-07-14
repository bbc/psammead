const { exec } = require('shelljs');

module.exports = () => {
  const output = exec('yarn workspaces list --json', { silent: true });
  const outputStringArray = output.stdout.split('\n');

  // Filter used to remove empty strings
  return outputStringArray.filter(item => item).map(JSON.parse);
};
