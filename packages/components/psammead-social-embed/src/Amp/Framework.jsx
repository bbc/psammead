import React from 'react';
import { string } from 'prop-types';

export const scripts = {
  instagram: {
    customElement: 'amp-instagram',
    src: 'https://cdn.ampproject.org/v0/amp-instagram-0.1.js',
  },
  twitter: {
    customElement: 'amp-twitter',
    src: 'https://cdn.ampproject.org/v0/amp-twitter-0.1.js',
  },
  youtube: {
    customElement: 'amp-youtube',
    src: 'https://cdn.ampproject.org/v0/amp-youtube-0.1.js',
  },
};

export const Elements = {
  instagram: ({ id, height, width }) => (
    <amp-instagram
      data-captioned
      data-shortcode={id}
      height={height}
      layout="responsive"
      width={width}
    />
  ),
  twitter: ({ id, height, width }) => (
    <amp-twitter
      data-tweetid={id}
      height={height}
      layout="responsive"
      width={width}
    />
  ),
  youtube: ({ id, height, width }) => (
    <amp-youtube
      data-videoid={id}
      height={height}
      layout="responsive"
      width={width}
    />
  ),
};

const sharedPropTypes = {
  height: string.isRequired,
  id: string.isRequired,
  width: string.isRequired,
};

Elements.instagram.propTypes = sharedPropTypes;
Elements.twitter.propTypes = sharedPropTypes;
Elements.youtube.propTypes = sharedPropTypes;
