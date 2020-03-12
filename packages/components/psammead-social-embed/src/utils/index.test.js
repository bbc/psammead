import isSupportedProvider from './index';

describe('isSupportedProvider', () => {
  const providers = { youtube: [] };

  it('returns true when passed a supported provider', () => {
    expect(isSupportedProvider('youtube', providers)).toBe(true);
  });

  it('returns false when passed an unsupported provider', () => {
    expect(isSupportedProvider('twitter', providers)).toBe(false);
  });

  it("throws an error when 'providers' is not an Object", () => {
    expect(() => isSupportedProvider('twitter', null)).toThrow();
  });
});
