const updatePackageJson = require('./index');
const packageJson = require('../mockPackageJson');
const commitRemoteChanges = require('../../../utilities/commitRemoteChanges');

jest.mock('../../../utilities/commitRemoteChanges');

const publishedPackages = {
  '@bbc/gel-foundations': '^3.5.2',
  '@bbc/psammead-assets': '^2.5.1',
  '@bbc/psammead-storybook-helpers': '^6.2.1',
};

const expectedPackageJson = {
  dependencies: {
    '@bbc/gel-foundations': '^3.5.2',
    '@bbc/moment-timezone-include': '^1.1.2',
    '@bbc/psammead-amp-geo': '^1.1.2',
    '@bbc/psammead-assets': '^2.5.1',
    '@bbc/psammead-caption': '^2.2.9',
    '@bbc/psammead-figure': '^1.2.5',
  },
  devDependencies: {
    '@babel/core': '^7.6.0',
    '@babel/polyfill': '^7.6.0',
    '@bbc/apache2-license-checker': '^1.1.4',
    '@bbc/psammead-storybook-helpers': '^6.2.1',
  },
};

describe('updatePackageJson', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    commitRemoteChanges.mockImplementation(async () => {});
  });

  it('should try to update packageJson', async () => {
    await updatePackageJson(packageJson, publishedPackages, 'test-branch');

    expect(commitRemoteChanges).toHaveBeenCalledTimes(1);
    expect(commitRemoteChanges).toHaveBeenCalledWith({
      repoName: 'simorgh',
      branchName: 'test-branch',
      path: 'package.json',
      content: JSON.stringify(expectedPackageJson, null, 2),
      message: 'Talos - Update package.json',
    });
  });
});
