import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as svgs from './svgs';
import * as svgsFromSrc from './src/svgs';
import * as ampBoilerplate from './amp-boilerplate';
import * as ampBoilerplateFromSrc from './src/amp-boilerplate';

/*
  If you are doing anything than extending these export lists it's likely to introduce a breaking change
*/

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

const actualExports = {
  svgs,
  ampBoilerplate,
};

const actualExportsFromSrc = {
  svgs: svgsFromSrc,
  ampBoilerplate: ampBoilerplateFromSrc,
};

describe('Psammead assets', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(actualExports, expectedExports, 'psammead-assets');
  });

  it('should test all the utility exports exist and are the correct type when coming from src/', () => {
    testUtilityPackages(
      actualExportsFromSrc,
      expectedExports,
      'psammead-assets',
    );
  });
});
