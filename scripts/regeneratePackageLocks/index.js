const removeExistingPackageLock = require('./removeExistingPackageLock');
const runNpmInstall = require('./runNpmInstall');
const getPackages = require('../utilities/getPackages');

const packageDirs = getPackages();

Promise.all(packageDirs.map(removeExistingPackageLock)).then(() =>
  Promise.all(packageDirs.map(runNpmInstall)),
);
