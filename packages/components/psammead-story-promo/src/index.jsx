import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
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
import { C_SHADOW, C_METAL } from '@bbc/psammead-styles/colours';

const twoOfSixColumnsMaxWidthScaleable = `33.33%`;
// (2 / 6) * 100 = 0.3333333333 = 33.33%

const fourOfTwelveColumnsMaxWidthScaleable = `33.33%`;
// (4 / 12) * 100 = 0.3333333333 = 33.33%

const fourOfSixColumnsMaxWidthScaleable = `66.67%`;
// (4 / 6) * 100 = 66.6666666667 = 66.67%

const eightOfTwelveColumnsMaxScaleable = `66.67%`;
// (8 / 12) * 100 = 66.6666666667 = 66.67%

const StoryPromoWrapper = styled.div`
  position: relative;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${GEL_GUTTER_BELOW_600PX};

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
    }

    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      grid-template-columns: repeat(12, 1fr);
    }
  }
`;

const ImageGridItem = styled.div`
  display: inline-block;
  vertical-align: top;
  max-width: ${twoOfSixColumnsMaxWidthScaleable};
  position: relative;

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    max-width: ${fourOfTwelveColumnsMaxWidthScaleable};
  }

  @supports (display: grid) {
    display: block;
    max-width: initial;
    grid-column: 1 / span 2;

    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      grid-column: 1 / span 4;
    }
  }
`;

const TextGridItem = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 ${GEL_SPACING};
  max-width: ${fourOfSixColumnsMaxWidthScaleable};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_SPACING_DBL};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    max-width: ${eightOfTwelveColumnsMaxScaleable};
  }

  @supports (display: grid) {
    display: block;
    max-width: initial;
    padding: initial;
    grid-column: 3 / span 4;

    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      grid-column: 5 / span 8;
    }
  }
`;

const InlineMediaIndicator = styled.div`
  position: absolute;
  bottom: 0;
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

  &:visited {
    color: ${C_METAL};
  }
`;

const StoryPromo = ({ image, info, mediaIndicator }) => (
  <StoryPromoWrapper>
    <ImageGridItem>
      {image}
      <InlineMediaIndicator>{mediaIndicator || null}</InlineMediaIndicator>
    </ImageGridItem>
    <TextGridItem>{info}</TextGridItem>
  </StoryPromoWrapper>
);

StoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
  mediaIndicator: node,
};

StoryPromo.defaultProps = {
  mediaIndicator: null,
};

export default StoryPromo;
