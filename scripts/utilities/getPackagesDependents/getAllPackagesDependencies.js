const { exec } = require('shelljs');

module.exports = () =>
  new Promise((resolve, reject) => {
    const callback = (code, output) => {
      const getPackageDependencies = ({ name, dependencies }) => ({
        name,
        dependencies: Object.keys(dependencies),
      });
      resolve(
        output
          .split(/(?<=^}$)(?=\n^{$)/gm)
          .map(JSON.parse)
          .map(getPackageDependencies),
      );
    };
    try {
      exec(
        `npx lerna exec --no-bail --parallel --no-prefix -- npm ls --json --depth=0`,
        { silent: true },
        callback,
      );
    } catch (error) {
      reject(error);
    }
  });
