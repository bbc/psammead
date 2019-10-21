import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Amp from '.';

describe('Media Player: Amp', () => {
  shouldMatchSnapshot(
    'should render an amp-iframe with an amp-img nested inside',
    <Amp
      placeholderSrc="https://foo.bar/placeholder.png"
      src="https://foo.bar/iframe"
      title="Media player"
    />,
  );
});
