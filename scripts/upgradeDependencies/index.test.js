const { exec } = require('shelljs');
const upgradeDependencies = require('.');
const parseUpgradedPackages = require('./parseUpgradedPackages');

jest.mock('shelljs', () => ({
  exec: jest.fn(),
}));

describe('upgradeDependencies', () => {
  it('should run command to update all packages that are dependent on passed in packages', () => {
    upgradeDependencies(['@bbc/psammead-brand', '@bbc/psammead-image']);
    const [[firstCommand], [secondCommand]] = exec.mock.calls;
    expect(firstCommand).toEqual(
      'npx npm-check-updates @bbc/psammead-brand, @bbc/psammead-image --packageFile package.json -u',
    );
    expect(secondCommand).toEqual(
      'npx lerna exec --parallel --no-bail -- npx npm-check-updates @bbc/psammead-brand, @bbc/psammead-image -u',
    );
  });
});

describe('parseUpgradedPackages', () => {
  const mockShellJsOutput = `
@bbc/psammead-locales: No dependencies
@bbc/psammead-section-label: No dependencies
@bbc/psammead-timestamp-container: No dependencies
@bbc/psammead-paragraph: No dependencies
@bbc/psammead-figure:   @bbc/psammead-image  ^1.1.0  →  ^1.3.0
@bbc/psammead-figure:   @bbc/psammead-image-placeholder  ^1.1.0  →  ^1.2.1
@bbc/psammead-figure:
@bbc/psammead-story-promo:   @bbc/psammead-image  ^1.1.0  →  ^1.3.0
@bbc/psammead-headings: No dependencies
@bbc/psammead-copyright: No dependencies
@bbc/psammead-brand: No dependencies
@bbc/psammead-assets: No dependencies
@bbc/psammead-image-placeholder: No dependencies
@bbc/psammead-inline-link: No dependencies
@bbc/psammead-consent-banner: No dependencies
@bbc/psammead-navigation:   @bbc/psammead-brand  ^4.1.0  →  ^4.2.0
@bbc/psammead-visually-hidden-text: No dependencies
@bbc/psammead-caption: No dependencies
@bbc/psammead-media-indicator: No dependencies
@bbc/psammead-timestamp: No dependencies
@bbc/psammead-styles: No dependencies
@bbc/gel-foundations: No dependencies
@bbc/psammead-sitewide-links: No dependencies
@bbc/psammead-image: No dependencies
@bbc/psammead-test-helpers: No dependencies
@bbc/psammead-storybook-helpers: No dependencies
@bbc/psammead-story-promo-list:   @bbc/psammead-image  ^1.1.0  →  ^1.3.0
@bbc/psammead-story-promo-list:   @bbc/psammead-story-promo ^1.5.0  →  ^2.1.0
@bbc/psammead-locales: No dependencies
@bbc/psammead-section-label: No dependencies
@bbc/psammead-timestamp-container: No dependencies
@bbc/psammead-paragraph: No dependencies
@bbc/psammead-figure:   @bbc/psammead-image  ^1.1.0  →  ^1.3.0
@bbc/psammead-figure:   @bbc/psammead-image-placeholder  ^1.1.0  →  ^1.2.1
@bbc/psammead-story-promo:   @bbc/psammead-image  ^1.1.0  →  ^1.3.0
@bbc/psammead-headings: No dependencies
@bbc/psammead-copyright: No dependencies
@bbc/psammead-brand: No dependencies
@bbc/psammead-assets: No dependencies
@bbc/psammead-image-placeholder: No dependencies
@bbc/psammead-inline-link: No dependencies
@bbc/psammead-consent-banner: No dependencies
@bbc/psammead-navigation:   @bbc/psammead-brand  ^4.1.0  →  ^4.2.0
@bbc/psammead-visually-hidden-text: No dependencies
@bbc/psammead-caption: No dependencies
@bbc/psammead-media-indicator: No dependencies
@bbc/psammead-timestamp: No dependencies
@bbc/psammead-styles: No dependencies
@bbc/gel-foundations: No dependencies
@bbc/psammead-sitewide-links: No dependencies
@bbc/psammead-image: No dependencies
@bbc/psammead-test-helpers: No dependencies
@bbc/psammead-storybook-helpers: No dependencies
@bbc/psammead-story-promo-list:   @bbc/psammead-image  ^1.1.0  →  ^1.3.0
@bbc/psammead-story-promo-list:   @bbc/psammead-story-promo ^1.5.0  →  ^2.1.0`;

  it('should parse upgraded packages', () => {
    expect(parseUpgradedPackages(mockShellJsOutput)).toEqual({
      '@bbc/psammead-figure': [
        '@bbc/psammead-image  ^1.1.0  →  ^1.3.0',
        '@bbc/psammead-image-placeholder  ^1.1.0  →  ^1.2.1',
      ],
      '@bbc/psammead-story-promo': ['@bbc/psammead-image  ^1.1.0  →  ^1.3.0'],
      '@bbc/psammead-navigation': ['@bbc/psammead-brand  ^4.1.0  →  ^4.2.0'],
      '@bbc/psammead-story-promo-list': [
        '@bbc/psammead-image  ^1.1.0  →  ^1.3.0',
        '@bbc/psammead-story-promo ^1.5.0  →  ^2.1.0',
      ],
    });

    expect(
      parseUpgradedPackages(`
@bbc/psammead-image-placeholder: No dependencies
@bbc/psammead-inline-link: No dependencies
@bbc/psammead-consent-banner: No dependencies
@bbc/psammead-navigation:   @bbc/psammead-brand  ^4.1.0  →  ^4.2.0
@bbc/psammead-visually-hidden-text: No dependencies
@bbc/psammead-caption: No dependencies
@bbc/psammead-media-indicator: No dependencies`),
    ).toEqual({
      '@bbc/psammead-navigation': ['@bbc/psammead-brand  ^4.1.0  →  ^4.2.0'],
    });
  });
});
