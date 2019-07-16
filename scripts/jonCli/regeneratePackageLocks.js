const { exec } = require('child_process');
const path = require('path');
const getPackages = require('../utilities/getPackages');

const packageDirs = getPackages();

const removeExistingPackageLocks = packageDir =>
  new Promise((resolve, reject) => {
    exec(
      'rm -rf package-lock.json',
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

const runNpmInstall = packageDir =>
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

Promise.all(packageDirs.map(removeExistingPackageLocks)).then(() =>
  Promise.all(packageDirs.map(runNpmInstall)),
);
