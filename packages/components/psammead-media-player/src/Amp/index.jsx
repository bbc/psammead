import React from 'react';
import { string } from 'prop-types';

const AmpMediaPlayer = ({ src, placeholderSrc }) => {
  return (
    <amp-iframe
      sandbox="allow-scripts allow-same-origin"
      layout="fill"
      frameborder="0"
      src={src}
      allowfullscreen
    >
      <amp-img layout="fill" src={placeholderSrc} placeholder />
    </amp-iframe>
  );
};

AmpMediaPlayer.propTypes = {
  src: string.isRequired,
  placeholderSrc: string,
};

AmpMediaPlayer.defaultProps = {
  placeholderSrc: null,
};

export default AmpMediaPlayer;
