const getUpdates = (dependencies, publishedPackages) => {
  return Object.keys(publishedPackages)
    .filter(packageName => !!dependencies[packageName])
    .map(
      packageName =>
        `${packageName}  ${dependencies[packageName]}  →  ${publishedPackages[packageName]}`,
    );
};

module.exports = getUpdates;
