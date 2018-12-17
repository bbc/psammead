import { testUtilityPackages } from '@bbc/psammead-test-helpers';
import * as typography from './typography';
import * as typographyFromSrc from './src/typography';

const typographyExpectedExports = {
  GEL_ATLAS: 'object',
  GEL_ELEPHANT: 'object',
  GEL_IMPERIAL: 'object',
  GEL_ROYAL: 'object',
  GEL_FOOLSCAP: 'object',
  GEL_CANON: 'object',
  GEL_TRAFALGAR: 'object',
  GEL_PARAGON: 'object',
  GEL_DOUBLE_PICA: 'object',
  GEL_GREAT_PRIMER: 'object',
  GEL_BODY_COPY: 'object',
  GEL_PICA: 'object',
  GEL_LONG_PRIMER: 'object',
  GEL_BREVIER: 'object',
  GEL_MINION: 'object',
};

const expectedExports = {
  typography: typographyExpectedExports,
};

const acutalExports = {
  typography,
};

const acutalExportsFromSrc = {
  typography: typographyFromSrc,
};

describe('Gel foundations styled components', () => {
  it('should test all the utility exports exist and are the correct type', () => {
    testUtilityPackages(
      acutalExports,
      expectedExports,
      'gel-foundations-styled-components',
    );
  });

  it('should test all the utility exports exist and are the correct type when coming from src/', () => {
    testUtilityPackages(
      acutalExportsFromSrc,
      expectedExports,
      'gel-foundations-styled-components',
    );
  });
});
