import React from 'react';
import { string } from 'prop-types';

export const AmpScripts = {
  instagram: () => (
    <script
      async
      custom-element="amp-instagram"
      src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"
    />
  ),
  twitter: () => (
    <script
      async
      custom-element="amp-twitter"
      src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"
    />
  ),
  youtube: () => (
    <script
      async
      custom-element="amp-youtube"
      src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
    />
  ),
};

export const AmpComponents = {
  instagram: ({ height, id, width }) => (
    <amp-instagram
      data-captioned
      data-shortcode={id}
      height={height}
      layout="responsive"
      width={width}
    />
  ),
  twitter: ({ height, id, width }) => (
    <amp-twitter
      data-tweetid={id}
      height={height}
      layout="responsive"
      width={width}
    />
  ),
  youtube: ({ height, id, width }) => (
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

AmpComponents.instagram.propTypes = sharedPropTypes;
AmpComponents.twitter.propTypes = sharedPropTypes;
AmpComponents.youtube.propTypes = sharedPropTypes;
