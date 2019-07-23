const fs = require('fs');

const filePath = 'published.txt';

const getChangedPackages = () => {
  try {
    if (fs.existsSync(filePath)) {
      const published = fs
        .readFileSync(filePath)
        .toString()
        .split(',')
        .filter(Boolean);

      return published;
    }

    // eslint-disable-next-line no-console
    console.log(`No packages were published!`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return [];
};

module.exports = getChangedPackages;
