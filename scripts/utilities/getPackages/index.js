const { exec } = require('shelljs');

const isNotRootPackage = ({ name }) => name !== '@bbc/psammead';

module.exports = () => {
  const output = exec('yarn workspaces list --json', { silent: true });
  const outputStringArray = output.stdout.split('\n');

  return outputStringArray
    .filter(Boolean)
    .map(JSON.parse)
    .filter(isNotRootPackage);
};
