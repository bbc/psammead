import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as colours from './colours';
import * as coloursFromSrc from './src/colours';
import * as detection from './detection';
import * as detectionFromSrc from './src/detection';
import * as fonts from './fonts';
import * as fontsFromSrc from './src/fonts';

const fontsExpectedExports = {
  F_REITH_SERIF_REGULAR: 'string',
  F_REITH_SERIF_ITALIC: 'string',
  F_REITH_SERIF_BOLD: 'string',
  F_REITH_SERIF_BOLD_ITALIC: 'string',
  F_REITH_SERIF_LIGHT: 'string',
  F_REITH_SERIF_LIGHT_ITALIC: 'string',
  F_REITH_SERIF_MEDIUM: 'string',
  F_REITH_SERIF_MEDIUM_ITALIC: 'string',
  F_REITH_SERIF_EXTRA_BOLD: 'string',
  F_REITH_SERIF_EXTRA_BOLD_ITALIC: 'string',
  F_REITH_SANS_REGULAR: 'string',
  F_REITH_SANS_ITALIC: 'string',
  F_REITH_SANS_BOLD: 'string',
  F_REITH_SANS_BOLD_ITALIC: 'string',
  F_REITH_SANS_LIGHT: 'string',
  F_REITH_SANS_LIGHT_ITALIC: 'string',
  F_REITH_SANS_MEDIUM: 'string',
  F_REITH_SANS_MEDIUM_ITALIC: 'string',
  F_REITH_SANS_EXTRA_BOLD: 'string',
  F_REITH_SANS_EXTRA_BOLD_ITALIC: 'string',
  F_REITH_SANS_CONDENSED_REGULAR: 'string',
  F_REITH_SANS_CONDENSED_BOLD: 'string',
  F_NASSIM_PERSIAN_REGULAR: 'string',
  F_NASSIM_PERSIAN_BOLD: 'string',
};

const detectionExpectedExports = {
  gridDetection: 'string',
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
  C_METAL: 'string',
  C_CONSENT_BACKGROUND: 'string',
  C_CONSENT_ACTION: 'string',
  C_CONSENT_CONTENT: 'string',
};

const expectedExports = {
  colours: coloursExpectedExports,
  detection: detectionExpectedExports,
  fonts: fontsExpectedExports,
};

const actualExports = {
  colours,
  detection,
  fonts,
};

const actualExportsFromSrc = {
  colours: coloursFromSrc,
  detection: detectionFromSrc,
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
