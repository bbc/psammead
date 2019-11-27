const getPackageTypes = require('./index');
const fs = require('fs');

jest.mock('fs', () => ({
  readdirSync: jest.fn(),
  statSync: jest.fn(),
}));

describe('getPackageTypes', () => {
  it('should return a list of package types', () => {
    const componentDir = [
      'components',
      'containers',
      'utilities',
    ];

    fs.readdirSync.mockReturnValue(componentDir);

    fs.statSync.mockImplementation(path => {
      return {
        isDirectory: () => !path.includes('.'),
      };
    });

    expect(getPackageTypes()).toEqual(componentDir);
  });
});
