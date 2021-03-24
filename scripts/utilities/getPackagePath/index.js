const getPackages = require('../getPackages');

module.exports = packageName => {
  const matchesPath = packagePath =>
    new RegExp(`/${packageName}$`).test(packagePath);

  const match = getPackages().find(matchesPath);

  if (packageName === 'psammead') {
    return '.';
  }

  return match;
};
