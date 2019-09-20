const readFileSync = require('../../utilities/readFileSync');

const filePath = 'published.txt';

const getChangedPackages = () => {
  const packagesString =
    process.argv[2] && process.argv[2].length > 0
      ? process.argv[2]
      : readFileSync(filePath, true);

  return [...new Set(packagesString.split(',').filter(Boolean))];
};

module.exports = getChangedPackages;
