const { writeFileSync } = require('fs');
const getPackagePath = require('../../utilities/getPackagePath');
const getPackageNames = require('../../utilities/getPackageNames');
const readFileSync = require('../../utilities/readFileSync');
const updatePackageFile = require('../updatePackageFile');

const upgradeDependencies = changedPackages => {
  const upgradedPackages = [];

  getPackageNames().forEach(packageName => {
    const path = `${getPackagePath(packageName)}/package.json`;
    const packageJson = JSON.parse(readFileSync(path));
    const {
      packageJson: newPackageJson,
      upgradedPackages: packageUpgradedPackages,
    } = updatePackageFile(packageJson, changedPackages);

    if (Object.keys(packageUpgradedPackages)) {
      writeFileSync(path, JSON.stringify(newPackageJson, null, 2));
      upgradedPackages.push(packageUpgradedPackages);
    }
  });

  return Promise.resolve(upgradedPackages);
};

module.exports = upgradeDependencies;
