/* eslint-disable no-console */
const { exec } = require('shelljs');
const chalk = require('chalk');

const slackNotification = require('../src/slackNotification');
const publishConfig = require('./publishConfig');

module.exports = (packageDir, packageJson, attempted) => {
  const packageReleaseTag = `${packageJson.name}@${packageJson.version}`;

  console.log(chalk.blue(`Publishing ${packageReleaseTag}`));

  const { access, tag } = publishConfig(packageJson);

  const execute = exec(
    `npm publish ${packageDir} --access ${access} --tag ${tag}`,
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
