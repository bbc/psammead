const shell = require('shelljs');

exports.install = () =>
  new Promise((resolve, reject) => {
    const response = shell.exec('yarn install');
    if (response.code === 0) {
      resolve(response.output);
    } else {
      reject(response.output);
    }
  });
