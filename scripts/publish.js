/* eslint-disable no-console */
const { exec } = require('shelljs');
const fs = require('fs');
const semver = require('semver');
const chalk = require('chalk');

const attempted = {
  success: [],
  failure: [],
};

const getRegistryVersion = name => {
  const npmVersion = exec(`npm show ${name} version`, { silent: true }).stdout;
  return npmVersion ? npmVersion.split('\n')[0] : '0.0.0';
};

const getPackages = () =>
  exec('npx lerna ls --parseable', { silent: true })
    .stdout.split('\n')
    .filter(p => p);

const publish = (packageDir, packageJson) => {
  console.log(chalk.blue(`Publishing ${packageJson.name}`));

  const execute = exec(`npm publish ${packageDir} --access public --dry-run`, {
    silent: true,
  });

  if (execute.code !== 0) {
    console.log(
      chalk.red(
        `Error publishing ${packageJson.name} version ${packageJson.version}`,
      ),
    );
    console.log(chalk.red(execute.stderr));
    attempted.failure.push(`${packageJson.name}@${packageJson.version}`);
  } else {
    console.log(
      chalk.green(
        `Successfully published ${packageJson.name} version ${
          packageJson.version
        }`,
      ),
    );
    attempted.success.push(`${packageJson.name}@${packageJson.version}`);
  }
};

const report = () => {
  const successfulCount = attempted.success.length;
  const failureCount = attempted.failure.length;
  const total = successfulCount + failureCount;

  const SuccessMessage = successfulCount
    ? chalk.green(`${successfulCount} Successful, `)
    : '';

  const FailureMessage = failureCount
    ? chalk.red(`${failureCount} Failed, `)
    : '';

  console.log(
    `\n\nPublished: ${SuccessMessage}${FailureMessage}${total} total`,
  );

  if (successfulCount) {
    console.log(chalk.underline.green('\nSuccessful'));
    attempted.success.forEach(published => console.log(chalk.green(published)));
  }

  if (failureCount) {
    console.log(chalk.underline.red('\n Failed'));
    attempted.failure.forEach(published => console.log(chalk.red(published)));
  }
};

getPackages().forEach(packageDir => {
  const packageJson = JSON.parse(fs.readFileSync(`${packageDir}/package.json`));

  if (!packageJson.publish || packageJson.publish !== 'false') {
    if (semver.gt(packageJson.version, getRegistryVersion(packageJson.name))) {
      publish(packageDir, packageJson);
    }
  } else {
    console.log(`Skipping ${packageJson.name} due to '"publish": "false"'`);
  }
});

report();
