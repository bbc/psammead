const { exec } = require('shelljs');
const fs = require('fs');
const semver = require('semver');
const chalk = require('chalk');

const stdExec = cmd => exec(cmd, { silent: true }).stdout;

const getNpmVersion = name => {
  const npmVersion = stdExec(`npm show ${name} version`) || '0.0.0';
  return npmVersion.split('\n')[0];
};

const publish = (packageDir, packageJson) => {
  console.log(chalk.blue(`Publishing ${packageJson.name}`));
  const execute = exec(`npm publish ${packageDir} --access public`, {
    silent: true,
  });

  if (execute.code !== 0) {
    console.log(chalk.red(execute.stderr));
  } else {
    console.log(
      chalk.green(
        `Successfully published ${packageJson.name} version ${
          packageJson.version
        }`,
      ),
    );
  }
};

const packages = stdExec('npx lerna ls --parseable')
  .split('\n')
  .filter(p => p);

packages.forEach(packageDir => {
  const packageJson = JSON.parse(fs.readFileSync(`${packageDir}/package.json`));

  if (!packageJson.publish || packageJson.publish !== 'false') {
    if (semver.gt(packageJson.version, getNpmVersion(packageJson.name))) {
      publish(packageDir, packageJson);
    }
  } else {
    console.log(`Skipping ${packageJson.name} due to '"publish": "false"'`);
  }
});
