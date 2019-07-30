import { testUtilityPackages } from '@bbc/psammead-test-helpers';

const ampBoilerplateExpectedExports = {
  AMP_SCRIPT: 'string',
  AMP_NO_SCRIPT: 'string',
};

const svgsExpectedExports = {
  BBC_BLOCKS: 'string',
  arabic: 'object',
  igbo: 'object',
  news: 'object',
  pashto: 'object',
  pidgin: 'object',
  persian: 'object',
  thai: 'object',
  urdu: 'object',
  yoruba: 'object',
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
