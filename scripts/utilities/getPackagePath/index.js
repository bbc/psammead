const getPackages = require('../getPackages');

module.exports = packageName => {
  const matchesPath = packagePath =>
    new RegExp(`/${packageName}$`).test(packagePath);

  const match = getPackages().find(matchesPath);

  if(!match && packageName == 'psammead') {
    return getPackages().find(packagePath => !packagePath.includes('/packages/'));
  }

  return match;
};