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
  const mediaInfo = {
    duration: '2:30',
    durationSpoken: '2 minutes 30 seconds',
    datetime: 'PT2M30S',
  };

  shouldMatchSnapshot(
    'renders a landscape container with a placeholder image',
    <CanonicalMediaPlayer
      placeholderSrc="http://foo.bar/placeholder.png"
      src="http://foo.bar/iframe"
      service="news"
      mediaInfo={{ title: 'Dog chases cat.', ...mediaInfo }}
    />,
  );

  shouldMatchSnapshot(
    'renders a portrait container with a placeholder image',
    <CanonicalMediaPlayer
      placeholderSrc="http://foo.bar/placeholder.png"
      src="http://foo.bar/iframe"
      portrait
      service="news"
      mediaInfo={{ title: 'Dog chases cat.', ...mediaInfo }}
    />,
  );

  shouldMatchSnapshot(
    'renders an iframe when showPlaceholder is false',
    <CanonicalMediaPlayer
      showPlaceholder={false}
      src="http://foo.bar/iframe"
      service="news"
      mediaInfo={{ title: 'Dog chases cat.', ...mediaInfo }}
    />,
  );

  shouldMatchSnapshot(
    'renders the audio skin',
    <CanonicalMediaPlayer
      showPlaceholder={false}
      src="https://www.test.bbc.com/ws/av-embeds/media/bbc_korean_radio/liveradio"
      skin="audio"
      service="news"
      mediaInfo={{ type: 'audio', title: 'Dog barks at cat.', ...mediaInfo }}
    />,
  );
});
