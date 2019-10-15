const { writeFileSync } = require('fs');
const getPackagePath = require('../../utilities/getPackagePath');
const getPackageNames = require('../../utilities/getPackageNames');
const readFileSync = require('../../utilities/readFileSync');
const updatePackageFile = require('../updatePackageFile');

const upgradeDependencies = changedPackages => {
  const upgradedPackages = {};

  getPackageNames().forEach(packageName => {
    const path = `${getPackagePath(packageName)}/package.json`;
    const packageJson = JSON.parse(readFileSync(path));
    const {
      packageJson: newPackageJson,
      upgradedPackages: packageUpgradedPackages,
    } = updatePackageFile(packageJson, changedPackages);

    // eslint-disable-next-line no-console
    console.log(`* ${path} \n Upgraded packages ${packageUpgradedPackages}`);

    if (packageUpgradedPackages.length) {
      writeFileSync(path, `${JSON.stringify(newPackageJson, null, 2)}\n`);
      upgradedPackages[packageName] = packageUpgradedPackages;
    }
  });

  return Promise.resolve(upgradedPackages);
};

module.exports = upgradeDependencies;
