import { toProviderName, detokenise, dictionaryFactory } from './index';

describe('toProviderName', () => {
  it('transforms the given provider correctly', () => {
    expect(toProviderName('unknown')).toEqual('Unknown');
    expect(toProviderName('youtube')).toEqual('YouTube');
    expect(toProviderName('foo bar')).toEqual('Foo Bar');
    expect(toProviderName('')).toEqual('');
  });

  it('throws given invalid arguments', () => {
    expect(() => toProviderName()).toThrow();
    expect(() => toProviderName(9001)).toThrow();
  });
});

describe('detokenise', () => {
  it('detokenises the given text correctly', () => {
    expect(detokenise('Foo %bar%', { '%bar%': 'Bar' })).toEqual('Foo Bar');
    expect(detokenise('Foo %bar%', {})).toEqual('Foo %bar%');
  });

  it('throws given invalid arguments', () => {
    expect(() => detokenise()).toThrow();
    expect(() => detokenise('Foo')).toThrow();
  });
});

describe('dictionaryFactory', () => {
  it('creates a valid dictionary', () => {
    expect(dictionaryFactory({ provider: 'foo' })).toEqual({
      '%Provider%': 'Foo',
      '%provider%': 'foo',
    });
  });
});
