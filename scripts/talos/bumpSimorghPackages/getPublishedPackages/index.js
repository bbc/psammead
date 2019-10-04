const getPublishedPackages = bumpedPackages => {
  const publishedPackages = {};
  Object.values(bumpedPackages).forEach(bumpedPackageList => {
    bumpedPackageList.forEach(publishedPackage => {
      const sections = publishedPackage.replace(/  +/g, ' ').split(' ');
      if (sections.length === 4) {
        const packageName = sections[0];
        const version = sections[3];
        publishedPackages[packageName] = version;
      }
    });
  });
  return publishedPackages;
};

module.exports = getPublishedPackages;
