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

      return [...new Set(published)];
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return [];
};

module.exports = getChangedPackages;
