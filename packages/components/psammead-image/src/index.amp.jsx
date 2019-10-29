import React from 'react';
import { number, string } from 'prop-types';

const AmpImg = props => {
  const { srcset, ...otherProps } = props;

  return <amp-img srcSet={srcset} {...otherProps} />;
};

AmpImg.propTypes = {
  alt: string.isRequired,
  attribution: string,
  height: number,
  layout: string.isRequired,
  sizes: string,
  src: string.isRequired,
  srcset: string,
  width: number,
};

AmpImg.defaultProps = {
  attribution: '',
  sizes: null,
  srcset: null,
  height: null,
  width: null,
};

export default AmpImg;
