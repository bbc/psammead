const { exec } = require('shelljs');
const upgradeDependencies = require('.');
const parseUpgradedPackages = require('./parseUpgradedPackages');

jest.mock('shelljs', () => ({
  exec: jest.fn(),
}));

describe('upgradeDependencies', () => {
  it('should run command to update all packages that are dependent on passed in packages', () => {
    upgradeDependencies(['@bbc/psammead-brand', '@bbc/psammead-image']);
    const [[command]] = exec.mock.calls;

    expect(command).toEqual(
      'npx lerna exec --parallel --no-bail -- npx npm-check-updates @bbc/psammead-brand, @bbc/psammead-image -u -a --jsonUpgraded',
    );
  });
});

describe('parseUpgradedPackages', () => {
  const mockShellJsOutput = `
@bbc/psammead-locales: {}
@bbc/psammead-section-label: {}
@bbc/psammead-timestamp-container: {}
@bbc/psammead-paragraph: {}
@bbc/psammead-figure: {
@bbc/psammead-figure:   "@bbc/psammead-image": "^1.1.0",
@bbc/psammead-figure:   "@bbc/psammead-image-placeholder": "^1.1.0"
@bbc/psammead-figure: }
@bbc/psammead-story-promo: {
@bbc/psammead-story-promo:   "@bbc/psammead-image": "^1.1.0"
@bbc/psammead-story-promo: }
@bbc/psammead-headings: {}
@bbc/psammead-copyright: {}
@bbc/psammead-brand: {}
@bbc/psammead-assets: {}
@bbc/psammead-image-placeholder: {}
@bbc/psammead-inline-link: {}
@bbc/psammead-consent-banner: {}
@bbc/psammead-navigation: {
@bbc/psammead-navigation:   "@bbc/psammead-brand": "^4.2.0"
@bbc/psammead-navigation: }
@bbc/psammead-visually-hidden-text: {}
@bbc/psammead-caption: {}
@bbc/psammead-media-indicator: {}
@bbc/psammead-timestamp: {}
@bbc/psammead-styles: {}
@bbc/gel-foundations: {}
@bbc/psammead-sitewide-links: {}
@bbc/psammead-image: {}
@bbc/psammead-test-helpers: {}
@bbc/psammead-storybook-helpers: {}
@bbc/psammead-story-promo-list: {
@bbc/psammead-story-promo-list:   "@bbc/psammead-image": "^1.1.0",
@bbc/psammead-story-promo-list:   "@bbc/psammead-story-promo": "^2.1.0"
@bbc/psammead-story-promo-list: }
@bbc/psammead-locales: {}
@bbc/psammead-section-label: {}
@bbc/psammead-timestamp-container: {}
@bbc/psammead-paragraph: {}
@bbc/psammead-figure: {
@bbc/psammead-figure:   "@bbc/psammead-image": "^1.1.0",
@bbc/psammead-figure:   "@bbc/psammead-image-placeholder": "^1.1.0"
@bbc/psammead-figure: }
@bbc/psammead-story-promo: {
@bbc/psammead-story-promo:   "@bbc/psammead-image": "^1.1.0"
@bbc/psammead-story-promo: }
@bbc/psammead-headings: {}
@bbc/psammead-copyright: {}
@bbc/psammead-brand: {}
@bbc/psammead-assets: {}
@bbc/psammead-image-placeholder: {}
@bbc/psammead-inline-link: {}
@bbc/psammead-consent-banner: {}
@bbc/psammead-navigation: {
@bbc/psammead-navigation:   "@bbc/psammead-brand": "^4.2.0"
@bbc/psammead-navigation: }
@bbc/psammead-visually-hidden-text: {}
@bbc/psammead-caption: {}
@bbc/psammead-media-indicator: {}
@bbc/psammead-timestamp: {}
@bbc/psammead-styles: {}
@bbc/gel-foundations: {}
@bbc/psammead-sitewide-links: {}
@bbc/psammead-image: {}
@bbc/psammead-test-helpers: {}
@bbc/psammead-storybook-helpers: {}
@bbc/psammead-story-promo-list: {
@bbc/psammead-story-promo-list:   "@bbc/psammead-image": "^1.1.0",
@bbc/psammead-story-promo-list:   "@bbc/psammead-story-promo": "^2.1.0"
@bbc/psammead-story-promo-list: }`;

  it('should parse upgraded packages', () => {
    expect(parseUpgradedPackages(mockShellJsOutput)).toEqual([
      '@bbc/psammead-figure',
      '@bbc/psammead-story-promo',
      '@bbc/psammead-navigation',
      '@bbc/psammead-story-promo-list',
    ]);

    expect(
      parseUpgradedPackages(`
@bbc/psammead-image-placeholder: {}
@bbc/psammead-inline-link: {}
@bbc/psammead-consent-banner: {}
@bbc/psammead-navigation: {
@bbc/psammead-navigation:   "@bbc/psammead-brand": "^4.2.0"
@bbc/psammead-navigation: }
@bbc/psammead-visually-hidden-text: {}
@bbc/psammead-caption: {}
@bbc/psammead-media-indicator: {}`),
    ).toEqual(['@bbc/psammead-navigation']);
  });
});
