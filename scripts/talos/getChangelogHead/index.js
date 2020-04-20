const path = require('path');
const getPackagePath = require('../../utilities/getPackagePath');
const readFile = require('../../utilities/readFileSync');

const getPackageName = publishedPackage =>
  publishedPackage.split(' ')[0].replace('@bbc/', '');

const getPackageVersions = publishedPackage =>
  publishedPackage
    .replace(getPackageName(publishedPackage), '')
    .replace('@bbc/', '')
    .split('→')
    .map(version => version.trim().replace('^', '').replace('~', ''));

const getChangelogHead = publishedPackage => {
  const packageName = getPackageName(publishedPackage);
  const packageVersions = getPackageVersions(publishedPackage);
  const packagePath = getPackagePath(packageName);
  const changelogLines = readFile(path.join(packagePath, 'CHANGELOG.md')).split(
    '\n',
  );

  const tableHeadRegex = /\|\s+?Version\s+?|\s+?Description\s+?\|/;
  const tableHeadIndex = changelogLines.findIndex(line =>
    line.match(tableHeadRegex),
  );
  const firstVersionIndex = changelogLines.findIndex(line =>
    line.includes(packageVersions[0]),
  );
  const changelogHead = changelogLines.splice(
    tableHeadIndex,
    firstVersionIndex - tableHeadIndex,
  );

  return changelogHead.join('\n');
};

module.exports = getChangelogHead;
