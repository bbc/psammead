const fs = require('fs');

module.exports = (filePath, canFail) => {
  try {
    if (fs.existsSync(filePath)) {
      const contents = fs.readFileSync(filePath);
      return contents ? contents.toString() : '';
    }
  } catch (err) {
    if (canFail) {
      // eslint-disable-next-line no-console
      console.error(err);
    } else throw err;
  }

  return '';
};
