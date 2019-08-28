const getPackages = require('../getPackages');

module.exports = packageName => {
  const matchesPath = packagePath =>
    new RegExp(`/${packageName}$`).test(packagePath);

  const match = getPackages().find(matchesPath);

  // covers case in jenkins where the base level `psammead` folder isnt
  // simply called `psammead` but instead has a hash on the end
  if (!match && packageName === 'psammead') {
    return getPackages().find(
      packagePath => !packagePath.includes('/packages/'),
    );
  }

  return match;
};
