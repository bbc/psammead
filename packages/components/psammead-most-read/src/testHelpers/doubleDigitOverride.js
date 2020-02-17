import {
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
  GEL_SPACING_QUIN,
  GEL_SPACING_SEXT,
  GEL_SPACING_SEPT,
} from '@bbc/gel-foundations/spacings';

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
  group1: GEL_SPACING_TRPL,
  group2: GEL_SPACING_QUAD,
  group3: GEL_SPACING_QUIN,
  group5: GEL_SPACING_QUAD,
};

export const doubleDigitDefault = {
  group0: GEL_SPACING_QUIN,
  group1: GEL_SPACING_QUIN,
  group2: GEL_SPACING_SEXT,
  group3: GEL_SPACING_QUIN,
  group5: '3.9rem',
  group0_column: GEL_SPACING_QUAD,
  group1_column: GEL_SPACING_QUIN,
  group2_column: GEL_SPACING_SEXT,
  group3_5_column: '4rem',
};

export const singleDigitThin = {
  group0: GEL_SPACING_DBL,
  group1: GEL_SPACING_TRPL,
  group2: GEL_SPACING_TRPL,
  group3: GEL_SPACING_QUAD,
  group5: GEL_SPACING_QUAD,
};

export const doubleDigitThin = {
  group0: GEL_SPACING_DBL,
  group1: GEL_SPACING_TRPL,
  group2: GEL_SPACING_TRPL,
  group3: GEL_SPACING_TRPL,
  group5: GEL_SPACING_QUIN,
  group0_column: GEL_SPACING_QUAD,
  group1_column: GEL_SPACING_QUIN,
  group2_column: GEL_SPACING_SEXT,
  group3_5_column: GEL_SPACING_SEPT,
};
