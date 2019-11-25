import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Guidance from '.';

describe('Media Player: Guidance', () => {
  shouldMatchSnapshot(
    'should render Guidance',
    <Guidance
      guidanceMessage="Guidance: Contains strong language with adult humor"
      service="news"
      type="video"
    />,
  );

  shouldMatchSnapshot(
    'should render no-js styles when noJsClassName prop is used',
    <Guidance
      guidanceMessage="Guidance: Contains strong language with adult humor"
      service="news"
      type="video"
    />,
  );
});
