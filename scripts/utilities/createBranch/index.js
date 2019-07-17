const chalk = require('chalk');
const { exec } = require('shelljs');
const git = require('simple-git/promise');

console.log(
  chalk.white.bgBlue.bold('🤖  BumperBot is bumping Psammead packages...'),
);

// Change a file to test bumper bot
exec(`echo 'fake changes' >> README.md`);

const filesChanged = exec(`git diff --name-only latest`, {
  silent: true,
})
  .stdout.split('\n')
  .filter(Boolean);

const packageName = [];

filesChanged.forEach(fileName => {
  const nameParts = fileName.split('/');

  if (nameParts.length === 1) {
    if (!(packageName.indexOf('Psammead') > -1)) packageName.push('Psammead');
  } else {
    if (!(packageName.indexOf(nameParts[2]) > -1))
      packageName.push(nameParts[2]);
  }
});

// trying to use simple-git

// // checkout latest
// git()
//   .silent(true)
//   .checkout('latest')
//   .then(() => console.log('You are on latest branch now'))
//   .catch(err => console.error('failed:', err));

// // make sure latest is up to date
// git()
//   .silent(true)
//   .pull('origin latest')
//   .then(() => console.log('Your latest is now up to date'))
//   .catch(err => console.error('failed:', err));

// // delete local branch
// git()
//   .silent(true)
//   .deleteLocalBranch('testing')
//   .then(() => console.log('Cleaning local branch'))
//   .catch(err => console.error('failed:', err));

// create new branch
git()
  .checkoutLocalBranch('khoa-testing')
  .then(() => console.log('You have checked out in to a new branch'))
  .catch(err => console.error('failed:', err));

// add changes
git()
  .add('.')
  .then(() => console.log('All local changes have been added'))
  .catch(err => console.error('failed:', err));

// commit changes
git()
  .commit(`update these package: ${packageName}`, { '--no-verify': null })
  .then(() =>
    console.log(
      'Your changes have been committed locally (husky might be running)',
    ),
  )
  .catch(err => console.error('failed:', err));

// push changes
git()
  .push('origin', 'khoa-testing', { '--no-verify': null })
  .then(() => console.log('pushed changes (husky might be running)'))
  .catch(err => console.error('failed:', err));

// commitChanges('BumperBot Updating:', packageName);

// if (filesChanged) {
//   exec(`git checkout latest`);
//   exec(`git pull`);
//   exec(`git checkout -b "BumperBot-Bumping"`);
//   exec(`git add .`);
//   exec(`git commit -m 'BumperBot Bumping'`);
//   exec(`git push origin BumperBot-Bumping`);
// } else {
//   console.log(chalk.white.bgGreen.bold('No changes were made'));
// }
