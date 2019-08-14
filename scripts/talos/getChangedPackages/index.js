const fs = require('fs');

const filePath = 'published.txt';

const getFileContents = () => {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath).toString();
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return '';
};

const getChangedPackages = () => {
  const packagesString =
    process.argv[2] && process.argv[2].length > 0
      ? process.argv[2]
      : getFileContents();

  return [...new Set(packagesString.split(',').filter(Boolean))];
};

module.exports = getChangedPackages;
