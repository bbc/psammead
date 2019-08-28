const getExistingPackages = require('./index');
const fs = require('fs');

jest.mock('fs', () => ({
  readdirSync: jest.fn(),
  statSync: jest.fn(),
}));

describe('getExistingPackages', () => {
  it('should return a list of exisiting package names', () => {
    const componentDir = [
      'foobar.js',
      'README.md',
      'psammead-foobar',
      'psammead-foobar',
      'foobar-psammead',
    ];

    fs.readdirSync.mockReturnValue(componentDir);

    fs.statSync.mockImplementation(path => {
      return {
        isDirectory: () => path.includes('psammead-'),
      };
    });

    expect(getExistingPackages()).toEqual(
      expect.arrayContaining([expect.stringContaining('psammead-')]),
    );
  });
});
