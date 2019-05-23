import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { getCanon } from '@bbc/gel-foundations/typography';
import TypographyText from './typography';

describe('TypographyText', () => {
  shouldMatchSnapshot(
    'should render paragraph text with specified script and typography',
    <TypographyText script={latin} typographyFunc={getCanon}>
      Some text.
    </TypographyText>,
  );

  shouldMatchSnapshot(
    'should render paragraph text with no styling if script and typography function are not provided',
    <TypographyText>Some text.</TypographyText>,
  );
});
