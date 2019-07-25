const runExec = require('../utilities/runExec');

const checkoutBranch = branchName => runExec(`git checkout -b ${branchName}`);

module.exports = checkoutBranch;
