const getPullRequestBody = (packages, bumpedPackages) => {
  return [
    '👋 The following packages have been published:',
    ...packages,
    '',
    'So we need to bump them in the following packages:',
    ...bumpedPackages,
  ].join('\n');
};

module.exports = getPullRequestBody;
