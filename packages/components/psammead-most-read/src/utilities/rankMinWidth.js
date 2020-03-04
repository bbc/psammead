import {
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
  GEL_SPACING_QUIN,
  GEL_SPACING_SEXT,
} from '@bbc/gel-foundations/spacings';

// Services with fonts that have glyphs thinner than the majority of other fonts.
// This was mainly based on the old overrides (ie. Any group0 value < 2rem).
export const thinFontServices = [
  'arabic',
  'bengali',
  'korean',
  'pashto',
  'persian',
  'marathi',
  'tamil',
  'telegu',
  'thai',
  'ukchina',
  'urdu',
  'zhongwen',
];

// If numberOfItems < 10, no extra spacing needs to be accounted for.
export const singleDigitDefault = {
  group0: GEL_SPACING_TRPL,
  group1: GEL_SPACING_TRPL,
  group2: GEL_SPACING_TRPL,
  group3: GEL_SPACING_QUAD,
  group5: GEL_SPACING_QUAD,
};

// If numberOfItems >= 10, extra spacing needs to be accounted for.
export const doubleDigitDefault = {
  group3: GEL_SPACING_QUAD,
  group5: GEL_SPACING_QUAD,
  // These values are used to align the rank when a double digit exists in the column
  group0_1_column: GEL_SPACING_QUIN,
  group1_1_column: GEL_SPACING_QUIN,
  group2_1_column: GEL_SPACING_SEXT,
  group3_2_column: '4rem',
  group5_5_column: '4rem',
};

export const singleDigitThin = {
  group0: GEL_SPACING_DBL,
  group1: GEL_SPACING_DBL,
  group2: GEL_SPACING_DBL,
  group3: GEL_SPACING_TRPL,
  group5: GEL_SPACING_TRPL,
};

export const doubleDigitThin = {
  group3: GEL_SPACING_TRPL,
  group5: GEL_SPACING_TRPL,
  // These values are used to align the rank when a double digit exists in the column
  group0_1_column: GEL_SPACING_QUAD,
  group1_1_column: GEL_SPACING_QUIN,
  group2_1_column: GEL_SPACING_QUIN,
  group3_2_column: GEL_SPACING_SEXT,
  group5_5_column: GEL_SPACING_SEXT,
};
