import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Timestamp from '.';

describe('Timestamp', () => {
  shouldMatchSnapshot(
    'should render Timestamp with datetime attribute and text',
    <Timestamp datetime="1530947227000">7 July 2018</Timestamp>,
  );

  shouldMatchSnapshot(
    'should render Timestamp with a prefix',
    <Timestamp datetime="1530947227000">Updated 7 July 2018</Timestamp>,
  );
});
