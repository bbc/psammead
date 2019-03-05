const fs = require('fs');

module.exports = function getExistingPackages() {
  const path = './packages/components/';
  return fs
    .readdirSync(path)
    .filter(file => fs.statSync(`${path}/${file}`).isDirectory());
};
