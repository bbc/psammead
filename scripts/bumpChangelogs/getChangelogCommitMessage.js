module.exports = packageNames => {
  const hasMultiplePackages = packageNames.length > 1;

  const message = hasMultiplePackages
    ? `Update changelogs\n\nUpdates changelogs for ${packageNames.join(', ')}`
    : `Update changelog for ${packageNames[0]}`;

  return message;
};
