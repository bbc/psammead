/* eslint-disable no-console */
const { exec } = require('shelljs');
const chalk = require('chalk');
const argv = require('yargs-parser')(process.argv.slice(2));
const slackNotification = require('./slackNotification');

module.exports = (packageDir, packageJson, attempted) => {
  const packageReleaseTag = `${packageJson.name}@${packageJson.version}`;

  console.log(chalk.blue(`Publishing ${packageReleaseTag}`));

  let access = 'public';
  let tag = 'latest';

  // Set access and tag based on value in package.json config.
  if (packageJson.publishConfig) {
    if (packageJson.publishConfig.access) {
      ({ access } = packageJson.publishConfig);
    }

    if (packageJson.publishConfig.tag) {
      ({ tag } = packageJson.tag);
    }
  }

  const otpTag = argv.otp ? `--otp ${argv.otp}` : '';

  const execute = exec(
    `npm publish ${packageDir} --access ${access} --tag ${tag} ${otpTag}`,
    {
      silent: true,
    },
  );

  if (execute.code !== 0) {
    console.log(chalk.red(`Error publishing ${packageReleaseTag}`));
    console.log(chalk.red(execute.stderr));
    attempted.failure.push(packageReleaseTag);
    slackNotification(packageReleaseTag, false);
  } else {
    console.log(chalk.green(`Successfully published ${packageReleaseTag}`));
    attempted.success.push(packageReleaseTag);
    slackNotification(packageReleaseTag, true);
  }
};
