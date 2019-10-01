const getUpdates = (dependencies, publishedPackages) => {
  const updates = [];
  Object.keys(publishedPackages).forEach(packageName => {
    const version = dependencies[packageName];
    if (version)
      updates.push(
        `${packageName}  ${version}  →  ${publishedPackages[packageName]}`,
      );
  });
  return updates;
};

module.exports = getUpdates;
