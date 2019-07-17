const getNewChangelogContent = require('./getNewChangelogContent');
const getPackagePath = require('../utilities/getPackagePath');
const writeChangelog = require('../utilities/writeChangelog');
const readFile = require('../utilities/readFile');

const CHANGELOG = 'CHANGELOG.md';

module.exports = ({ packageNames, prLink, changesDescription }) => {
  const changelogPaths = packageNames
    .map(getPackagePath)
    .map(packagePath => `${packagePath}/${CHANGELOG}`);

  const updateChangelog = async changelogPath => {
    const packageJsonPath = changelogPath.replace(CHANGELOG, 'package.json');
    const { version } = JSON.parse(await readFile(packageJsonPath));

    readFile(changelogPath)
      .then(getNewChangelogContent(version, prLink, changesDescription))
      .then(writeChangelog(changelogPath));
  };
  const updateChangelogs = changelogPaths.map(updateChangelog);

  return Promise.all([packageNames, changelogPaths, ...updateChangelogs]);
};
