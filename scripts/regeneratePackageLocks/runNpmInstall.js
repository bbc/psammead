const { exec } = require('child_process');
const path = require('path');

module.exports = packageDir => {

  console.log('packageDir', packageDir, path.resolve(__dirname, '../../', packageDir));

  return new Promise((resolve, reject) => {
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
};
