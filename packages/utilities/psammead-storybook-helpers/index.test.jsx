import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as testVariants from './text-variants';
import * as testVariantsFromSrc from './src/text-variants';

const textVariantsExpectedExports = {
  LANGUAGE_VARIANTS: 'object',
};

const expectedExports = {
  textVariants: textVariantsExpectedExports,
};

const actualExports = {
  testVariants,
};

const actualExportsFromSrc = {
  testVariants: testVariantsFromSrc,
};

describe('Psammead storybook helpers', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(
      actualExports,
      expectedExports,
      'psammead-storybook-helpers',
    );
  });

  it('should test all the utility exports exist and are the correct type when coming from src/', () => {
    testUtilityPackages(
      actualExportsFromSrc,
      expectedExports,
      'psammead-storybook-helpers',
    );
  });
});
