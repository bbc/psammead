const { exec } = require('shelljs');

const ROOT_PACKAGE = 'psammead';

module.exports = () => {
  const output = exec('yarn workspaces info --json', { silent: true });

  const packages = JSON.parse(output);

  return [ROOT_PACKAGE].concat(
    Object.values(packages).map(({ location }) => location),
  );
};
