const path = require('path');
const getPackagePath = require('../../utilities/getPackagePath');
const readFile = require('../../utilities/readFile');

const getPullRequestNumber = publishedPackage => {
  const packagePath = getPackagePath(publishedPackage);
  const changelog = readFile(path.join(packagePath, 'CHANGELOG.md'));
  const prMatches = changelog.match(/PR#\d*/);

  return prMatches.length && prMatches[0].length > 3
    ? prMatches[0].substring(3)
    : '';
};

module.exports = getPullRequestNumber;
