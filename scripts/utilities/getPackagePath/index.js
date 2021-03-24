const getPackages = require('../getPackages');

module.exports = packageName => {
  if (packageName === 'psammead') {
    return '.';
  }

  const matchesPath = packagePath =>
    new RegExp(`/${packageName}$`).test(packagePath);

  return getPackages().find(matchesPath);
};
