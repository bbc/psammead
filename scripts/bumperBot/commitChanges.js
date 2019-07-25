const { execSync } = require('child_process');

const commitChanges = message => {
  execSync(`git add packages`, { stdio: 'inherit' });
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
  execSync(`git push origin HEAD`, { stdio: 'inherit' });
};

module.exports = commitChanges;
