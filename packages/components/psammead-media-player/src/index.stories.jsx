import React from 'react';
import { storiesOf } from '@storybook/react';
import { CanonicalMediaPlayer, AmpMediaPlayer } from '.';
import { ampDecorator } from '../../../../.storybook/config';

storiesOf('Components|Media Player', module).add('default', () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.co.uk/ws/av-embeds/c3wmq4d1y3wo/p01k6msp"
    placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
  />
));

storiesOf('Components|Media Player', module)
  .addDecorator(ampDecorator)
  .add('AMP', () => (
    <AmpMediaPlayer
      isAmp
      src="https://www.test.bbc.co.uk/ws/av-embeds/c3wmq4d1y3wo/p01k6msp"
      placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    />
  ));
