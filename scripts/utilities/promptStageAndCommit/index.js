const { prompt } = require('enquirer');

module.exports = async args => {
  try {
    const { shouldCommitChanges } = await prompt({
      type: 'toggle',
      name: 'shouldCommitChanges',
      message: 'Do you want to commit the changes?',
      enabled: 'Yes',
      disabled: 'No',
    });
    return { ...args, shouldCommitChanges };
  } catch (error) {
    return Promise.reject(error);
  }
};
