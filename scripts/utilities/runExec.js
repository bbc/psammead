const { exec } = require('child_process');

const runExec = ({ command, dir }) =>
  new Promise((resolve, reject) => {
    exec(
      command,
      dir
        ? {
            cwd: dir,
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

module.exports = runExec;
