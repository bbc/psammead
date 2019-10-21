import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Amp from '.';

describe('Media Player: Amp', () => {
  shouldMatchSnapshot(
    'should render an amp-iframe with an amp-img nested inside',
    <Amp
      placeholderSrc="https://foo.bar/placeholder.png"
      placeholderSrcset="http://foobar.com/images/ic/512xn/p01k6mtv.jpg"
      src="https://foo.bar/iframe"
      title="Media player"
    />,
  );
});
