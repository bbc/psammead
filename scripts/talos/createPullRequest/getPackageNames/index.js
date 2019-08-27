const getPackageNames = packages => {
  if (packages.length > 3) {
    return `${packages.slice(0, 3).join(', ')}...`;
  }
  return `${packages.join(', ')}`;
};

module.exports = getPackageNames;
