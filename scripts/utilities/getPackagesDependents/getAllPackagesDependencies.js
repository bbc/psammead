const { exec } = require('shelljs');
const parsePackageDependencies = require('./parsePackageDependencies');

module.exports = () =>
  new Promise((resolve, reject) => {
    try {
      exec(
        `npx lerna exec --no-bail --parallel --no-prefix -- npm ls --json --depth=0`,
        { silent: true },
        (code, output) => resolve(parsePackageDependencies(output)),
      );
    } catch (error) {
      reject(error);
    }
  });
