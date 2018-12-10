/* eslint-disable no-console */
const { exec } = require('shelljs');
const fs = require('fs');
const semver = require('semver');

const report = require('./src/report');
const publish = require('./src/publish');

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

getPackages().forEach(packageDir => {
  const packageJson = JSON.parse(fs.readFileSync(`${packageDir}/package.json`));

  if (!packageJson.publish || packageJson.publish !== 'false') {
    if (semver.gt(packageJson.version, getRegistryVersion(packageJson.name))) {
      publish(packageDir, packageJson, attempted);
    }
  } else {
    console.log(`Skipping ${packageJson.name} due to '"publish": "false"'`);
  }
});

report(attempted);
