const { prompt } = require('enquirer');

module.exports = choices =>
  prompt({
    choices,
    type: 'multiselect',
    name: 'packageNames',
    message: 'Which package(s) changelog would you like to bump?',
  });
