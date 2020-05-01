import detokenise from '@bbc/psammead-detokeniser';
import durationDictionary from '.';

describe('durationDictionary', () => {
  it('creates a valid duration dictionary', () => {
    expect(
      durationDictionary({ duration: 'PT1H30M', locale: 'en-gb' }),
    ).toEqual({
      '%duration%': '1,30,00',
    });
  });
  it('creates a valid duration dictionary and maps token to key correctly', () => {
    expect(
      detokenise(
        'Duration %duration%',
        durationDictionary({ duration: 'PT1H30M', locale: 'en-gb' }),
      ),
    ).toEqual('Duration 1,30,00');
  });
  it('creates a valid duration dictionary and returns with specified duration format', () => {
    expect(
      detokenise(
        'Duration %duration%',
        durationDictionary({
          duration: 'PT1H30M',
          separator: ':',
          locale: 'en-gb',
        }),
      ),
    ).toEqual('Duration 1:30:00');
  });
  it('creates a valid duration dictionary but has an invalid string passed in for duration', () => {
    expect(
      detokenise(
        'Duration %duration%',
        durationDictionary({ duration: 'asf98fd0gji3', locale: 'en-gb' }),
      ),
    ).toEqual('Duration 00,00');
  });
  it('creates a valid duration dictionary but uses empty string as duration fallback', () => {
    expect(
      detokenise(
        'Duration %duration%',
        durationDictionary({ locale: 'en-gb' }),
      ),
    ).toEqual('Duration 00,00');
  });
});
