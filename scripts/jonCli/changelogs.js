const { prompt } = require('enquirer');
const initialPrompt = require('./initialPrompt');
const stageFile = require('./stageFile');
const commitChanges = require('./commitChanges');
const getChangelogCommitMessage = require('./getChangelogCommitMessage');
const updateChangelogs = require('./updateChangelogs');
const promptStageAndCommit = require('./promptStageAndCommit');

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

initialPrompt(
  "How would you like to enter which package's changelogs to update?",
)
  .then(promptChanges)
  .then(updateChangelogs)
  .then(promptStageAndCommit)
  .then(({ packageNames, paths, shouldCommitChanges }) => {
    if (shouldCommitChanges) {
      paths.forEach(stageFile);
      commitChanges(getChangelogCommitMessage(packageNames));
    }
  })
  // eslint-disable-next-line no-console
  .catch(console.error);
