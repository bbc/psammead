const fs = require('fs');
const semver = require('semver');
const report = require('./src/report');
const publish = require('./src/publish');
const getPackages = require('./src/getPackages');
const getRegistryVersion = require('./src/getRegistryVersion');

const getLatest = async pack => {
  const version = Object.keys(pack.versions);
  const latest = version.pop();
  return latest;
};

const shouldPub = async (packageJson, lts) => {
  return !packageJson.private && semver.gt(packageJson.version, lts);
};

const publishPackage = async packageDir => {
  try {
    const packageJson = JSON.parse(
      fs.readFileSync(`${packageDir}/package.json`),
    );
    const p = await getRegistryVersion(packageJson.name);
    const lts = (await getLatest(p)) || '0.0.0';
    const canPublish = await shouldPub(packageJson, lts);

    if (canPublish) {
      const publishResult = await publish(packageDir, packageJson);
      return publishResult;
    }

    const packageReleaseTag = `${packageJson.name}@${packageJson.version}`;
    return { packageReleaseTag, status: false, failure: false };
  } catch (e) {
    return { packageReleaseTag: packageDir, status: false, failure: true };
  }
};

Promise.all(getPackages().map(publishPackage)).then(log => {
  report(log);
});
