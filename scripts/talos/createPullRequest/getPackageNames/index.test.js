import getPackageNames from '.';

describe('getPackageNames', () => {
  it('should shorten the title when more than 3 packages are provided', () => {
    expect(
      getPackageNames(['package1', 'package2', 'package3', 'package4']),
    ).toEqual('package1, package2, package3...');
  });

  it('should not shorten the title', () => {
    expect(getPackageNames(['package1', 'package2'])).toEqual(
      'package1, package2',
    );
  });
});
