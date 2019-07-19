const flatten = require('ramda/src/flatten');
const uniq = require('ramda/src/uniq');
const pipe = require('ramda/src/pipe');
const map = require('ramda/src/map');
const getAllPackagesDependencies = require('./getAllPackagesDependencies');

module.exports = async packages => {
  const allPackagesDependencies = await getAllPackagesDependencies();

  const getPackageDependents = packageName => {
    const packageIsADependent = ({ dependencies }) =>
      dependencies.includes(packageName);

    const getDependencyName = ({ name }) => name;

    return allPackagesDependencies
      .filter(packageIsADependent)
      .map(getDependencyName);
  };

  return new Promise((resolve, reject) => {
    try {
      pipe(
        map(getPackageDependents),
        flatten,
        uniq,
        resolve,
      )(packages);
    } catch (error) {
      reject(error);
    }
  });
};
