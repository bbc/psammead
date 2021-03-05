const runExec = require('../runExec');

const commitChanges = message =>
  runExec({
    command: [
      'git add',
      'package.json',
      'yarn.lock',
      'CHANGELOG.md',
      'packages/**/package.json',
      'packages/**/CHANGELOG.md',
    ].join(' '),
  }).then(() => runExec({ command: `git commit -m "${message}"` }));

module.exports = commitChanges;
