const { exec } = require('shelljs');

const getPackageLocation = ({ location }) => location;

module.exports = () => {
  let packages;
  const output = exec('yarn workspaces info --json', { silent: true });

  try {
    const { data } = JSON.parse(output);

    packages = JSON.parse(data);
  } catch (error) {
    // handles CI shelljs output
    packages = JSON.parse(output);
  }

  return Object.values(packages).map(getPackageLocation).filter(Boolean);
};
