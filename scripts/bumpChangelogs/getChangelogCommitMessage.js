module.exports = packageNames => {
  const hasMultiplePackages = packageNames.length > 1;
  const headline = `Update changelog${
    hasMultiplePackages ? 's' : ` for ${packageNames[0]}`
  }`;
  const getMessage = () => `Updates changelogs for ${packageNames.join(', ')}`;

  return `${headline}${hasMultiplePackages ? `\n\n${getMessage()}` : ''}`;
};
