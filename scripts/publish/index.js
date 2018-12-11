/* eslint-disable no-console */
const fs = require('fs');
const semver = require('semver');

const report = require('./src/report');
const publish = require('./src/publish');
const getRegistryVersion = require('./src/getRegistry');
const getPackages = require('./src/getPackages');

const attempted = {
  success: [],
  failure: [],
};

getPackages().forEach(packageDir => {
  const packageJson = JSON.parse(fs.readFileSync(`${packageDir}/package.json`));

  // If package isnt flaged to not be published.
  if (!packageJson.publish || packageJson.publish !== 'false') {
    // If local version is greater than version in the NPM registry.
    if (semver.gt(packageJson.version, getRegistryVersion(packageJson.name))) {
      publish(packageDir, packageJson, attempted);
    }
  } else {
    console.log(`Skipping ${packageJson.name} due to '"publish": "false"'`);
  }
});

report(attempted);
