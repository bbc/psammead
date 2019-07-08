const getNewChangelogContent = require('./getNewChangelogContent.js');
const getPackagePath = require('./getPackagePath.js');
const getPaths = require('./getPaths.js');
const writeChangelog = require('./writeChangelog.js');
const readFile = require('./readFile.js');

const changelogPaths = getPaths('CHANGELOG.md');

module.exports = ({ packageNames, prLink, changesDescription }) => {
  const updateChangelog = async packageName => {
    const changelogPath = getPackagePath(packageName, changelogPaths);
    const packageJsonPath = getPackagePath(
      packageName,
      getPaths('package.json'),
    );
    const packageJson = JSON.parse(await readFile(packageJsonPath));
    const { version } = packageJson;

    readFile(changelogPath)
      .then(getNewChangelogContent(version, prLink, changesDescription))
      .then(writeChangelog(changelogPath));
  };
  const updateChangelogs = packageNames.map(updateChangelog);

  return Promise.all([packageNames, changelogPaths, ...updateChangelogs]);
};
