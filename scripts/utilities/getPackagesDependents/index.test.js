const getPackagesDependents = require('.');
const parsePackageDependencies = require('./parsePackageDependencies');

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

  it("should transform exec string output of multiple package's dependencies into an array of each package's dependencies", () => {
    const mockExecOutput = `
{
  "name": "@bbc/psammead-mock-package2",
  "version": "1.1.0",
  "dependencies": {
    "@bbc/gel-foundations": {},
    "@bbc/psammead-storybook-helpers": {},
    "@bbc/psammead-styles": {},
    "@bbc/psammead-test-helpers": {},
    "prop-types": {},
    "react": {},
    "styled-components": {},
    "react-dom": {}
  }
}
{
  "name": "@bbc/psammead-mock-package1",
  "version": "2.1.0",
  "dependencies": {
    "@bbc/gel-foundations": {},
    "@bbc/psammead-storybook-helpers": {},
    "@bbc/psammead-styles": {},
    "@bbc/psammead-test-helpers": {},
    "prop-types": {},
    "react": {},
    "styled-components": {},
    "react-dom": {}
  }
}
`;
    const actual = parsePackageDependencies(mockExecOutput);
    const expected = [
      {
        name: '@bbc/psammead-mock-package2',
        dependencies: [
          '@bbc/gel-foundations',
          '@bbc/psammead-storybook-helpers',
          '@bbc/psammead-styles',
          '@bbc/psammead-test-helpers',
          'prop-types',
          'react',
          'styled-components',
          'react-dom',
        ],
      },
      {
        name: '@bbc/psammead-mock-package1',
        dependencies: [
          '@bbc/gel-foundations',
          '@bbc/psammead-storybook-helpers',
          '@bbc/psammead-styles',
          '@bbc/psammead-test-helpers',
          'prop-types',
          'react',
          'styled-components',
          'react-dom',
        ],
      },
    ];

    expect(actual).toEqual(expected);
  });
});
