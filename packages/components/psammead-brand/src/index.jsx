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
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';

const SVG_TOP_OFFSET_ABOVE_600PX = '1.75rem'; // 28px
const SVG_BOTTOM_OFFSET_BELOW_600PX = '0.75rem'; // 12px
const PADDING_AROUND_SVG_ABOVE_600PX = 56;
const PADDING_AROUND_SVG_BELOW_600PX = 32;

const conditionallyRenderHeight = (svgHeight, padding) =>
  svgHeight ? `height: ${(svgHeight + padding) / 16}rem` : '';

const Banner = styled.div`
  background-color: ${C_POSTBOX};
  ${({ svgHeight }) =>
    conditionallyRenderHeight(svgHeight, PADDING_AROUND_SVG_BELOW_600PX)};
  width: 100%;
  padding: 0 ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${({ svgHeight }) =>
      conditionallyRenderHeight(svgHeight, PADDING_AROUND_SVG_ABOVE_600PX)};
    padding: 0 ${GEL_SPACING_DBL};
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth / 16}rem;
  min-width: ${({ minWidth }) => minWidth / 16}rem;
`;

const BrandSvg = styled.svg`
  box-sizing: content-box;
  fill: ${C_WHITE};
  max-width: ${({ maxWidth }) => maxWidth / 16}rem;
  padding-top: ${GEL_SPACING_DBL};
  padding-bottom: ${SVG_BOTTOM_OFFSET_BELOW_600PX};
  width: 100%;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding-top: ${SVG_TOP_OFFSET_ABOVE_600PX};
    padding-bottom: ${GEL_SPACING_TRPL};
  }

  @media screen and (-ms-high-contrast: active), print {
    fill: windowText;
  }

  /* stylelint-disable */
  /* https://www.styled-components.com/docs/advanced#referring-to-other-components */
    ${StyledLink}:hover &,
    ${StyledLink}:focus & {
    text-decoration: none;
    border-bottom: ${GEL_SPACING_HLF} solid ${C_WHITE};
  }
  /* stylelint-enable */
`;

const Brand = ({ brandName, svgHeight, minWidth, maxWidth, svg }) => (
  <Banner svgHeight={svgHeight}>
    {svg && (
      <StyledLink
        href="https://www.bbc.co.uk/news"
        maxWidth={maxWidth}
        minWidth={minWidth}
      >
        <BrandSvg
          height={svgHeight}
          viewBox={`0 0 ${svg.viewbox.width} ${svg.viewbox.height}`}
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
          ratio={svg.ratio}
        >
          {svg.group}
        </BrandSvg>
        <VisuallyHiddenText>{brandName}</VisuallyHiddenText>
      </StyledLink>
    )}
  </Banner>
);

Brand.propTypes = {
  brandName: string.isRequired,
  minWidth: number.isRequired,
  maxWidth: number.isRequired,
  svgHeight: number.isRequired,
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
