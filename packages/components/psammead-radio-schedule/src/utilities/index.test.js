import detokenise from '@bbc/psammead-detokeniser';
import durationDictionary from '.';

describe('durationDictionary', () => {
  it('creates a valid duration dictionary', () => {
    expect(durationDictionary('PT1H30M', 'en-gb')).toEqual({
      '%duration%': '1:30:00',
    });
  });
  it('creates a valid duration dictionary and detokenises token', () => {
    expect(
      detokenise(
        'Duration: %duration%',
        durationDictionary('PT1H30M', 'en-gb'),
      ),
    ).toEqual('Duration: 1:30:00');
  });
});
