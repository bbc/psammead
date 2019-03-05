const shell = require('shelljs');

exports.mkDir = function(dirName) {
  shell.mkdir(dirName);
};

exports.install = function() {
  return new Promise((resolve, reject) => {
    const response = shell.exec('npm install --quiet');

    if (response.code === 0) {
      resolve();
    } else {
      reject(response.output);
    }
  });
};

exports.installPackage = function(package) {
  return new Promise((resolve, reject) => {
    const response = shell.exec(`npm install ${package} --quiet`);

    if (response.code === 0) {
      resolve();
    } else {
      reject(response.output);
    }
  });
};
