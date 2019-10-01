const getUpdates = require('./index');

const packageJson = {
  dependencies: {
    '@bbc/gel-foundations': '^3.4.0',
    '@bbc/moment-timezone-include': '^1.1.2',
    '@bbc/psammead-amp-geo': '^1.1.2',
    '@bbc/psammead-assets': '^2.4.0',
    '@bbc/psammead-caption': '^2.2.9',
    '@bbc/psammead-figure': '^1.2.5',
  },
  devDependencies: {
    '@babel/core': '^7.6.0',
    '@babel/polyfill': '^7.6.0',
    '@bbc/apache2-license-checker': '^1.1.4',
    '@bbc/psammead-storybook-helpers': '^6.0.1',
  },
};

const updatedDependencies = {
  '@bbc/gel-foundations': '^3.5.2',
  '@bbc/moment-timezone-include': '^1.1.2',
  '@bbc/psammead-amp-geo': '^1.1.2',
  '@bbc/psammead-assets': '^2.5.1',
  '@bbc/psammead-caption': '^2.3.2',
  '@bbc/psammead-figure': '^1.2.5',
}

const updatedDevDependencies = {
  '@babel/core': '^7.6.0',
  '@babel/polyfill': '^7.6.0',
  '@bbc/apache2-license-checker': '^1.1.4',
  '@bbc/psammead-storybook-helpers': '^6.0.1',
};

const publishedPackages = {
  '@bbc/gel-foundations': '^3.5.2',
  '@bbc/psammead-assets': '^2.5.1',
  '@bbc/psammead-caption': '^2.3.2',
};

describe('getUpdates', () => {
  it('should update dependencies', () => {
    const updates = getUpdates(packageJson.dependencies, publishedPackages);
  });
});
