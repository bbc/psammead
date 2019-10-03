const getPublishedPackages = require('./index');
const {
  BUMPED_PACKAGES,
  PUBLISHED_PACKAGES,
} = require('./mockPublishedPackages');

describe('getPublishedPackages', () => {
  it('should get published packages object', () => {
    const packages = getPublishedPackages({
      '@bbc/psammead-navigation': ['@bbc/psammead-brand  ^4.1.0  →  ^4.2.0'],
    });
    expect(packages).toEqual({ '@bbc/psammead-brand': '^4.2.0' });
  });

  it('should prevent dupes', () => {
    const packages = getPublishedPackages(BUMPED_PACKAGES);
    expect(packages).toEqual(PUBLISHED_PACKAGES);
  });
});
