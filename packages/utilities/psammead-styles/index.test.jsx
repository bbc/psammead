import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as colours from './colours';
import * as coloursFromSrc from './src/colours';
import * as fonts from './fonts';
import * as fontsFromSrc from './src/fonts';

const fontsExpectedExports = {
  fontFamilyBase: 'string',
  FF_NEWS_SANS_LIT: 'string',
  FF_NEWS_SANS_REG: 'string',
  FF_NEWS_SANS_MDM: 'string',
  FF_NEWS_SANS_BLD: 'string',
  FF_NEWS_SERIF_LIT: 'string',
  FF_NEWS_SERIF_REG: 'string',
  FF_NEWS_SERIF_MDM: 'string',
  FF_NEWS_SERIF_BLD: 'string',
};

const coloursExpectedExports = {
  C_EBON: 'string',
  C_POSTBOX: 'string',
  C_STORM: 'string',
  C_WHITE: 'string',
  C_BLUEJAY: 'string',
  C_BLUEJAY_LHT: 'string',
  C_OAT_LHT: 'string',
  C_PEBBLE: 'string',
  C_RHINO: 'string',
  C_STONE: 'string',
  C_CHALK: 'string',
  C_ORBIT_GREY: 'string',
};

const expectedExports = {
  colours: coloursExpectedExports,
  fonts: fontsExpectedExports,
};

const actualExports = {
  colours,
  fonts,
};

const actualExportsFromSrc = {
  colours: coloursFromSrc,
  fonts: fontsFromSrc,
};

describe('Psammead styles', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(actualExports, expectedExports, 'psammead-styles');
  });

  it('should test all the utility exports exist and are the correct type when coming from src/', () => {
    testUtilityPackages(
      actualExportsFromSrc,
      expectedExports,
      'psammead-styles',
    );
  });
});
