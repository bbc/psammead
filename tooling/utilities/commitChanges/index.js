const path = require('path');
const { execSync } = require('child_process');

module.exports = commitMessage =>
  execSync(`git commit -m '${commitMessage}'`, {
    cwd: path.resolve(__dirname, '../../../'),
  });
