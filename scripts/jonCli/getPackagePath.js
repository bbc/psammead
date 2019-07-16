const getPackages = require('../utilities/getPackages');

module.exports = packageName => {
  const matchesPath = packagePath =>
    new RegExp(`/${packageName}$`).test(packagePath);

  return getPackages().find(matchesPath);
};
