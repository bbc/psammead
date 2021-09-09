import React from 'react';
import omit from 'ramda/src/omit';
import { number, string } from 'prop-types';

// Prevents component outputting invalid HTML when styled with emotion
const omitInvalidProps = omit(['classname']);

const AmpImg = props => {
  const { srcset, ...otherProps } = props;

  return <amp-img srcSet={srcset} {...omitInvalidProps(otherProps)} />;
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
