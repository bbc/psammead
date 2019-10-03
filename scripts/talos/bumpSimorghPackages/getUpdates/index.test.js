const getUpdates = require('./index');
const packageJson = require('../mockPackageJson');

const updatedDependencies = [
  '@bbc/gel-foundations  ^3.4.0  →  ^3.5.2',
  '@bbc/psammead-assets  ^2.4.0  →  ^2.5.1',
  '@bbc/psammead-caption  ^2.2.9  →  ^2.3.2',
];

const updatedDevDependencies = [
  '@bbc/psammead-storybook-helpers  ^6.0.1  →  ^6.2.1',
];

const publishedPackages = {
  '@bbc/gel-foundations': '^3.5.2',
  '@bbc/psammead-assets': '^2.5.1',
  '@bbc/psammead-caption': '^2.3.2',
  '@bbc/psammead-storybook-helpers': '^6.2.1',
};

describe('getUpdates', () => {
  it('should update dependencies', () => {
    const updates = getUpdates(packageJson.dependencies, publishedPackages);
    expect(updates).toEqual(updatedDependencies);
  });

  it('should update dev dependencies', () => {
    const updates = getUpdates(packageJson.devDependencies, publishedPackages);
    expect(updates).toEqual(updatedDevDependencies);
  });
});
