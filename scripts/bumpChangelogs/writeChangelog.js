const fs = require('fs');

module.exports = file => content =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, content, error => {
      if (error) {
        reject(error);
      } else {
        resolve(`Successfully updated the ${file} changelog`);
      }
    });
  });
