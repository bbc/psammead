module.exports = paths => {
  const getPackageName = packagePath => {
    const [packageName] = packagePath.split('/').splice(-2);
    return packageName;
  };
  return paths.map(getPackageName);
};
