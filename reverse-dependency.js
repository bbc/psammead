const fs = require('fs');

(() => {
  const pathPrefix = __dirname + '/packages/components';
  const files = fs.readdirSync(pathPrefix);

  const rootDependency = files.filter(file => {
    let packageJsonFile;
    const path = pathPrefix + '/' + file + '/package.json';

    try {
      packageJsonFile = fs.readFileSync(path);
    } catch {
      return false;
    }

    const { dependencies } = JSON.parse(packageJsonFile);
    if (dependencies) {
      // console.log(Object.keys(dependencies));
      return !Object.keys(dependencies).some(dependency => {
        const allowedBBCDeps = ['@bbc/psammead-styles', '@bbc/gel-foundations'];
        if (allowedBBCDeps.includes(dependency)) {
          return false;
        }
        return dependency.startsWith('@bbc');
      });
    }
    return false;
  });

  rootDependency.forEach(file => console.log(file));
})();
