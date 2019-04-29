import React from 'react';
import styled, { css } from 'styled-components';
import { string, number, node, shape } from 'prop-types';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  MEDIA_QUERY_TYPOGRAPHY,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
  GEL_SPACING_DBL,
  GEL_SPACING_HLF,
} from '@bbc/gel-foundations/spacings';

const layoutWrapperWithoutGrid = css`
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_BELOW_400PX};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_ABOVE_400PX};
  }
`;

const SVG_BOTTOM_OFFSET = '1.5rem'; // 24px

const BANNER_HEIGHT_MIN_PX = 62;
const BANNER_HEIGHT_MIN = `${BANNER_HEIGHT_MIN_PX / 16}rem`;
const BANNER_HEIGHT_FULL_PX = 80;
const BANNER_HEIGHT_FULL = `${BANNER_HEIGHT_FULL_PX / 16}rem`;

const StyledWrapper = styled.div`
  ${layoutWrapperWithoutGrid};
  background-color: ${C_POSTBOX};
  width: 100%;

  height: ${BANNER_HEIGHT_MIN};

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    height: ${BANNER_HEIGHT_FULL};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_SPACING_DBL};
  }
`;

const ConstraintWrapper = styled.div`
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  margin: 0 auto;
`;

const StyledLink = styled.a`
  display: inline-block;
`;

const StyledSpan = styled.span`
  display: block;
  padding-bottom: ${SVG_BOTTOM_OFFSET};
  ${/* sc-selector */ StyledLink}:hover &,
  ${/* sc-selector */ StyledLink}:focus & {
    text-decoration: none;
    border-bottom: ${GEL_SPACING_HLF} solid ${C_WHITE};
  }
`;

const svgWidth = (ratio, heightPx) => `${((heightPx * ratio) / 16).toFixed(2)}`;

const svgMarginTop = (bannerHeightPx, svgHeightPx) =>
  // Places the SVG vertically centred in the banner.
  `${(bannerHeightPx - svgHeightPx) / 2 / 16}`;

const svgSizing = (bannerHeightPx, svgHeightPx, ratio) => `
  height: ${svgHeightPx / 16}rem;
  width: ${svgWidth(ratio, svgHeightPx)}rem;
  margin-top: ${svgMarginTop(bannerHeightPx, svgHeightPx)}rem;
`;

const BrandSvg = styled.svg`
  display: block;
  fill: #fff;
  @media screen and (-ms-high-contrast: active), print {
    fill: windowText;
  }

  ${({ height, ratio }) =>
    svgSizing(BANNER_HEIGHT_MIN_PX, height.groupA, ratio)};

  ${MEDIA_QUERY_TYPOGRAPHY.SMART_PHONE_AND_LARGER} {
    ${({ height, ratio }) =>
      svgSizing(BANNER_HEIGHT_MIN_PX, height.groupB, ratio)};
  }

  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    ${({ height, ratio }) =>
      svgSizing(BANNER_HEIGHT_FULL_PX, height.groupD, ratio)};
  }
`;

const Brand = ({ brandName, svgHeight, svg }) => (
  <StyledWrapper>
    <ConstraintWrapper>
      <StyledLink href="https://www.bbc.co.uk/news">
        <StyledSpan>
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
        </StyledSpan>
      </StyledLink>
    </ConstraintWrapper>
  </StyledWrapper>
);

Brand.propTypes = {
  brandName: string.isRequired,
  svgHeight: shape({
    groupA: number.isRequired,
    groupB: number.isRequired,
    groupD: number.isRequired,
  }).isRequired,
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
