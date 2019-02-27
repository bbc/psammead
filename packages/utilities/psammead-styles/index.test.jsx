import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as colours from './colours';
import * as coloursFromSrc from './src/colours';
import * as fonts from './fonts';
import * as fontsFromSrc from './src/fonts';

const fontsExpectedExports = {
  T_REITH_SERIF_REGULAR: 'string',
  T_REITH_SERIF_ITALIC: 'string',
  T_REITH_SERIF_BOLD: 'string',
  T_REITH_SERIF_BOLD_ITALIC: 'string',
  T_REITH_SERIF_LIGHT: 'string',
  T_REITH_SERIF_LIGHT_ITALIC: 'string',
  T_REITH_SERIF_MEDIUM: 'string',
  T_REITH_SERIF_MEDIUM_ITALIC: 'string',
  T_REITH_SERIF_EXTRA_BOLD: 'string',
  T_REITH_SERIF_EXTRA_BOLD_ITALIC: 'string',
  T_REITH_SANS_REGULAR: 'string',
  T_REITH_SANS_ITALIC: 'string',
  T_REITH_SANS_BOLD: 'string',
  T_REITH_SANS_BOLD_ITALIC: 'string',
  T_REITH_SANS_LIGHT: 'string',
  T_REITH_SANS_LIGHT_ITALIC: 'string',
  T_REITH_SANS_MEDIUM: 'string',
  T_REITH_SANS_MEDIUM_ITALIC: 'string',
  T_REITH_SANS_EXTRA_BOLD: 'string',
  T_REITH_SANS_EXTRA_BOLD_ITALIC: 'string',
  T_REITH_SANS_CONDENSED_REGULAR: 'string',
  T_REITH_SANS_CONDENSED_BOLD: 'string',
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
  C_SHADOW: 'string',
  C_CLOUD_DARK: 'string',
  C_CLOUD_LIGHT: 'string',
  C_LUNAR: 'string',
  C_GHOST: 'string',
  C_CONSENT_BACKGROUND: 'string',
  C_CONSENT_ACTION: 'string',
  C_CONSENT_CONTENT: 'string',
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
