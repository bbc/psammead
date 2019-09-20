const getPackages = require('../getPackages');

module.exports = () => {
  return getPackages().map(packageName => packageName.split('/').splice(-1)[0]);
};
