const getPackagePath = require('.');
const getPackages = require('../getPackages');

jest.mock('../getPackages');

describe('getPackagePath', () => {
  describe('when locally', () => {
    beforeEach(() => {
      getPackages.mockImplementation(() => [
        '/psammead',
        '/psammead/packages/components/psammead-brand',
        '/psammead/packages/components/psammead-image',
      ]);
    });

    it('should return the path of the package', () => {
      expect(getPackagePath('psammead')).toEqual('/psammead');
      expect(getPackagePath('psammead-brand')).toEqual(
        '/psammead/packages/components/psammead-brand',
      );
      expect(getPackagePath('psammead-image')).toEqual(
        '/psammead/packages/components/psammead-image',
      );
    });
  });

  describe('when on jenkins', () => {
    beforeEach(() => {
      getPackages.mockImplementation(() => [
        '/psammead-branchname-DIXQWB5T3V53L2PKQUIWNQJXA',
        '/psammead-branchname-DIXQWB5T3V53L2PKQUIWNQJXA/packages/components/psammead-brand',
        '/psammead-branchname-DIXQWB5T3V53L2PKQUIWNQJXA/packages/components/psammead-image',
      ]);
    });

    it('should return the path of the package', () => {
      expect(getPackagePath('psammead')).toEqual(
        '/psammead-branchname-DIXQWB5T3V53L2PKQUIWNQJXA',
      );
      expect(getPackagePath('psammead-brand')).toEqual(
        '/psammead-branchname-DIXQWB5T3V53L2PKQUIWNQJXA/packages/components/psammead-brand',
      );
      expect(getPackagePath('psammead-image')).toEqual(
        '/psammead-branchname-DIXQWB5T3V53L2PKQUIWNQJXA/packages/components/psammead-image',
      );
    });
  });
});
