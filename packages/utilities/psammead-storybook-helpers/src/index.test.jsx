import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as underTest from '.';

jest.mock('@storybook/addon-knobs');

jest.mock('@bbc/gel-foundations/scripts', () => ({
  latin: 'LATIN SCRIPT OBJECT',
  arabic: 'ARABIC SCRIPT OBJECT',
  cyrillic: 'CYRILLIC SCRIPT OBJECT',
}));

const textVariantsExpectedExports = {
  LANGUAGE_VARIANTS: 'object',
};

const expectedExports = {
  textVariants: textVariantsExpectedExports,
};

const actualExports = {
  textVariants: { LANGUAGE_VARIANTS: underTest.LANGUAGE_VARIANTS },
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
