const { exec } = require('shelljs');

module.exports = name => {
  const npmVersion = exec(`npm show ${name} version`, { silent: true }).stdout;
  return npmVersion ? npmVersion.split('\n')[0] : '0.0.0';
};
