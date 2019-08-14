const { exec } = require('shelljs');
const parseUpgradedPackages = require('./parseUpgradedPackages');

module.exports = packages => {
  const packageList = packages.join(', ');
  const command = `npx lerna exec --parallel --no-bail -- npx npm-check-updates ${packageList} -u -a --jsonUpgraded`;

  // eslint-disable-next-line no-console
  console.log(`* Running "${command}"`);

  return new Promise((resolve, reject) => {
    exec(command, { silent: true }, (code, output) => {
      if (code !== 0) {
        reject(output);
      } else {
        resolve(parseUpgradedPackages(output));
      }
    });
  });
};
