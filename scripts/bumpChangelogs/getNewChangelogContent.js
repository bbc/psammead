module.exports = (version, prLink, changesDescription) => existingChangelog => {
  const changelogLines = existingChangelog.split('\n');
  const [prNumber] = prLink.split('/').splice(-1);
  const newChanges = `| ${version} | [PR#${prNumber}](${prLink}) ${changesDescription} |`;
  const tableHeadRegex = /\|\s+?Version\s+?|\s+?Description\s+?\|/;
  const tableHead = changelogLines.find(line => line.match(tableHeadRegex));
  const lineNumberToAddChanges = changelogLines.indexOf(tableHead) + 2;
  changelogLines.splice(lineNumberToAddChanges, 0, newChanges);

  return changelogLines.join('\n');
};
