const { execSync } = require('child_process');
const path = require('path');

module.exports = filePath =>
  execSync(`git add ${filePath}`, {
    cwd: path.resolve(__dirname, '../../../'),
  });
