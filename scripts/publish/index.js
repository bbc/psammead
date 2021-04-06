const fs = require('fs');
const report = require('./src/report');
const publish = require('./src/publish');
const shouldPublish = require('./src/shouldPublish');
const getPackages = require('../utilities/getPackages');

const attempted = { success: [], failure: [] };
const ROOT_PACKAGE = 'psammead';

const publishPackage = packageDir => {
  if (packageDir === ROOT_PACKAGE) {
    // we do not publish the root package
    return;
  }
  const packageFilePath = `./${packageDir}/package.json`;
  const packageJson = JSON.parse(fs.readFileSync(packageFilePath));

  if (shouldPublish(packageJson)) {
    publish(packageDir, packageJson, attempted);
  }
};

getPackages().forEach(publishPackage);

report(attempted);
