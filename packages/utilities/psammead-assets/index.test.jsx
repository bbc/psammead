import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as svgs from './svgs';
import * as svgsFromSrc from './src/svgs';
import * as ampBoilerplate from './amp-boilerplate';
import * as ampBoilerplateFromSrc from './src/amp-boilerplate';

const ampBoilerplateExpectedExports = {
  AMP_SCRIPT: 'string',
  AMP_NO_SCRIPT: 'string',
};

const svgsExpectedExports = {
  BBC_BLOCKS: 'string',
};

const expectedExports = {
  svgs: svgsExpectedExports,
  ampBoilerplate: ampBoilerplateExpectedExports,
};

const acutalExports = {
  svgs,
  ampBoilerplate,
};

const acutalExportsFromSrc = {
  svgs: svgsFromSrc,
  ampBoilerplate: ampBoilerplateFromSrc,
};

describe('Psammead assets', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(acutalExports, expectedExports, 'psammead-assets');
  });

  it('should test all the utility exports exist and are the correct type when coming from src/', () => {
    testUtilityPackages(
      acutalExportsFromSrc,
      expectedExports,
      'psammead-assets',
    );
  });
});
