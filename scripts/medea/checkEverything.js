const fs = require('fs');
const getBranchName = require('./getBranchName');
const getDependabotPRs = require('./getDependabotPRs');
const getPackageNames = require('./getPackageNames');
const getPRNumber = require('./getPRNumber');
const getPRTitle = require('./getPRTitle');
const getPullRequestBody = require('./getPullRequestBody');

console.log(getDependabotPRs());
getDependabotPRs().then(value => {
  const dependabotPRData = JSON.stringify(value);
  fs.writeFileSync('scripts/medea/PRs.json', dependabotPRData);
});
console.log(getBranchName());
console.log(getPackageNames());
console.log(getPRNumber());
console.log(getPRTitle());
console.log(getPullRequestBody());
