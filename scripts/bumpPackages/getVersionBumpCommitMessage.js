module.exports = packageNames => {
  const hasMultiplePackages = packageNames.length > 1;

  const message = hasMultiplePackages
    ? `Bump package versions\n\nBump package versions for ${packageNames.join(
        ', ',
      )}`
    : `Bump package version for ${packageNames[0]}`;

  return message;
};
