const { exec } = require('shelljs');

module.exports = () => {
  const output = exec('yarn workspaces info --json', { silent: true });

  const { data } = JSON.parse(output);
  const packages = JSON.parse(data);

  return packages;
};
