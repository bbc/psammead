const { exec } = require('shelljs');

module.exports = () => {
  const paths = exec('npx lerna ls', { silent: true })
    .stdout.split('\n')
    .filter(Boolean);

  const removePackageScope = packageName => {
    const [packageNameWithoutScope] = packageName.split('/').splice(-1);
    return packageNameWithoutScope;
  };
  return paths.map(removePackageScope);
};
