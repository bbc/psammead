const { prompt } = require('enquirer');
const getPackages = require('../getPackages');
const promptPackageMultiselect = require('../promptPackageMultiSelect');
const promptPackageInput = require('../promptPackageInput');

module.exports = message =>
  prompt({
    message,
    type: 'select',
    name: 'method',
    choices: [
      'Choose from a list of all packages',
      'Enter a comma separated list of package names',
    ],
  }).then(({ method }) => {
    const packageNames = getPackages().map(({ name }) => name);

    return method === 'Choose from a list of all packages'
      ? promptPackageMultiselect(packageNames)
      : promptPackageInput();
  });
