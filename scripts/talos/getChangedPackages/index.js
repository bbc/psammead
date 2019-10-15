const readFileSync = require('../../utilities/readFileSync');
const getPackageVersion = require('../../utilities/getPackageVersion');

const filePath = 'published.txt';

const changedPackagesReducer = (accumulator, currentValue) => {
  return {
    ...accumulator,
    [currentValue]: `^${getPackageVersion(currentValue)}`,
  };
};

const getChangedPackages = () => {
  const packagesString =
    process.argv[2] && process.argv[2].length > 0
      ? process.argv[2]
      : readFileSync(filePath, true);

  return [...new Set(packagesString.split(',').filter(Boolean))].reduce(
    changedPackagesReducer,
    {},
  );
};

module.exports = getChangedPackages;
