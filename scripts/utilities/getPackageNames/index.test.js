const getPackageNames = require('.');

jest.mock('../getPackages', () => [
  'psammead',
  '@bbc/gel-foundations',
  '@bbc/psammead-brand',
  '@bbc/psammead-image',
]);

describe('getPackageNames', () => {
  it('should return package names without the "@bbc" scope', () => {
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
