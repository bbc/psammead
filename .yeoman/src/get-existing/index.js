const fs = require('fs');
const getPackageTypes = require('../get-package-types');

const getPackagesFromFolder = folder => {
  const path = `./packages/${folder}`;
  return fs
    .readdirSync(path)
    .filter(file => fs.statSync(`${path}/${file}`).isDirectory());
}

const getExistingPackages = () => {
  return getPackageTypes()
          .map(getPackagesFromFolder)
          .reduce((arr, item) => arr.concat(item))
};

module.exports  = getExistingPackages;
