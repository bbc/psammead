const { exec } = require('child_process');
const path = require('path');

module.exports = packageDir => {

  console.log(---------);
  console.log('packageDir');
  console.log(packageDir);
  console.log(__dirname);
  console.log('../../');
  console.log(typeof packageDir);
  console.log(---------);

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
