const fs = require('fs');
const getDependabotPRs = require('./getDependabotPRs');

getDependabotPRs().then(value => {
  const dependabotPRData = JSON.stringify(value);
  fs.writeFileSync('scripts/medea/PRs.json', dependabotPRData);
});

const closePullRequest = require('./closePullRequest');
const createPullRequest = require('./createPullRequest');

console.log(createPullRequest());
console.log(closePullRequest());
