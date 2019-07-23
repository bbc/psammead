const getChangedPackages = require('./getChangedPackages');
const upgradeDependencies = require('../upgradeDependencies');

const packages = getChangedPackages();
const stuff = upgradeDependencies(packages);

stuff.then(bumpedPackages => {
  console.log(bumpedPackages);


});
