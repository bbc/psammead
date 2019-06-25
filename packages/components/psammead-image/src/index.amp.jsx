import React from 'react';
import { number, string } from 'prop-types';

const AmpImg = ({
  alt,
  attribution,
  height,
  layout,
  sizes,
  src,
  srcset,
  width,
}) => {
  const props = {
    alt,
    attribution,
    height,
    layout,
    sizes,
    src,
    width,
  };

  if (srcset) {
    props.srcSet = srcset;
  }

  return <amp-img {...props} />;
};

AmpImg.propTypes = {
  alt: string.isRequired,
  attribution: string,
  height: number.isRequired,
  layout: string.isRequired,
  sizes: string,
  src: string.isRequired,
  srcset: string,
  width: number.isRequired,
};

AmpImg.defaultProps = {
  attribution: '',
  sizes: null,
  srcset: null,
};

export default AmpImg;
