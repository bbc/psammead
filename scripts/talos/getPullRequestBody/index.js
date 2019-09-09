const getChangelogHead = require('../getChangelogHead');

const getDetailsFromPackage = publishedPackages =>
  [
    ...publishedPackages.map(
      publishedPackage => `
<details>
<summary>Details</summary>
${publishedPackage}
${getChangelogHead(publishedPackage)}
</details>`,
    ),
  ].join('\n');

const getPullRequestBody = bumpedPackagesObj => {
  return [
    '👋 The following packages have been updated:',
    ...Object.keys(bumpedPackagesObj).map(
      bumpedPackage => `
${bumpedPackage}
${getDetailsFromPackage(bumpedPackagesObj[bumpedPackage])}
`,
    ),
    '',
  ].join('\n');
};

module.exports = getPullRequestBody;
