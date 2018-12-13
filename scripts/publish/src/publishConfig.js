module.exports = packageJson => {
  let access = 'public';
  let tag = 'latest';

  // Set access and tag based on value in package.json config.
  if (packageJson.publishConfig) {
    if (packageJson.publishConfig.access) {
      ({ access } = packageJson.publishConfig);
    }

    if (packageJson.publishConfig.tag) {
      ({ tag } = packageJson.publishConfig);
    }
  }

  return { access, tag };
};
