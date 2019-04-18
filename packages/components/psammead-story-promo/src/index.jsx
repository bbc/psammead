import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import {
  GEL_SPACING,
  GEL_GUTTER_BELOW_600PX,
  GEL_GUTTER_ABOVE_600PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  getParagon,
  GEL_FF_REITH_SERIF,
} from '@bbc/gel-foundations/typography';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import PsammeadParagraph from '@bbc/psammead-paragraph';

const StoryPromoWrapper = styled.div`
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

export const Heading = styled.h3`
  ${props => (props.script ? getParagon(props.script) : '')};
  color: ${C_SHADOW};
  font-family: ${GEL_FF_REITH_SERIF};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  font-weight: 700;
`;

export const Paragraph = styled(PsammeadParagraph)`
  padding-bottom: ${GEL_SPACING};
`;

const StoryPromo = ({ image, text }) => (
  <StoryPromoWrapper>
    <ImageGridItem>{image}</ImageGridItem>
    <TextGridItem>{text}</TextGridItem>
  </StoryPromoWrapper>
);

StoryPromo.propTypes = {
  image: node.isRequired,
  text: node.isRequired,
};

export default StoryPromo;
