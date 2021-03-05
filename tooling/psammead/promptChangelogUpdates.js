const { prompt } = require('enquirer');

module.exports = async packages => {
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
  return { packages, prLink, changesDescription };
};
