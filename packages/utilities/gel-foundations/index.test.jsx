import { testUtilityPackages } from '@bbc/psammead-test-helpers';

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
  GEL_GROUP_A_MAX_WIDTH: 'number',
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

const propTypesExpectedExports = {
  scriptPropType: 'object',
};

const typographyExpectedExports = {
  GEL_FF_REITH_SERIF: 'string',
  GEL_FF_REITH_SANS: 'string',
  GEL_FF_REITH_SANS_COND: 'string',
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
  getCanon: 'function',
  getTrafalgar: 'function',
  getParagon: 'function',
  getDoublePica: 'function',
  getGreatPrimer: 'function',
  getBodyCopy: 'function',
  getPica: 'function',
  getLongPrimer: 'function',
  getBrevier: 'function',
  getMinion: 'function',
};

const scriptsExpectedExports = {
  latin: 'object',
  cyrillic: 'object',
  latinDiacritics: 'object',
  arabic: 'object',
  arabicPashto: 'object',
  bengali: 'object',
  burmese: 'object',
  hindi: 'object',
  nepali: 'object',
  sinhalese: 'object',
  tamil: 'object',
  thai: 'object',
  chinese: 'object',
  korean: 'object',
  ethiopic: 'object',
};

const expectedExports = {
  spacings: spacingsExpectedExports,
  breakpoints: breakpointsExpectedExports,
  'prop-types': propTypesExpectedExports,
  typography: typographyExpectedExports,
  scripts: scriptsExpectedExports,
};

const getExports = key => {
  const exports = {};
  Object.keys(expectedExports).forEach(expectedExport => {
    /* eslint-disable global-require, import/no-dynamic-require */
    const packageJson = require(`./${expectedExport}/package.json`);
    exports[
      expectedExport
    ] = require(`./${expectedExport}/${packageJson[key]}`);
    /* eslint-enable global-require, import/no-dynamic-require */
  });
  return exports;
};

describe('Gel constants', () => {
  it('should test all the utility exports exist and are the correct type for main', () => {
    testUtilityPackages(getExports('main'), expectedExports, 'gel-foundations');
  });

  it('should test all the utility exports exist and are the correct type for module', () => {
    testUtilityPackages(
      getExports('module'),
      expectedExports,
      'gel-foundations',
    );
  });
});
