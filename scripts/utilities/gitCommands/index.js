const { execSync } = require('child_process');

exports.gitAdd = (filePath, options = '') =>
  execSync(`git add ${filePath} ${options}`);

exports.gitCommit = (commitMessage, options = '') =>
  execSync(`git commit -m '${commitMessage}' ${options}`);

exports.deleteBranch = (branchName, options = '') => {
  try {
    execSync(`git branch -D '${branchName}' ${options}`);
  } catch (err) {
    console.log(`Hopefully it's just because the branch exists, error: ${err}`);
  }
};

exports.createBranch = (branchName, options = '') =>
  execSync(`git checkout -b '${branchName}' ${options}`);

exports.checkoutBranch = (branchName, options = '') =>
  execSync(`git checkout '${branchName}' ${options}`);

exports.gitPull = (head, options = '') =>
  execSync(`git pull origin '${head}' ${options}`);

exports.gitPush = (head, options = '') =>
  execSync(`git push origin '${head}' ${options}`);
