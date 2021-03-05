/* eslint-disable no-console */
const { prompt } = require('enquirer');
const chalk = require('chalk');
const wizardBanner = require('./wizardBanner');
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

console.log(
  chalk.bold.cyan(
    [
      wizardBanner,
      'Hi there!',
      "I'm Psammead... I'm a mythical sand fairy and I'm here to guide you through managing this monorepo.",
    ].join('\n\n'),
  ),
);

const psammeadWizard = () =>
  prompt({
    message: 'What would you like to do?',
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
    .then(({ shouldCommitChanges }) => {
      if (shouldCommitChanges) {
        return commitChanges('TODO - GENERATE THIS MESSAGE');
      }
      return Promise.resolve();
    })
    .then(async () => {
      const { backToMainMenu } = await prompt({
        type: 'toggle',
        name: 'backToMainMenu',
        message:
          'We are all finished here. What next? Do you want to go back to the beginning?',
        enabled: 'Yes',
        disabled: 'No',
      });

      if (backToMainMenu) {
        return psammeadWizard();
      }

      return Promise.resolve();
    })
    .then(() => {
      console.log(
        chalk.bold.cyan(
          "Good job. It's been a pleasure serving you! I'll leave you with these words of wisdom:\n",
        ),
      );

      const wisdom = fetchRandomWisdom();

      console.log(chalk.bold.greenBright(`“${wisdom}”`.concat('\n')));
    })
    // eslint-disable-next-line no-console
    .catch(console.error);

psammeadWizard();
