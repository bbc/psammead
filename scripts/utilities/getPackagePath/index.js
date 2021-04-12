const getPackages = require('../getPackages');

module.exports = packageName => {
  const matchingPackage = getPackages().find(
    ({ name }) => packageName === name,
  );

  return matchingPackage && matchingPackage.location;
};
