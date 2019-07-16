/* eslint-disable no-console */
const { exec } = require('shelljs');
const chalk = require('chalk');

const slackNotification = require('../src/slackNotification');
const publishConfig = require('./publishConfig');

module.exports = async (packageDir, packageJson) => {
  // const packageReleaseTag = `${packageJson.name}@${packageJson.version}`;

  // console.log(chalk.blue(`Publishing ${packageReleaseTag}`));

  // const { access, tag } = publishConfig(packageJson);

  // const execute = exec(
  //   `npm publish ${packageDir} --access ${access} --tag ${tag}`,
  //   {
  //     silent: true,
  //   },
  // );

  // if (execute.code !== 0) {
  //   console.log(chalk.red(`Error publishing ${packageReleaseTag}`));
  //   console.log(chalk.red(execute.stderr));
  //   slackNotification(packageReleaseTag, false);
  //   return { packageReleaseTag, status: false, failure: true };
  // }
  // console.log(chalk.green(`Successfully published ${packageReleaseTag}`));
  // slackNotification(packageReleaseTag, true);
  // return { packageReleaseTag, status: true, failure: false };
  console.log("Publish");
  return 'cyka';
};
