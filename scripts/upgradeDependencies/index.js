const { exec } = require('shelljs');
const parseUpgradedPackages = require('./parseUpgradedPackages');

module.exports = packages => {
  const packageList = packages.join(', ');

  return new Promise((resolve, reject) => {
    exec(
      `npx lerna exec --parallel --no-bail -- npx npm-check-updates ${packageList} -u -a --jsonUpgraded`,
      null,
      (code, output) => {
        if (code !== 0) {
          reject(output);
        } else {
          resolve(parseUpgradedPackages(output));
        }
      },
    );
  });
};
