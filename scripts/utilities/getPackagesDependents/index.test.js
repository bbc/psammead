const getPackagesDependents = require('.');

jest.mock('./getAllPackagesDependencies', () => () => [
  {
    name: '@bbc/psammead-assets',
    dependencies: [
      '@bbc/psammead-test-helpers',
      'prop-types',
      'react',
      'styled-components',
      'react-dom',
    ],
  },
  {
    name: '@bbc/psammead-paragraph',
    dependencies: [
      '@bbc/gel-foundations',
      '@bbc/psammead-inline-link',
      '@bbc/psammead-storybook-helpers',
      '@bbc/psammead-styles',
      '@bbc/psammead-test-helpers',
      'react',
      'styled-components',
      'react-dom',
    ],
  },
  {
    name: '@bbc/psammead-navigation',
    dependencies: [
      '@bbc/gel-foundations',
      '@bbc/psammead-assets',
      '@bbc/psammead-brand',
      '@bbc/psammead-storybook-helpers',
      '@bbc/psammead-styles',
      '@bbc/psammead-test-helpers',
      '@bbc/psammead-visually-hidden-text',
      'react',
      'styled-components',
      'react-dom',
    ],
  },
  {
    name: '@bbc/psammead-figure',
    dependencies: [
      '@bbc/gel-foundations',
      '@bbc/psammead-caption',
      '@bbc/psammead-copyright',
      '@bbc/psammead-image',
      '@bbc/psammead-image-placeholder',
      '@bbc/psammead-paragraph',
      '@bbc/psammead-storybook-helpers',
      '@bbc/psammead-test-helpers',
      '@bbc/psammead-visually-hidden-text',
      'react',
      'styled-components',
      'react-dom',
    ],
  },
]);

describe('getPackagesDependents', () => {
  it('should return all packages that depend on passed in packages', async () => {
    const actual = await getPackagesDependents([
      '@bbc/psammead-brand',
      '@bbc/psammead-image',
    ]);
    const expected = ['@bbc/psammead-navigation', '@bbc/psammead-figure'];

    expect(actual).toEqual(expected);
  });
});
