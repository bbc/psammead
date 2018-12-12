const fs = require('fs');
const report = require('./src/report');
const publish = require('./src/publish');
const shouldPublish = require('./src/shouldPublish');
const getPackages = require('./src/getPackages');

const attempted = { success: [], failure: [] };

getPackages().forEach(packageDir => {
  const packageJson = JSON.parse(fs.readFileSync(`${packageDir}/package.json`));

  if (shouldPublish(packageJson)) {
    publish(packageDir, packageJson, attempted);
  }
});

report(attempted);
