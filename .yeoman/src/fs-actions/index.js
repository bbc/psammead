const shell = require('shelljs');

exports.install = () =>
  new Promise((resolve, reject) => {
    const response = shell.exec('npm install --quiet');
    if (response.code === 0) {
      resolve(response.output);
    } else {
      reject(response.output);
    }
  });
