import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import {
  GEL_SPACING,
  GEL_GUTTER_BELOW_600PX,
  GEL_GUTTER_ABOVE_600PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  getGreatPrimer,
  getLongPrimer,
  GEL_FF_REITH_SERIF,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { C_SHADOW } from '@bbc/psammead-styles/colours';

const StoryPromoWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: ${GEL_GUTTER_BELOW_600PX};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const ImageGridItem = styled.div`
  grid-column: 1 / span 2;

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 4;
  }
`;

const TextGridItem = styled.div`
  grid-column: 3 / span 4;

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-column: 5 / span 8;
  }
`;

export const Headline = styled.h3`
  ${props => (props.script ? getGreatPrimer(props.script) : '')};
  color: ${C_SHADOW};
  font-family: ${GEL_FF_REITH_SERIF};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  font-weight: 700;
`;

export const Summary = styled.p`
  ${props => (props.script ? getLongPrimer(props.script) : '')};
  color: ${C_SHADOW};
  font-family: ${GEL_FF_REITH_SANS};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    display: none;
  }
`;

export const Link = styled.a`
  position: static;
  color: ${C_SHADOW};
  text-decoration: none;

  &:before {
    bottom: 0;
    content: '';
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    white-space: nowrap;
    z-index: 1;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const StoryPromo = ({ image, info }) => (
  <StoryPromoWrapper>
    <ImageGridItem>{image}</ImageGridItem>
    <TextGridItem>{info}</TextGridItem>
  </StoryPromoWrapper>
);

StoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
};

export default StoryPromo;
