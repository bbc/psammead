import { toTitleCase, detokenise } from './index';

describe('toTitleCase', () => {
  it('transforms the given text to title case', () => {
    expect(toTitleCase('twitter')).toEqual('Twitter');
  });
});

describe('detokenise', () => {
  it('detokenises a string using a dictionary', () => {
    expect(
      detokenise('View content on %provider%', { '%provider%': 'Twitter' }),
    ).toEqual('View content on Twitter');
  });
});
