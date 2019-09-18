import { testUtilityPackages } from '@bbc/psammead-test-helpers';

const ampBoilerplateExpectedExports = {
  AMP_SCRIPT: 'string',
  AMP_NO_SCRIPT: 'string',
};

const svgsExpectedExports = {
  BBC_BLOCKS: 'string',
  mediaIcons: 'object',
  afaanoromoo: 'object',
  afrique: 'object',
  amharic: 'object',
  arabic: 'object',
  azeri: 'object',
  bengali: 'object',
  burmese: 'object',
  gahuza: 'object',
  gujarati: 'object',
  hausa: 'object',
  hindi: 'object',
  igbo: 'object',
  indonesia: 'object',
  japanese: 'object',
  korean: 'object',
  kyrgyz: 'object',
  marathi: 'object',
  mundo: 'object',
  nepali: 'object',
  news: 'object',
  pashto: 'object',
  persian: 'object',
  pidgin: 'object',
  portuguese: 'object',
  punjabi: 'object',
  russian: 'object',
  serbian: 'object',
  sinhala: 'object',
  somali: 'object',
  swahili: 'object',
  tamil: 'object',
  telugu: 'object',
  thai: 'object',
  tigrinya: 'object',
  turkce: 'object',
  urdu: 'object',
  ukchina: 'object',
  ukrainian: 'object',
  uzbek: 'object',
  vietnamese: 'object',
  yoruba: 'object',
  zhongwen: 'object',
};

const expectedExports = {
  svgs: svgsExpectedExports,
  'amp-boilerplate': ampBoilerplateExpectedExports,
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

describe('Psammead assets', () => {
  it('should test all the utility exports exist and are the correct type for main', () => {
    testUtilityPackages(getExports('main'), expectedExports, 'psammead-assets');
  });

  it('should test all the utility exports exist and are the correct type for module', () => {
    testUtilityPackages(
      getExports('module'),
      expectedExports,
      'psammead-assets',
    );
  });
});
