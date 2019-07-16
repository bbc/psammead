const getNewChangelogContent = require('./getNewChangelogContent.js');
const getPackagePath = require('./getPackagePath.js');
const writeChangelog = require('./writeChangelog.js');
const readFile = require('./readFile.js');

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
