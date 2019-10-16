import React from 'react';
import { storiesOf } from '@storybook/react';
import { CanonicalMediaPlayer, AmpMediaPlayer } from '.';
import { ampDecorator } from '../../../../.storybook/config';

const withDuration = {
  duration: '2:30',
  durationSpoken: '2 minutes 30 seconds',
  datetime: 'PT2M30S',
};

storiesOf('Components|Media Player', module).add('Default', () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
    placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    service="news"
    mediaInfo={{ title: 'Dog chases cat.', ...withDuration }}
  />
));

storiesOf('Components|Media Player', module).add('Audio', () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
    placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    service="news"
    mediaInfo={{ type: 'audio', title: 'Dog barks at cat.', ...withDuration }}
  />
));

storiesOf('Components|Media Player', module)
  .addDecorator(ampDecorator)
  .add('AMP', () => (
    <AmpMediaPlayer
      isAmp
      src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en/amp"
      placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    />
  ));

storiesOf('Components|Media Player', module).add('Audio Skin', () => (
  <CanonicalMediaPlayer
    src="https://www.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko"
    showPlaceholder={false}
    skin="audio"
    service="news"
  />
));

storiesOf('Components|Media Player', module)
  .addDecorator(ampDecorator)
  .add('Audio Skin AMP', () => (
    <AmpMediaPlayer
      isAmp
      src="https://www.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko/amp"
      placeholderSrc="https://news.files.bbci.co.uk/include/articles/public/images/audio-player-placeholder.png"
      skin="audio"
    />
  ));
