const fs = require('fs');
const report = require('./src/report');
const publish = require('./src/publish');
const shouldPublish = require('./src/shouldPublish');
const getPackages = require('../utilities/getPackages');

const attempted = { success: [], failure: [] };

const publishPackage = packageDir => {
  const packageJson = JSON.parse(fs.readFileSync(`${packageDir}/package.json`));

  if (shouldPublish(packageJson)) {
    publish(packageDir, packageJson, attempted);
  }
};

getPackages().forEach(publishPackage);

report(attempted);
