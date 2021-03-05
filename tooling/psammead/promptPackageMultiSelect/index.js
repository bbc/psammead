const { prompt } = require('enquirer');

module.exports = ({ choices, message }) =>
  prompt({
    choices,
    type: 'multiselect',
    name: 'packages',
    message,
  }).then(({ packages }) => packages);
