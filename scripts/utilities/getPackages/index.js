const { exec } = require('shelljs');

module.exports = () => {
  const output = exec('yarn workspaces list --json', { silent: true });
  console.log(output);

  try {
    return output.stdout.split('\n').map(JSON.parse);
  } catch (error) {
    // handles CI shelljs output
    return JSON.parse(output);
  }
};

module.exports();
