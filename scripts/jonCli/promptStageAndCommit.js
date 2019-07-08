const { prompt } = require('enquirer');

module.exports = async ([packageNames, paths]) => {
  const { shouldCommitChanges } = await prompt({
    type: 'toggle',
    name: 'shouldCommitChanges',
    message: 'Do you want to commit the changes?',
    enabled: 'Yes',
    disabled: 'No',
  });
  return { packageNames, paths, shouldCommitChanges };
};
