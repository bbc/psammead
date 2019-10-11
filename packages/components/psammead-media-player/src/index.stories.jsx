import React from 'react';
import { CanonicalMediaPlayer, AmpMediaPlayer } from '.';
import { ampDecorator } from '../../../../.storybook/config';

export default {
  title: 'Components|Media Player',
};

export const defaultStory = () => (
  <CanonicalMediaPlayer
    src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en"
    placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
  />
);

defaultStory.story = {
  name: 'default',
};

export default {
  title: 'Components|Media Player',
  decorators: [ampDecorator],
};

export const amp = () => (
    <AmpMediaPlayer
      isAmp
      src="https://www.test.bbc.co.uk/ws/av-embeds/articles/c3wmq4d1y3wo/p01k6msp/en/amp"
      placeholderSrc="https://ichef.bbci.co.uk/news/640/cpsdevpb/4eb7/test/ba7482d0-cca8-11e8-b0bf-f33155223fc4.jpg"
    />
  );

amp.story = {
  name: 'AMP',
};

export default {
  title: 'Components|Media Player',
};

export const audioSkin = () => (
  <CanonicalMediaPlayer
    src="https://www.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko"
    showPlaceholder={false}
    skin="audio"
  />
);

export default {
  title: 'Components|Media Player',
  decorators: [ampDecorator],
};

export const audioSkinAmp = () => (
    <AmpMediaPlayer
      isAmp
      src="https://www.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio/ko/amp"
      placeholderSrc="https://news.files.bbci.co.uk/include/articles/public/images/audio-player-placeholder.png"
      skin="audio"
    />
  );

audioSkinAmp.story = {
  name: 'Audio Skin AMP',
};
