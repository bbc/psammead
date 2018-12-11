/* eslint-disable no-console */
const { exec } = require('shelljs');
const chalk = require('chalk');
const otpTag = require('./getOtpTag');

module.exports = (packageDir, packageJson, attempted) => {
  console.log(chalk.blue(`Publishing ${packageJson.name}`));

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

  const execute = exec(
    `npm publish ${packageDir} --access ${access} --tag ${tag} ${otpTag()}`,
    {
      silent: true,
    },
  );

  if (execute.code !== 0) {
    console.log(
      chalk.red(`Error publishing ${packageJson.name}@${packageJson.version}`),
    );
    console.log(chalk.red(execute.stderr));
    attempted.failure.push(`${packageJson.name}@${packageJson.version}`);
  } else {
    console.log(
      chalk.green(
        `Successfully published ${packageJson.name}@${packageJson.version}`,
      ),
    );
    attempted.success.push(`${packageJson.name}@${packageJson.version}`);
  }
};
