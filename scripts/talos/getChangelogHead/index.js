const path = require('path');
const getPackagePath = require('../../utilities/getPackagePath');
const readFile = require('../../utilities/readFile');

const getChangelogHead = publishedPackage => {
  const packagePath = getPackagePath(publishedPackage);
  const changelogLines = readFile(path.join(packagePath, 'CHANGELOG.md')).split(
    '\n',
  );
  const tableHeadRegex = /\|\s+?Version\s+?|\s+?Description\s+?\|/;
  const tableHead = changelogLines.find(line => line.match(tableHeadRegex));
  const changelogHeadIndex = changelogLines.indexOf(tableHead);
  const changelogHead = changelogLines.splice(changelogHeadIndex, 3);

  return changelogHead.join('\n');
};

module.exports = getChangelogHead;
