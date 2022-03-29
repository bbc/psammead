const getPackages = require('../getPackages');

module.exports = packageName => {
  const matchingPackage = getPackages().find(({ name }) =>
    name.includes(packageName),
  );

  return matchingPackage && matchingPackage.location;
};
