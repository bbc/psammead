import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { CanonicalMediaPlayer, AmpMediaPlayer } from '.';

describe('Media Player: AMP Entry', () => {
  shouldMatchSnapshot(
    'renders a landscape container with an amp-iframe and nested amp-img',
    <AmpMediaPlayer
      placeholderSrc="http://foo.bar/placeholder.png"
      src="http://foo.bar/iframe/amp"
    />,
  );

  shouldMatchSnapshot(
    'renders a portrait container with amp-iframe and nested amp-img',
    <AmpMediaPlayer
      portrait
      placeholderSrc="http://foo.bar/placeholder.png"
      src="http://foo.bar/iframe/amp"
    />,
  );

  shouldMatchSnapshot(
    'renders the audio skin',
    <AmpMediaPlayer
      showPlaceholder={false}
      src="https://www.test.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio"
      skin="audio"
      placeholderSrc="http://foo.bar/placeholder.png"
    />,
  );
});

describe('Media Player: Canonical Entry', () => {
  shouldMatchSnapshot(
    'renders a landscape container with a placeholder image',
    <CanonicalMediaPlayer
      placeholderSrc="http://foo.bar/placeholder.png"
      src="http://foo.bar/iframe"
    />,
  );

  shouldMatchSnapshot(
    'renders a portrait container with a placeholder image',
    <CanonicalMediaPlayer
      placeholderSrc="http://foo.bar/placeholder.png"
      src="http://foo.bar/iframe"
      portrait
    />,
  );

  shouldMatchSnapshot(
    'renders an iframe when showPlaceholder is false',
    <CanonicalMediaPlayer
      showPlaceholder={false}
      src="http://foo.bar/iframe"
    />,
  );

  shouldMatchSnapshot(
    'renders the audio skin',
    <CanonicalMediaPlayer
      showPlaceholder={false}
      src="https://www.test.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio"
      skin="audio"
    />,
  );
});
