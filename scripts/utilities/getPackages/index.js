const { exec } = require('shelljs');

module.exports = () => {
  let packages;
  const output = exec('yarn workspaces list --json', { silent: true });

  try {
    const { data } = JSON.parse(output);

    packages = JSON.parse(data);
  } catch (error) {
    // handles CI shelljs output
    packages = JSON.parse(output);
  }

  return Object.entries(packages).map(([name, { location }]) => ({
    name,
    location,
  }));
};
