import { testUtilityPackages } from '@bbc/psammead-test-helpers';

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
  F_NASSIM_ARABIC_REGULAR: 'string',
  F_NASSIM_ARABIC_BOLD: 'string',
  F_NASSIM_PASHTO_REGULAR: 'string',
  F_NASSIM_PASHTO_BOLD: 'string',
  F_NASSIM_PERSIAN_REGULAR: 'string',
  F_NASSIM_PERSIAN_BOLD: 'string',
  F_NASSIM_URDU_REGULAR: 'string',
  F_NASSIM_URDU_BOLD: 'string',
  F_ISKOOLA_POTA_BBC_REGULAR: 'string',
  F_ISKOOLA_POTA_BBC_BOLD: 'string',
  F_LATHA_REGULAR: 'string',
  F_LATHA_BOLD: 'string',
  F_MALLANNA_REGULAR: 'string',
  F_NOTO_SANS_ETHIOPIC_REGULAR: 'string',
  F_NOTO_SANS_ETHIOPIC_BOLD: 'string',
  F_PADAUK_REGULAR: 'string',
  F_PADAUK_BOLD: 'string',
  F_SHONAR_BANGLA_REGULAR: 'string',
  F_SHONAR_BANGLA_BOLD: 'string',
};

const detectionExpectedExports = {
  grid: 'string',
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

describe('Psammead styles', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(getExports('main'), expectedExports, 'psammead-styles');
  });

  it('should test all the utility exports exist and are the correct type when coming from src/', () => {
    testUtilityPackages(
      getExports('module'),
      expectedExports,
      'psammead-styles',
    );
  });
});
