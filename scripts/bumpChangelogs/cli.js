const { prompt } = require('enquirer');
const initialPrompt = require('../utilities/initialPrompt');
const bumpChangelogs = require('.');

const promptChanges = async ({ packageNames }) => {
  if (!packageNames.length) throw new Error('No packages selected');
  const { prLink, changesDescription } = await prompt([
    {
      type: 'input',
      name: 'prLink',
      message: 'Enter the link to the pull request',
    },
    {
      type: 'input',
      name: 'changesDescription',
      message: 'Enter a description of the changes made',
    },
  ]);
  return { packageNames, prLink, changesDescription };
};

initialPrompt('Please choose which packages to version:')
  .then(promptChanges)
  .then(bumpChangelogs)
  // eslint-disable-next-line no-console
  .catch(console.error);
