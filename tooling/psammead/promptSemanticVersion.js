const { prompt } = require('enquirer');

module.exports = async packages => {
  const { version } = await prompt({
    type: 'select',
    name: 'version',
    choices: ['major', 'minor', 'patch'],
    message: 'Choose the version you wish to bump',
  });

  return { packages, version };
};
