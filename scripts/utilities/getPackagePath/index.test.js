const getPackagePath = require('.');
const getPackages = require('../getPackages');

jest.mock('../getPackages');

describe('getPackagePath', () => {
  describe('when locally', () => {
    beforeEach(() => {
      getPackages.mockImplementation(() => [
        {
          name: '@bbc/psammead-brand',
          location: 'packages/components/psammead-brand',
        },
        {
          name: '@bbc/psammead-image',
          location: 'packages/components/psammead-image',
        },
      ]);
    });

    it('should return the path of the package', () => {
      expect(getPackagePath('@bbc/psammead-brand')).toEqual(
        'packages/components/psammead-brand',
      );
      expect(getPackagePath('@bbc/psammead-image')).toEqual(
        'packages/components/psammead-image',
      );
    });
  });
});
