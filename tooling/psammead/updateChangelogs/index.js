const getNewChangelogContent = require('./getNewChangelogContent');
const writeChangelog = require('./writeChangelog');
const readFile = require('../../utilities/readFile');
const getPackages = require('../getPackages');

const updateChangelog = ({
  prLink,
  changesDescription,
}) => async packagePath => {
  const changelogPath = `${packagePath}/CHANGELOG.md`;
  const packageFilePath = `${packagePath}/package.json`;
  const { version } = JSON.parse(await readFile(packageFilePath));

  return readFile(changelogPath)
    .then(getNewChangelogContent(version, prLink, changesDescription))
    .then(writeChangelog(changelogPath));
};

module.exports = ({ packages, prLink, changesDescription }) => {
  const packagesData = getPackages();
  const packagePaths = packages.map(
    packageName => packagesData[packageName].location,
  );

  return Promise.all(
    packagePaths.map(updateChangelog({ prLink, changesDescription })),
  );
};
