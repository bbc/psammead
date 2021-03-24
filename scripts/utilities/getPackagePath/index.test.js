const getPackagePath = require('.');
const getPackages = require('../getPackages');

jest.mock('../getPackages');

describe('getPackagePath', () => {
  describe('when locally', () => {
    beforeEach(() => {
      getPackages.mockImplementation(() => [
        'psammead',
        'packages/components/psammead-brand',
        'packages/components/psammead-image',
      ]);
    });

    it('should return the path of the package', () => {
      expect(getPackagePath('psammead')).toEqual('.');
      expect(getPackagePath('psammead-brand')).toEqual(
        'packages/components/psammead-brand',
      );
      expect(getPackagePath('psammead-image')).toEqual(
        'packages/components/psammead-image',
      );
    });
  });
});
