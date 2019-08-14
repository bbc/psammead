const getExistingPackages = require('./index');
const fs = require('fs');

jest.mock('fs', () => ({
  readdirSync: jest.fn(),
  statSync: jest.fn(),
}));

describe('getExistingPackages', () => {
  it('should return a list of exisiting package names', async () => {
    const componentDir = [
      'foobar.js',
      'README.md',
      'psammead-foobar',
      'psammead-foobar',
    ];

    fs.readdirSync.mockReturnValue(componentDir);

    fs.statSync.mockImplementation(path => {
      return {
        isDirectory: () => path.includes('psammead-'),
      };
    });

    const exisitingPackages = getExistingPackages();

    expect(exisitingPackages).toEqual(expect.not.stringMatching('.'));
    expect(exisitingPackages).toEqual(
      expect.arrayContaining([expect.stringMatching(/^psammead-/)]),
    );
  });
});
