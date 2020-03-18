import { getProviderName, detokenise, dictionaryFactory } from './index';

describe('getProviderName', () => {
  it('transforms the given provider correctly', () => {
    expect(getProviderName('unknown')).toEqual(undefined);
    expect(getProviderName('youtube')).toEqual('YouTube');
    expect(getProviderName('')).toEqual(undefined);
  });

  it('throws given invalid arguments', () => {
    expect(() => getProviderName()).toThrow();
    expect(() => getProviderName(9001)).toThrow();
  });
});

describe('detokenise', () => {
  it('detokenises the given text correctly', () => {
    expect(detokenise('Foo %token%', { '%token%': 'Bar' })).toEqual('Foo Bar');
    expect(detokenise('Foo %token%', {})).toEqual('Foo %token%');
  });

  it('throws given invalid arguments', () => {
    expect(() => detokenise()).toThrow();
    expect(() => detokenise('Foo')).toThrow();
  });
});

describe('dictionaryFactory', () => {
  it('creates a valid dictionary', () => {
    expect(dictionaryFactory({ provider: 'youtube' })).toEqual({
      '%provider_name%': 'YouTube',
      '%provider%': 'youtube',
    });

    expect(dictionaryFactory({ provider: 'unknown' })).toEqual({
      '%provider_name%': 'unknown',
      '%provider%': 'unknown',
    });
  });
});
