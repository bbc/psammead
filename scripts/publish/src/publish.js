/* eslint-disable no-console */
const { exec } = require('shelljs');
const chalk = require('chalk');
const fs = require('fs');

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
  } else {
    console.log(chalk.green(`Successfully published ${packageReleaseTag}`));
    attempted.success.push(packageReleaseTag);
    fs.appendFileSync('published.txt', `${packageJson.name},`);
  }
};
