import React from 'react';
import styled from 'styled-components';
import { string, number, node, shape } from 'prop-types';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';

const BANNER_HEIGHT_MIN = '3.875rem'; // 62px
const BANNER_HEIGHT_FULL = '5rem'; // 80px

const Banner = styled.div`
  background-color: ${C_POSTBOX};
  width: 100%;

  height: ${BANNER_HEIGHT_MIN};
  padding: 0 ${GEL_SPACING};

  @media (min-width: /*${GEL_GROUP_3_SCREEN_WIDTH_MIN}*/ 0) { /* TODO uncomment me */
    height: ${BANNER_HEIGHT_FULL};
    padding: 0 ${GEL_SPACING_DBL};
  }
`;

const ConstraintWrapper = styled.div`
  // Document this and add media query
  min-height: 76px; /* = desired height - border-bottom (80-4), TODO media query to set to (56-4)px at 0-599px, rems */
  padding-top: 40px; /* ${28 / 16}rem; */
  padding-bottom: 0.75rem; /* TODO gel spacings */
`;

const StyledLink = styled.a`
  display: inline-block;
  border-bottom: ${GEL_SPACING_HLF} solid ${C_POSTBOX}; /* Add border to extend click area */
  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom: ${GEL_SPACING_HLF} solid ${C_WHITE};
  }
`;

const StyledSpan = styled.span`
  display: block;
  // position: relative;
  // top: 50%;
  transform: translateY(-50%);
`;

const BrandSvg = styled.svg`
  display: block;
  fill: #fff;
  max-height: 1.5rem; /* 24px */
  max-width: 100%;
  min-width: ${({ minWidth }) => minWidth / 16}rem;

  @media screen and (-ms-high-contrast: active), print {
    fill: windowText;
  }
`;

const Brand = ({ brandName, minWidth, svg }) => (
  <Banner>
    {svg && (
      <StyledLink href="https://www.bbc.co.uk/news">
        <ConstraintWrapper>
          <StyledSpan>
            <BrandSvg
              minWidth={minWidth} // TODO note that this should be the min of (224, svg.viewbox.width) in README, client code's responsibility to set this right
              viewBox={`0 0 ${svg.viewbox.width} ${svg.viewbox.height}`}
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
              ratio={svg.ratio}
            >
              {svg.group}
            </BrandSvg>
            <VisuallyHiddenText>{brandName}</VisuallyHiddenText>
          </StyledSpan>
        </ConstraintWrapper>
      </StyledLink>
    )}
  </Banner>
);

Brand.propTypes = {
  brandName: string.isRequired,
  minWidth: number.isRequired,
  svg: shape({
    group: node.isRequired,
    ratio: number.isRequired,
    viewbox: shape({
      height: number.isRequired,
      width: number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Brand;
