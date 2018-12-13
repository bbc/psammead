const { exec } = require('shelljs');

// Get version of package in NPM regsitry. Returns 0.0.0 if doesn't exist.
module.exports = name => {
  const npmVersion = exec(`npm show ${name} version`, { silent: true }).stdout;
  return npmVersion ? npmVersion.split('\n')[0] : '0.0.0';
};
