const { prompt } = require('enquirer');
const bumpPackages = require('.');
const initialPrompt = require('../utilities/initialPrompt');

const promptVersion = async ({ packageNames }) => {
  if (!packageNames.length) throw new Error('No packages selected');

  const { strategy } = await prompt({
    type: 'select',
    name: 'strategy',
    choices: ['major', 'minor', 'patch'],
    message: 'Select the versioning strategy',
  });
  return { packageNames, strategy };
};

initialPrompt('Please choose which packages to version:')
  .then(promptVersion)
  .then(bumpPackages)
  // eslint-disable-next-line no-console
  .catch(console.error);
