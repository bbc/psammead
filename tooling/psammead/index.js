/* eslint-disable no-console */
const { prompt } = require('enquirer');
const promptStageAndCommit = require('./promptStageAndCommit');
const promptTask = require('./promptTask');
const versionPackages = require('./versionPackages');
const promptChangelogUpdates = require('./promptChangelogUpdates');
const updateChangelogs = require('./updateChangelogs');
const commitChanges = require('./commitChanges');
const promptSemanticVersion = require('./promptSemanticVersion');
const checkPackages = require('./checkPackages');
const fixPackages = require('./fixPackages');
const fetchRandomWisdom = require('./fetchRandomWisdom');

prompt({
  message:
    "Hi there. I'm Psammead - I'm a mythical sand goblin thing and I'm here to guide you through managing this monorepo. What would you like to do?",
  type: 'select',
  name: 'task',
  choices: ['I want to version package(s)', 'I want to update changelog(s)'],
})
  .then(promptTask)
  .then(({ task, packages }) => {
    const isVersioning = task === 'versioning';

    return isVersioning
      ? promptSemanticVersion(packages).then(versionPackages)
      : promptChangelogUpdates(packages).then(updateChangelogs);
  })
  .then(async () => {
    try {
      await checkPackages();
    } catch (error) {
      await fixPackages();
    }
  })
  .then(promptStageAndCommit)
  .then(async ({ shouldCommitChanges }) => {
    if (shouldCommitChanges) {
      return commitChanges('TODO - GENERATE THIS MESSAGE');
    }
    return Promise.resolve();
  })
  .then(() => {
    console.log(
      "We are all finished here. Good job. It's been a pleasure serving you! I'll leave you with these words of wisdom:\n",
    );

    const wisdom = fetchRandomWisdom();

    console.log(wisdom.concat('\n'));
  })
  // eslint-disable-next-line no-console
  .catch(console.error);
