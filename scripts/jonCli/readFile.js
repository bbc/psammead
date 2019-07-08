const fs = require('fs');
const path = require('path');

module.exports = filePath =>
  new Promise((resolve, reject) => {
    fs.readFile(
      path.resolve(__dirname, '../../', filePath),
      'utf8',
      (error, content) => {
        if (error) {
          reject(error);
        } else {
          resolve(content);
        }
      },
    );
  });
