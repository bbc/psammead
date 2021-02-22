const removeExistingPackageLock = require('./removeExistingPackageLock');
const runPackagesInstall = require('./runPackagesInstall');
const getPackages = require('../utilities/getPackages');

const packageDirs = getPackages();

Promise.all(packageDirs.map(removeExistingPackageLock)).then(() =>
  Promise.all(packageDirs.map(runPackagesInstall)),
);
