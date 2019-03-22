import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as textVariants from './text-variants';
import * as inputProvider from './input-provider';
import * as textVariantsFromSrc from './src/text-variants';
import * as inputProviderFromSrc from './src/input-provider';

const textVariantsExpectedExports = {
  LANGUAGE_VARIANTS: 'object',
};

const inputProviderExpectedExports = {
  inputProvider: 'function',
};

const expectedExports = {
  textVariants: textVariantsExpectedExports,
  inputProvider: inputProviderExpectedExports,
};

const actualExports = {
  textVariants,
  inputProvider,
};

const actualExportsFromSrc = {
  textVariants: textVariantsFromSrc,
  inputProvider: inputProviderFromSrc,
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
