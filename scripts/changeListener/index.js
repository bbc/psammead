const chalk = require('chalk');
const { exec } = require('shelljs');
const {
  gitAdd,
  gitCommit,
  createBranch,
  deleteBranch,
} = require('../utilities/gitCommands');

console.log(
  chalk.white.bgBlue.bold('🤖  BumperBot is bumping Psammead packages...'),
);

// For testing
exec(`echo 'fake changes' >> README.md`);
exec(
  `echo 'fake changes' >> packages/utilities/psammead-test-helpers/README.md`,
);
exec(
  `echo 'fake changes' >> packages/components/psammead-media-indicator/README.md`,
);

// files that have changed
const filesChanged = exec(`git diff --name-only latest`, {
  silent: true,
})
  .stdout.split('\n')
  .filter(Boolean);

const packageNames = [];

const dupePackageName = (name, packages) => {
  return packages.indexOf(name) > -1;
};

filesChanged.forEach(fileName => {
  const nameParts = fileName.split('/');

  if (fileName.includes('packages/')) {
    // checks if any psammead package have been updated.
    if (!dupePackageName(nameParts[2], packageNames)) {
      packageNames.push(nameParts[2]);
    }
  } else {
    // catches any other changes and tracks it as a general psammead change.
    if (!dupePackageName('psammead', packageNames)) {
      packageNames.push('psammead');
    }
  }
});

// delete branch
deleteBranch(
  `BumperBot/Updating-the-following/${packageNames
    .toString()
    .replace(/,/g, '/')}`,
);

// create new branch
createBranch(
  `BumperBot/Updating-the-following/${packageNames
    .toString()
    .replace(/,/g, '/')}`,
);

// stage all changed files
gitAdd('.');

// stage all changed files
gitCommit(`BumperBot updated the follow package(s): ${packageNames}`);
