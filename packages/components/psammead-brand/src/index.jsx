import React, { Fragment } from 'react';
import styled from 'styled-components';
import { string, number, node, shape, bool } from 'prop-types';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';

const SVG_TOP_OFFSET_ABOVE_400PX = '1.75rem'; // 28px
const SVG_BOTTOM_OFFSET_BELOW_400PX = '0.75rem'; // 12px
const PADDING_AROUND_SVG_ABOVE_400PX = 56;
const PADDING_AROUND_SVG_BELOW_400PX = 32;

const conditionallyRenderHeight = (svgHeight, padding) =>
  svgHeight ? `height: ${(svgHeight + padding) / 16}rem` : '';

const TRANSPARENT_BORDER = `0.0625rem solid transparent`;

const SvgWrapper = styled.div`
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  margin: 0 auto;
`;

const Banner = styled.div`
  background-color: ${C_POSTBOX};
  ${({ svgHeight }) =>
    conditionallyRenderHeight(svgHeight, PADDING_AROUND_SVG_BELOW_400PX)}
  width: 100%;
  padding: 0 ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    ${({ svgHeight }) =>
      conditionallyRenderHeight(svgHeight, PADDING_AROUND_SVG_ABOVE_400PX)}
    padding: 0 ${GEL_SPACING_DBL};
  }
  border-top: ${({ borderTop }) => borderTop && TRANSPARENT_BORDER};
  border-bottom: ${({ borderBottom }) => borderBottom && TRANSPARENT_BORDER};
`;

const brandWidth = (minWidth, maxWidth) => `
  width: 100%;
  max-width: ${maxWidth / 16}rem;
  min-width: ${minWidth / 16}rem;
`;

const StyledLink = styled.a`
  display: inline-block;
  ${({ maxWidth, minWidth }) => brandWidth(minWidth, maxWidth)}
`;

// `currentColor` has been used to address high contrast mode in Firefox.
const BrandSvg = styled.svg`
  box-sizing: content-box;
  color: ${C_WHITE};
  fill: currentColor;
  padding-top: ${GEL_SPACING_DBL};
  padding-bottom: ${SVG_BOTTOM_OFFSET_BELOW_400PX};
  height: ${props => props.height / 16}rem;
  
  ${({ maxWidth, minWidth }) => brandWidth(minWidth, maxWidth)}

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding-top: ${SVG_TOP_OFFSET_ABOVE_400PX};
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

const LocalisedBrandName = ({ product, serviceLocalisedName }) =>
  serviceLocalisedName ? (
    // eslint-disable-next-line jsx-a11y/aria-role
    <VisuallyHiddenText role="text">
      <span lang="en-GB">{product}</span>, {serviceLocalisedName}
    </VisuallyHiddenText>
  ) : (
    <VisuallyHiddenText>{product}</VisuallyHiddenText>
  );

LocalisedBrandName.propTypes = {
  product: string.isRequired,
  serviceLocalisedName: string,
};

LocalisedBrandName.defaultProps = {
  serviceLocalisedName: null,
};

const StyledBrand = ({
  product,
  serviceLocalisedName,
  svgHeight,
  svg,
  maxWidth,
  minWidth,
}) => (
  <Fragment>
    {svg && (
      <Fragment>
        <BrandSvg
          height={svgHeight}
          viewBox={`0 0 ${svg.viewbox.width} ${svg.viewbox.height}`}
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
          ratio={svg.ratio}
          maxWidth={maxWidth}
          minWidth={minWidth}
        >
          {svg.group}
        </BrandSvg>
        <LocalisedBrandName
          product={product}
          serviceLocalisedName={serviceLocalisedName}
        />
      </Fragment>
    )}
  </Fragment>
);

const brandProps = {
  product: string.isRequired,
  serviceLocalisedName: string,
  maxWidth: number.isRequired,
  minWidth: number.isRequired,
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

StyledBrand.propTypes = brandProps;

StyledBrand.defaultProps = {
  serviceLocalisedName: null,
};

const Brand = props => {
  const { svgHeight, maxWidth, minWidth, url, borderTop, borderBottom } = props;

  return (
    <Banner
      svgHeight={svgHeight}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      {url ? (
        <SvgWrapper>
          <StyledLink href={url} maxWidth={maxWidth} minWidth={minWidth}>
            <StyledBrand {...props} />
          </StyledLink>
        </SvgWrapper>
      ) : (
        <SvgWrapper>
          <StyledBrand {...props} />
        </SvgWrapper>
      )}
    </Banner>
  );
};

Brand.defaultProps = {
  url: null,
  serviceLocalisedName: null,
  borderTop: false,
  borderBottom: false,
};

Brand.propTypes = {
  ...brandProps,
  url: string,
  serviceLocalisedName: string,
  borderTop: bool,
  borderBottom: bool,
};

export default Brand;
