const { exec } = require('child_process');

const runExec = ({ command, dir }) => {
  // eslint-disable-next-line no-console
  console.log(`* Running "${command}"${dir ? ` in dir "${dir}"` : ''}`);
  return new Promise((resolve, reject) => {
    exec(
      command,
      dir
        ? {
            cwd: dir,
          }
        : {},
      (error, stdout, stderr) => {
        if (error) {
          /* eslint-disable no-console */
          console.error(stdout);
          console.error(stderr);
          /* eslint-enable no-console */
          reject(error);
        } else {
          resolve();
        }
      },
    );
  });
};

module.exports = runExec;
