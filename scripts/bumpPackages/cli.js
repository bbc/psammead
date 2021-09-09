const { prompt } = require('enquirer');
const bumpPackages = require('.');
const initialPrompt = require('../utilities/initialPrompt');

const promptVersion = async ({ packageNames }) => {
  if (!packageNames.length) throw new Error('No packages selected');

  const { version } = await prompt({
    type: 'select',
    name: 'version',
    choices: ['major', 'minor', 'patch'],
    message: 'Select the version',
  });
  return { packageNames, version };
};

initialPrompt('Please choose which packages to version:')
  .then(promptVersion)
  .then(bumpPackages)
  // eslint-disable-next-line no-console
  .catch(console.error);
