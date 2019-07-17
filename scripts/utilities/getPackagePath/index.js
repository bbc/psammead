const getPackages = require('../getPackages');

module.exports = packageName => {
  const matchesPath = packagePath =>
    new RegExp(`/${packageName}$`).test(packagePath);

  return getPackages().find(matchesPath);
};
