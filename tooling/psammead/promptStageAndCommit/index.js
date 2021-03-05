const { prompt } = require('enquirer');

module.exports = () =>
  prompt({
    type: 'toggle',
    name: 'shouldCommitChanges',
    message:
      'Alright, packages are versioned!\n\nDo you want me to commit the changes?',
    enabled: 'Yes',
    disabled: 'No',
  });
