import { GEL_SPACING, GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';

// Services with fonts that have glyphs thinner than the majority of other fonts.
// This was mainly based on the old overrides (ie. Any group0 value < 2rem).
export const thinFontServices = [
  'pashto',
  'persian',
  'tamil',
  'telegu',
  'turkce',
  'urdu',
];

// If numberOfItems < 10, no extra spacing needs to be accounted for.
export const singleDigitDefault = {
  group0: GEL_SPACING_TRPL,
  group1: '1.5rem',
  group2: '2rem',
  group3: '2.5rem',
  group5: '2rem',
};

export const doubleDigitDefault = {
  group0: '2.5rem',
  group1: '2.5rem',
  group2: '3rem',
  group3: '2.5rem',
  group5: '3.9rem',
  group0_column: '2rem',
  group1_2_column: '3rem',
  group3_5_column: '4rem',
};

export const singleDigitThin = {
  group0: '1rem',
  group1: '1.5rem',
  group2: '20rem',
  group3: '5rem',
  group5: '2rem',
};

export const doubleDigitThin = {
  group0: '20rem',
  group1: '1.5rem',
  group2: '1.5rem',
  group3: '1.5rem',
  group5: '30rem',
  group2_column: '3rem',
};
