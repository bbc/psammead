import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import StartTime from './index';

describe('StartTime', () => {
  shouldMatchSnapshot(
    'should render LTR correctly',
    <StartTime
      script={latin}
      service="news"
      timestamp={1566914061212}
      timezone="Europe/London"
      locale="en-gb"
    />,
  );
});
