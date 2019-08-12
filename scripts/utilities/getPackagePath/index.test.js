const getPackagePath = require('.');

jest.mock('../getPackages', () => () => [
  '/psammead/packages/components/psammead-brand',
  '/psammead/packages/components/psammead-image',
]);

describe('getPackagePath', () => {
  it('should return the path of the package', () => {
    const packagePath1 = getPackagePath('psammead-brand');
    const packagePath2 = getPackagePath('psammead-image');

    expect(packagePath1).toEqual(
      '/psammead/packages/components/psammead-brand',
    );
    expect(packagePath2).toEqual(
      '/psammead/packages/components/psammead-image',
    );
  });
});
