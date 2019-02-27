import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as spacings from './spacings';
import * as breakpoints from './breakpoints';
import * as typography from './typography';
import * as spacingsFromSrc from './src/spacings';
import * as breakpointsFromSrc from './src/breakpoints';
import * as typographyFromSrc from './src/typography';

const spacingsExpectedExports = {
  GEL_SPACING: 'string',
  GEL_SPACING_DBL: 'string',
  GEL_SPACING_TRPL: 'string',
  GEL_SPACING_HLF: 'string',
  GEL_SPACING_QUAD: 'string',
  GEL_MARGIN_BELOW_400PX: 'string',
  GEL_GUTTER_BELOW_600PX: 'string',
  GEL_MARGIN_ABOVE_400PX: 'string',
  GEL_GUTTER_ABOVE_600PX: 'string',
};

const breakpointsExpectedExports = {
  GEL_GROUP_B_MIN_WIDTH: 'number',
  GEL_GROUP_B_MAX_WIDTH: 'number',
  GEL_GROUP_CD_MIN_WIDTH: 'number',
  GEL_GROUP_0_SCREEN_WIDTH_MIN: 'string',
  GEL_GROUP_0_SCREEN_WIDTH_MAX: 'string',
  GEL_GROUP_1_SCREEN_WIDTH_MIN: 'string',
  GEL_GROUP_1_SCREEN_WIDTH_MAX: 'string',
  GEL_GROUP_2_SCREEN_WIDTH_MIN: 'string',
  GEL_GROUP_2_SCREEN_WIDTH_MAX: 'string',
  GEL_GROUP_3_SCREEN_WIDTH_MIN: 'string',
  GEL_GROUP_3_SCREEN_WIDTH_MAX: 'string',
  GEL_GROUP_4_SCREEN_WIDTH_MIN: 'string',
  GEL_GROUP_4_SCREEN_WIDTH_MAX: 'string',
  GEL_GROUP_5_SCREEN_WIDTH_MIN: 'string',
  MEDIA_QUERY_TYPOGRAPHY: 'object',
};

const typographyExpectedExports = {
  GEL_FF_SERIF: 'string',
  GEL_FF_SANS: 'string',
  GEL_FF_SANS_COND: 'string',
  GEL_ATLAS: 'string',
  GEL_ELEPHANT: 'string',
  GEL_IMPERIAL: 'string',
  GEL_ROYAL: 'string',
  GEL_FOOLSCAP: 'string',
  GEL_CANON: 'string',
  GEL_TRAFALGAR: 'string',
  GEL_PARAGON: 'string',
  GEL_DOUBLE_PICA: 'string',
  GEL_GREAT_PRIMER: 'string',
  GEL_BODY_COPY: 'string',
  GEL_PICA: 'string',
  GEL_LONG_PRIMER: 'string',
  GEL_BREVIER: 'string',
  GEL_MINION: 'string',
};

const expectedExports = {
  spacings: spacingsExpectedExports,
  breakpoints: breakpointsExpectedExports,
  typography: typographyExpectedExports,
};

const actualExports = {
  spacings,
  breakpoints,
  typography,
};

const actualExportsFromSrc = {
  spacings: spacingsFromSrc,
  breakpoints: breakpointsFromSrc,
  typography: typographyFromSrc,
};

describe('Gel constants', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(actualExports, expectedExports, 'gel-foundations');
  });

  it('should test all the utility exports exist and are the correct type when coming from src/', () => {
    testUtilityPackages(
      actualExportsFromSrc,
      expectedExports,
      'gel-foundations/src',
    );
  });
});
