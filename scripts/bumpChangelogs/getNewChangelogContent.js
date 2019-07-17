module.exports = (version, prLink, changesDescription) => existingChangelog => {
  const changelogLines = existingChangelog.split('\n');
  const [prNumber] = prLink.split('/').splice(-1);
  const newChanges = `| ${version} | [PR#${prNumber}](${prLink}) ${changesDescription} |`;
  const lineNumberToAddChanges =
    changelogLines.indexOf('| Version | Description |') + 2;
  changelogLines.splice(lineNumberToAddChanges, 0, newChanges);

  return changelogLines.join('\n');
};
