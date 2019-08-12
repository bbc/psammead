import React from 'react';
import { number, string } from 'prop-types';

const AmpImg = props => {
  const { srcset, ...otherProps } = props;

  return <amp-img srcSet={srcset} {...otherProps} />;
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
