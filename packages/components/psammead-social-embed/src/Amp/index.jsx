import React, { memo } from 'react';
import { string } from 'prop-types';
import Helmet from 'react-helmet';

const Instagram = ({ id, height, width }) => (
  <>
    <Helmet>
      <script
        async
        custom-element="amp-instagram"
        src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"
      />
    </Helmet>
    <amp-instagram
      data-captioned
      data-shortcode={id}
      height={height}
      layout="responsive"
      width={width}
    />
  </>
);

const Twitter = ({ id, height, width }) => (
  <>
    <Helmet>
      <script
        async
        custom-element="amp-twitter"
        src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"
      />
    </Helmet>
    <amp-twitter
      data-tweetid={id}
      height={height}
      layout="responsive"
      width={width}
    />
  </>
);

const YouTube = ({ id, height, width }) => (
  <>
    <Helmet>
      <script
        async
        custom-element="amp-youtube"
        src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
      />
    </Helmet>
    <amp-youtube
      data-videoid={id}
      height={height}
      layout="responsive"
      width={width}
    />
  </>
);

const sharedPropTypes = {
  height: string.isRequired,
  id: string.isRequired,
  width: string.isRequired,
};

Instagram.propTypes = sharedPropTypes;
Twitter.propTypes = sharedPropTypes;
YouTube.propTypes = sharedPropTypes;

export default {
  instagram: memo(Instagram),
  twitter: memo(Twitter),
  youtube: memo(YouTube),
};
