const path = require('path');
const getPackagePath = require('../../utilities/getPackagePath');
const readFile = require('../../utilities/readFile');

const getChangelogHead = publishedPackage => {
  const packageName = publishedPackage.split(' ')[0];
  const packageVersions = publishedPackage
    .replace(packageName, '')
    .split('→')
    .map(version =>
      version
        .trim()
        .replace('^', '')
        .replace('~', ''),
    );

  const packagePath = getPackagePath(packageName);
  const changelogLines = readFile(path.join(packagePath, 'CHANGELOG.md')).split(
    '\n',
  );

  const tableHeadRegex = /\|\s+?Version\s+?|\s+?Description\s+?\|/;
  const tableHead = changelogLines.find(line => line.match(tableHeadRegex));
  const firstVersionLine = changelogLines.find(line =>
    line.includes(packageVersions[0]),
  );

  const changelogHeadIndex = changelogLines.indexOf(tableHead);
  const firstVersionIndex = changelogLines.indexOf(firstVersionLine);
  const changelogHead = changelogLines.splice(
    changelogHeadIndex,
    firstVersionIndex - changelogHeadIndex,
  );

  return changelogHead.join('\n');
};

module.exports = getChangelogHead;
