import React from 'react';
import styled, { css } from 'styled-components';
import { string, number, node } from 'prop-types';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
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
const SVG_WIDTH_PX = 167.95;
const SVG_WIDTH = `${SVG_WIDTH_PX / 16}rem`;

const VIEWBOX_VALUES = `0 0 ${SVG_WIDTH_PX} ${SVG_HEIGHT_PX}`;

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
  width: ${props => (props.width ? `${props.width / 16}rem` : SVG_WIDTH)};
  margin-top: ${SVG_TOP_OFFSET};
  fill: #fff;
  @media screen and (-ms-high-contrast: active), print {
    fill: windowText;
  }
`;

const Brand = ({ brandName, children, svgWidth }) => (
  <StyledWrapper>
    <ConstraintWrapper>
      <StyledLink href="https://www.bbc.co.uk/news">
        <StyledSpan>
          <BrandSvg
            viewBox={VIEWBOX_VALUES}
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            width={svgWidth}
          >
            {children}
          </BrandSvg>
          <VisuallyHiddenText>{brandName}</VisuallyHiddenText>
        </StyledSpan>
      </StyledLink>
    </ConstraintWrapper>
  </StyledWrapper>
);

Brand.defaultProps = {
  svgWidth: 167.95,
};

Brand.propTypes = {
  brandName: string.isRequired,
  svgWidth: number,
  children: node.isRequired,
};

export default Brand;
