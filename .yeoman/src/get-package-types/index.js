const fs = require('fs');
const path = require('path');

const packagesDirectory = path.join(__dirname, '../../../packages');
const getPackageTypes = () => fs
  .readdirSync(packagesDirectory)
  .filter(item => fs.statSync(path.join(packagesDirectory, item)).isDirectory());

module.exports = getPackageTypes;