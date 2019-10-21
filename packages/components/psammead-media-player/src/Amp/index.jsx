import React from 'react';
import { string } from 'prop-types';
import Helmet from 'react-helmet';

const AmpHead = () => (
  <Helmet>
    <script
      async
      custom-element="amp-iframe"
      src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
    />
  </Helmet>
);

const AmpMediaPlayer = ({ src, placeholderSrc, placeholderSrcset, title }) => {
  return (
    <>
      <AmpHead />
      <amp-iframe
        sandbox="allow-scripts allow-same-origin"
        layout="fill"
        frameborder="0"
        src={src}
        title={title}
        allowfullscreen="allowfullscreen"
      >
        <amp-img
          layout="fill"
          src={placeholderSrc}
          srcset={placeholderSrcset}
          placeholder
        />
      </amp-iframe>
    </>
  );
};

AmpMediaPlayer.propTypes = {
  src: string.isRequired,
  placeholderSrc: string.isRequired,
  placeholderSrcset: string.isRequired,
  title: string.isRequired,
};

export default AmpMediaPlayer;
