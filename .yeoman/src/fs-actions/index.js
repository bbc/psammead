const shell = require('shelljs');

exports.mkDir = dirName => {
  shell.mkdir(dirName);
};

exports.install = () =>
  new Promise((resolve, reject) => {
    const response = shell.exec('npm install --quiet');

    if (response.code === 0) {
      resolve();
    } else {
      reject(response.output);
    }
  });

exports.installPackage = npmPackage =>
  new Promise((resolve, reject) => {
    const response = shell.exec(`npm install ${npmPackage} --quiet`);

    if (response.code === 0) {
      resolve();
    } else {
      reject(response.output);
    }
  });
