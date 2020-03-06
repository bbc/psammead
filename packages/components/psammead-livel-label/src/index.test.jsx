import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import LiveLabel from './index';

describe('LiveLabel', () => {
  shouldMatchSnapshot(
    'should render correctly with aria-hidden',
    <LiveLabel service="news" ariaHidden>
      LIVE
    </LiveLabel>,
  );

  shouldMatchSnapshot(
    'should render correctly without aria-hidden',
    <LiveLabel service="news">LIVE</LiveLabel>,
  );

  shouldMatchSnapshot(
    'should render a RTL label correctly',
    <LiveLabel service="news" dir="rtl" ariaHidden>
      LIVE
    </LiveLabel>,
  );
});
