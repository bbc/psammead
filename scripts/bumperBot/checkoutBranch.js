const runExec = require('../utilities/runExec');

const checkoutBranch = branchName =>
  runExec({ command: `git checkout -b ${branchName}` });

module.exports = checkoutBranch;
