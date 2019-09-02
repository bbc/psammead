const getNewChangelogContent = require('./getNewChangelogContent');
const getPackagePath = require('../utilities/getPackagePath');
const writeChangelog = require('./writeChangelog');
const readFile = require('../utilities/readFile');

const CHANGELOG = 'CHANGELOG.md';

module.exports = ({ bumpedPackages, prLink, changesDescription }) => {
  const packageNames = Object.keys(bumpedPackages);
  const packageNamesNoBbcPrefix = packageNames.map(dep =>
    dep.replace('@bbc/', ''),
  );
  const changelogPaths = packageNamesNoBbcPrefix
    .map(getPackagePath)
    .map(packagePath => `${packagePath}/${CHANGELOG}`);
  const descriptions = packageNames.map(
    dep =>
      `${changesDescription} - ${Object.keys(bumpedPackages[dep]).join(', ')}`,
  );

  const updateChangelog = async (changelogPath, index) => {
    const packageJsonPath = changelogPath.replace(CHANGELOG, 'package.json');
    const { version } = JSON.parse(await readFile(packageJsonPath));

    return readFile(changelogPath)
      .then(getNewChangelogContent(version, prLink, descriptions[index]))
      .then(writeChangelog(changelogPath));
  };
  const updateChangelogs = changelogPaths.map(updateChangelog);

  return Promise.all([packageNames, changelogPaths, ...updateChangelogs]);
};
