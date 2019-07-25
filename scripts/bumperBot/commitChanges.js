const runExec = require('../utilities/runExec');

const commitChanges = message => {
  return runExec({ command: `git add packages` })
    .then(() => runExec({ command: `git commit -m "${message}` }))
    .then(() => runExec({ command: `git push origin HEAD` }));
};

module.exports = commitChanges;
