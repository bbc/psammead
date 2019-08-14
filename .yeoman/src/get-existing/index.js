const fs = require('fs');

const getExistingPackages = () => {
  const path = './packages/components/';
  return fs
    .readdirSync(path)
    .filter(file => fs.statSync(`${path}/${file}`).isDirectory());
};

module.exports = getExistingPackages;
