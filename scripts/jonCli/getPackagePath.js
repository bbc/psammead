module.exports = (packageName, paths) => {
  const matchesPath = packagePath =>
    new RegExp(`/${packageName}/`).test(packagePath);

  return paths.find(matchesPath);
};
