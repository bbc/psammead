const { exec } = require('child_process');
const path = require('path');

module.exports = packageDir =>
  new Promise((resolve, reject) => {
    exec(
      'npm install',
      {
        cwd: path.resolve(__dirname, '../../', packageDir),
      },
      error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      },
    );
  });
