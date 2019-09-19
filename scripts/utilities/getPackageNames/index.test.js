const getPackageNames = require('.');

jest.mock('../getPackages', () => () => [
  '/path/to/repository/bbc/psammead',
  '/path/to/repository/bbc/packages/utilities/gel-foundations',
  '/path/to/repository/bbc/packages/components/psammead-brand',
  '/path/to/repository/bbc/packages/components/psammead-image',
]);

describe('getPackageNames', () => {
  it('should return package names without the url', () => {
    const actual = getPackageNames();
    const expected = [
      'psammead',
      'gel-foundations',
      'psammead-brand',
      'psammead-image',
    ];
    expect(actual).toEqual(expected);
  });
});
