import React from 'react';
import styled from '@emotion/styled';
import { number, string } from 'prop-types';

import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

import ImagePlaceholder from '@bbc/psammead-image-placeholder';

const Wrapper = styled.figure`
  width: 88px;
  display: inline-block;
  vertical-align: top;
  margin: 8px 0 0 8px;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    width: 109px;
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: 178px;
    margin: 0;
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    width: 100%;
    margin: 0;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

const CardImage = ({ ratio, alt, ...props }) => (
  <Wrapper>
    <ImagePlaceholder ratio={ratio}>
      <StyledImg alt={alt} {...props} />
    </ImagePlaceholder>
  </Wrapper>
);

CardImage.propTypes = {
  ratio: number,
  alt: string,
};

CardImage.defaultProps = {
  ratio: 100,
  alt: '',
};

export default CardImage;
