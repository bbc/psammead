import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Amp from '.';

describe('Media Player: Amp', () => {
  shouldMatchSnapshot(
    'should render an amp-iframe with an amp-img nested inside',
    <Amp
      placeholderSrc="https://foo.bar/placeholder.png"
      placeholderSrcset="https://bbc.com/300/cat.jpg 300w, https://bbc.com/450/cat.jpg 450w, https://bbc.com/600/cat.jpg 600w"
      src="https://foo.bar/iframe"
      title="Media player"
    />,
  );
});
