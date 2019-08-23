const path = require('path');
const getPackagePath = require('../../utilities/getPackagePath');
const readFile = require('../../utilities/readFile');

const getPullRequestNumber = publishedPackage => {
  const packagePath = getPackagePath(publishedPackage);
  const changelog =
    process.argv[2] && process.argv[2].length > 0
      ? process.argv[2]
      : readFile(path.join(packagePath, 'CHANGELOG.md'));
  const prMatches = changelog.match(/PR#\d*/);

  return prMatches.length && prMatches[0].length > 3
    ? prMatches[0].substring(3)
    : '';
};

module.exports = getPullRequestNumber;
