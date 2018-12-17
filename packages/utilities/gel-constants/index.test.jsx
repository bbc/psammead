import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as spacings from './spacings';
import * as breakpoints from './breakpoints';
import * as spacingsFromSrc from './src/spacings';
import * as breakpointsFromSrc from './src/breakpoints';

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

const expectedExports = {
  spacings: spacingsExpectedExports,
  breakpoints: breakpointsExpectedExports,
};

const acutalExports = {
  spacings,
  breakpoints,
};

const acutalExportsFromSrc = {
  spacings: spacingsFromSrc,
  breakpoints: breakpointsFromSrc,
};

it('should test all the utility exports exist and have are the correct type', () => {
  testUtilityPackages(acutalExports, expectedExports, 'gel-constants');
});

it('should test all the utility exports exist and have are the correct type when coming from src/', () => {
  testUtilityPackages(
    acutalExportsFromSrc,
    expectedExports,
    'gel-constants/src',
  );
});
