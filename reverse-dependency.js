const fs = require('fs');
const util = require('util');

const pathPrefixComponents = __dirname + '/packages/components';
const pathPrefixUtils = __dirname + '/packages/utilities';
const files = fs
  .readdirSync(pathPrefixComponents)
  .concat(fs.readdirSync(pathPrefixUtils));
const allowedBBCDeps = ['psammead-styles', 'gel-foundations'];

const buildTreeNode = dep => {
  const references = files.filter(file => {
    const dependencies = loadDependencies(file);
    return dependencies ? dependencies.includes('@bbc/' + dep) : null;
  });
  return { [dep]: references.map(buildTreeNode) };
};

const loadPackageJsonFile = path => {
  try {
    return fs.readFileSync(path);
  } catch {
    return null;
  }
};

const loadDependencies = packageName => {
  const possiblePackageLocations = [
    pathPrefixComponents + '/' + packageName + '/package.json',
    pathPrefixUtils + '/' + packageName + '/package.json',
  ];

  const packageJsonFile = possiblePackageLocations.reduce((acc, path) => {
    if (acc) {
      return acc;
    }

    return loadPackageJsonFile(path);
  }, null);

  if (!packageJsonFile) {
    return null;
  }

  const { dependencies } = JSON.parse(packageJsonFile);

  return dependencies ? Object.keys(dependencies) : null;
};

(() => {
  const rootDependencies = files.filter(file => {
    if (allowedBBCDeps.some(allowedDep => file.includes(allowedDep))) {
      return false;
    }

    const dependencies = loadDependencies(file);
    if (dependencies) {
      // console.log(Object.keys(dependencies));
      return !Object.keys(dependencies).some(dependency => {
        if (allowedBBCDeps.includes('@bbc/' + dependency)) {
          return false;
        }
        return dependency.startsWith('@bbc');
      });
    }
    return true;
  });

  const usages = rootDependencies.map(buildTreeNode);

  usages.forEach(file =>
    console.log(
      util.inspect(file, { showHidden: false, depth: null, colors: true }),
    ),
  );
})();
