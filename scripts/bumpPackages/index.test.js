const getVersionBumpCommitMessage = require('./getVersionBumpCommitMessage');

describe('bumpPackages', () => {
  it('should return the package bump commit message for multiple packages', () => {
    const actual = getVersionBumpCommitMessage([
      'psammead-brand',
      'psammead-image',
    ]);

    expect(actual).toEqual(`Bump package versions

Bump package versions for psammead-brand, psammead-image`);
  });

  it('should return the package bump commit message for one package', () => {
    const actual = getVersionBumpCommitMessage(['psammead-image']);

    expect(actual).toEqual('Bump package version for psammead-image');
  });
});
