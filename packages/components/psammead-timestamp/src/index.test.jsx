import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { getPica } from '@bbc/gel-foundations/typography';
import Timestamp from '.';

const typographyStyle = getPica(latin);

describe('Timestamp', () => {
  shouldMatchSnapshot(
    'should render Timestamp with datetime attribute and text',
    <Timestamp datetime="1530947227000" typographyStyle={typographyStyle}>
      7 July 2018
    </Timestamp>,
  );

  shouldMatchSnapshot(
    'should render Timestamp with a prefix',
    <Timestamp datetime="1530947227000" typographyStyle={typographyStyle}>
      Updated 7 July 2018
    </Timestamp>,
  );
});
