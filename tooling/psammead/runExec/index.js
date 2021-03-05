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
            silent: true,
          }
        : {},
      error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      },
    );
  });
};

module.exports = runExec;
