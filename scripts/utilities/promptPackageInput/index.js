const { prompt } = require('enquirer');

module.exports = () =>
  prompt({
    type: 'list',
    name: 'packageNames',
    message: 'Please enter a comma separated list of packages',
  });
