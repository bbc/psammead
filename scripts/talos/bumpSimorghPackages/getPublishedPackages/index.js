const getPublishedPackages = bumpedPackages => {
  const publishedPackages = {};
  Object.values(bumpedPackages).forEach(bumpedPackage => {
    const sections = bumpedPackage.split(' ');
    if (sections.length === 3) {
      const packageName = sections[0];
      const version = sections[2];
      publishedPackages[packageName] = version;
    }
  });
  return publishedPackages;
};

module.exports = getPublishedPackages;
