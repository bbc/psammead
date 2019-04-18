import React from 'react';
import styled, { css } from 'styled-components';
import { string, number, node, shape } from 'prop-types';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { news } from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
  GEL_SPACING,
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

const SVG_TOP_OFFSET = '1.25rem'; // 20px
const SVG_BOTTOM_OFFSET = '1.5rem'; // 24px
const BANNER_HEIGHT = '5rem'; // 80px

const SVG_HEIGHT_PX = 24;
const SVG_HEIGHT = `${SVG_HEIGHT_PX / 16}rem`;

const StyledWrapper = styled.div`
  ${layoutWrapperWithoutGrid};
  background-color: ${C_POSTBOX};
  height: ${BANNER_HEIGHT};
  width: 100%;
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_SPACING_DBL};
  }
`;

const ConstraintWrapper = styled.div`
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  margin: 0 auto;
`;

const StyledLink = styled.a`
  padding-top: ${GEL_SPACING};
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

const BrandSvg = styled.svg`
  display: block;
  height: ${SVG_HEIGHT};
  margin-top: ${SVG_TOP_OFFSET};
  fill: #fff;
  @media screen and (-ms-high-contrast: active), print {
    fill: windowText;
  }
`;

const Brand = ({ brandName, svg }) => (
  <StyledWrapper>
    <ConstraintWrapper>
      <StyledLink href="https://www.bbc.co.uk/news">
        <StyledSpan>
          <BrandSvg
            viewBox={`0 0 ${svg.viewbox.width} ${svg.viewbox.height} `}
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            width={svg.viewbox.width}
          >
            {svg.group}
          </BrandSvg>
          <VisuallyHiddenText>{brandName}</VisuallyHiddenText>
        </StyledSpan>
      </StyledLink>
    </ConstraintWrapper>
  </StyledWrapper>
);

Brand.defaultProps = {
  svg: news,
};

Brand.propTypes = {
  brandName: string.isRequired,
  svg: shape({
    group: node,
    ratio: number,
    viewbox: shape({
      height: number,
      width: number,
    }),
  }),
};

export default Brand;
