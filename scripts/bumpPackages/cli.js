const { prompt } = require('enquirer');
const bumpPackages = require('.');
const initialPrompt = require('../utilities/initialPrompt');
const stageFile = require('../utilities/stageFile');
const commitChanges = require('../utilities/commitChanges');
const getVersionBumpCommitMessage = require('./getVersionBumpCommitMessage');
const promptStageAndCommit = require('../utilities/promptStageAndCommit');

const promptVersion = async ({ packageNames }) => {
  if (!packageNames.length) throw new Error('No packages selected');

  const { version } = await prompt({
    type: 'select',
    name: 'version',
    choices: ['major', 'minor', 'patch'],
    message: 'Choose the version you wish to bump',
  });
  return { packageNames, version };
};

initialPrompt('How would you like to enter which packages to bump?')
  .then(promptVersion)
  .then(bumpPackages)
  .then(promptStageAndCommit)
  .then(({ packageNames, paths, shouldCommitChanges }) => {
    if (shouldCommitChanges) {
      const renamePackageJson = packagePath =>
        packagePath.replace('package.json', 'yarn.lock');

      const yarnLockPaths = paths.map(renamePackageJson);

      [...paths, ...yarnLockPaths].forEach(stageFile);
      commitChanges(getVersionBumpCommitMessage(packageNames));
    }
  })
  // eslint-disable-next-line no-console
  .catch(console.error);
