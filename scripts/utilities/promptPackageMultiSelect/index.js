const { prompt } = require('enquirer');

module.exports = choices =>
  prompt({
    choices,
    type: 'multiselect',
    name: 'packageNames',
    message: 'Select package(s) with space bar then hit enter',
  });
