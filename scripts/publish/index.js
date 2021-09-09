const fs = require('fs');
const report = require('./src/report');
const publish = require('./src/publish');
const shouldPublish = require('./src/shouldPublish');
const getPackages = require('../utilities/getPackages');

const attempted = { success: [], failure: [] };

const publishPackage = packageDir => {
  const packageFilePath = `./${packageDir}/package.json`;
  const packageJson = JSON.parse(fs.readFileSync(packageFilePath));

  if (shouldPublish(packageJson)) {
    publish(packageDir, packageJson, attempted);
  }
};

getPackages()
  .map(({ location }) => location)
  .forEach(publishPackage);

report(attempted);
