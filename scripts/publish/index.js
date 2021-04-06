const fs = require('fs');
const report = require('./src/report');
const publish = require('./src/publish');
const shouldPublish = require('./src/shouldPublish');
const getPackages = require('../utilities/getPackages');

const attempted = { success: [], failure: [] };
const ROOT_PACKAGE = 'psammead';
const PACKAGE_FILE = 'package.json';

const getPackageFilePath = packageDir =>
  packageDir === ROOT_PACKAGE
    ? `./${PACKAGE_FILE}`
    : `./${packageDir}/${PACKAGE_FILE}`;

const publishPackage = packageDir => {
  const packageFilePath = getPackageFilePath(packageDir);
  const packageJson = JSON.parse(fs.readFileSync(packageFilePath));

  if (shouldPublish(packageJson)) {
    publish(packageDir, packageJson, attempted);
  }
};

getPackages().forEach(publishPackage);

report(attempted);
