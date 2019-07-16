module.exports = packageNames => {
  const hasMultiplePackages = packageNames.length > 1;
  const headline = `Bump package version${
    hasMultiplePackages ? 's' : ` for ${packageNames[0]}`
  }`;
  const getMessage = () =>
    `Bump package versions for ${packageNames.join(', ')}`;

  return `${headline}\n\n${hasMultiplePackages ? getMessage() : ''}`;
};
