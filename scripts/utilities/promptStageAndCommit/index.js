const { prompt } = require('enquirer');

module.exports = async ([packageNames, paths]) => {
  try {
    const { shouldCommitChanges } = await prompt({
      type: 'toggle',
      name: 'shouldCommitChanges',
      message: 'Do you want to commit the changes?',
      enabled: 'Yes',
      disabled: 'No',
    });
    return { packageNames, paths, shouldCommitChanges };
  } catch (error) {
    return Promise.reject(error);
  }
};
