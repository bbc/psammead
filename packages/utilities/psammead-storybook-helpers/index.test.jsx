import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as index from './dist/index';

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
  textVariants: { LANGUAGE_VARIANTS: index.LANGUAGE_VARIANTS },
  inputProvider: { inputProvider: index.inputProvider },
};

describe('Psammead storybook helpers', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(
      actualExports,
      expectedExports,
      'psammead-storybook-helpers',
    );
  });
});
