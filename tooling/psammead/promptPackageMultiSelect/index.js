const { prompt } = require('enquirer');

module.exports = choices =>
  prompt({
    choices,
    type: 'multiselect',
    name: 'packages',
    message: 'Select package(s) with space bar then hit enter',
  }).then(({ packages }) => packages);
