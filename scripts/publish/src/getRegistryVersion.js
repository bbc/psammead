const { exec } = require('shelljs');

const whitelist = /^[a-zA-Z0-9-]*$/;

const checkPackage = name => {
  const dirStructure = name.split('/');
  const packageName = dirStructure[dirStructure.length - 1];
  const result = whitelist.test(packageName);

  return result;
};

// Get version of package in NPM regsitry. Returns 0.0.0 if doesn't exist.
module.exports = name => {
  let packageVersions = [];

  if (!checkPackage(name)) return '-1';

  const npmVersion = exec(`npm view ${name} versions -json`, { silent: true })
    .stdout;

  if (typeof npmVersion === 'string' && JSON.parse(npmVersion)) {
    const jsonResponse = JSON.parse(npmVersion);
    packageVersions = Array.isArray(jsonResponse) ? jsonResponse : [];
  }

  const latestPublishedVersion = packageVersions.pop(); // removes the last element from the array and returns it i.e. the latest published version
  return latestPublishedVersion || '0.0.0';
};
