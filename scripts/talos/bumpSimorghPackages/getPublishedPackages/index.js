const getPublishedPackages = bumpedPackages => {
  const publishedPackages = {};
  Object.values(bumpedPackages).forEach(bumpedPackageList => {
    bumpedPackageList.forEach(publishedPackage => {
      const isUpgraded = publishedPackage.includes('  →  ');
      if (isUpgraded) {
        const [packageName] = publishedPackage.match(/^@bbc\/psammead-\S+/);
        const [version] = publishedPackage.match(/(?<=→\s\s).+$/);
        publishedPackages[packageName] = version;
      }
    });
  });
  return publishedPackages;
};

module.exports = getPublishedPackages;
