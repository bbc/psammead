const fs = require('fs');

module.exports = (filePath, canFail) => {
  try {
    if (fs.existsSync(filePath))
      return fs.readFileSync(filePath, 'utf8').toString();
  } catch (err) {
    if (canFail) {
      // eslint-disable-next-line no-console
      console.error(err);
    } else throw err;
  }

  return '';
};
