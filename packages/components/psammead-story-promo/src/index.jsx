import React from 'react';
import styled, { css } from 'styled-components';
import { node, bool, string, oneOf, shape } from 'prop-types';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  getParagon,
  getLongPrimer,
  getDoublePica,
} from '@bbc/gel-foundations/typography';
import {
  C_EBON,
  C_METAL,
  C_POSTBOX,
  C_SHADOW,
} from '@bbc/psammead-styles/colours';
import {
  getSansRegular,
  getSansBold,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import ImageGridItem from './ImageStyles';
import TextGridItem from './TextStyles';

const PROMO_TYPES = oneOf(['top', 'regular', 'leading']);

const wrapperTopStoryStyles = `
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const wrapperRegularStyles = `
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    display: block;
  }
`;

const wrapperStyles = {
  top: wrapperTopStoryStyles,
  regular: wrapperRegularStyles,
  leading: '',
};

const StoryPromoWrapper = styled.div`
  position: relative;
  @supports (${grid}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${GEL_SPACING};

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      grid-column-gap: ${GEL_SPACING_DBL};
    }

    ${({ promoType }) => wrapperStyles[promoType]}
  }
`;

const ImageContentsWrapper = styled.div`
  position: relative;
`;

const positionBottomOfParent = `
  position: absolute;
  bottom: 0;
`;

const positionBottomOfParentGroup2 = `
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    ${positionBottomOfParent}
  }
`;

const mediaIndicatorStyles = {
  top: positionBottomOfParent,
  regular: positionBottomOfParentGroup2,
  leading: positionBottomOfParentGroup2,
};

const InlineMediaIndicator = styled.div`
  ${({ promoType }) => mediaIndicatorStyles[promoType]}
`;

const headlineTopStoryTypography = script => getParagon(script);
const headlineLeadingStoryTypography = script => getDoublePica(script);

// This is needed to get around the issue of IE11 not supporting
// nested media queries (so not using getGreatPrimer() & getPica())
const headlineRegularTypography = script => {
  const fontSize = (type, group) => script[type][group].fontSize / 16;
  const lineHeight = (type, group) => script[type][group].lineHeight / 16;
  return css`
    font-size: ${fontSize('pica', 'groupA')}rem;
    line-height: ${lineHeight('pica', 'groupA')}rem;
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      font-size: ${fontSize('greatPrimer', 'groupB')}rem;
      line-height: ${lineHeight('greatPrimer', 'groupB')}rem;
    }
    ${({ promoHasImage }) =>
      !promoHasImage &&
      `
      @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
        font-size: ${fontSize('pica', 'groupD')}rem;
        line-height: ${lineHeight('pica', 'groupD')}rem;
      `}
  `;
};

const headlineTypography = script => ({
  top: headlineTopStoryTypography(script),
  regular: headlineRegularTypography(script),
  leading: headlineLeadingStoryTypography(script),
});

export const Headline = styled.h3`
  ${({ script, promoType }) => script && headlineTypography(script)[promoType]}
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  ${({ promoHasImage }) => !promoHasImage && `display: inline;`}
`;

Headline.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  promoHasImage: bool,
  promoType: PROMO_TYPES,
};

Headline.defaultProps = {
  promoHasImage: true,
  promoType: 'regular',
};

const summaryTopStoryStyles = `
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    display: none;
    visibility: hidden;
  }
`;

const summaryRegularStyles = `
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    display: none;
    visibility: hidden;
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    display: none;
    visibility: hidden;
  }
`;

const summaryStyles = {
  top: summaryTopStoryStyles,
  regular: summaryRegularStyles,
  leading: summaryRegularStyles,
};

export const Summary = styled.p`
  ${({ script }) => script && getLongPrimer(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_SHADOW};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};

  ${({ promoHasImage }) => !promoHasImage && `padding-top: ${GEL_SPACING};`}

  ${({ promoType }) => summaryStyles[promoType]}
`;

Summary.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  promoHasImage: bool,
  promoType: PROMO_TYPES,
};

Summary.defaultProps = {
  promoHasImage: true,
  promoType: 'regular',
};

export const Link = styled.a`
  position: static;
  color: ${C_EBON};
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

export const LiveLabel = styled.span.attrs({ 'aria-hidden': 'true' })`
  ${({ service }) => getSansBold(service)}
  color: ${C_POSTBOX};
  display: inline-block;
  ${({ dir }) =>
    dir === 'rtl' ? 'margin-left: 0.5rem;' : 'margin-right: 0.5rem;'}
`;

LiveLabel.propTypes = {
  service: string.isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

LiveLabel.defaultProps = {
  dir: 'ltr',
};

const StoryPromo = ({
  image,
  info,
  mediaIndicator,
  promoType,
  displayImage,
  ...props
}) => {
  const renderImage = displayImage && (
    <ImageGridItem promoType={promoType}>
      <ImageContentsWrapper>
        {image}
        {mediaIndicator && (
          <InlineMediaIndicator promoType={promoType}>
            {mediaIndicator}
          </InlineMediaIndicator>
        )}
      </ImageContentsWrapper>
    </ImageGridItem>
  );

  const renderText = (
    <TextGridItem promoType={promoType} displayImage={displayImage}>
      {!displayImage && mediaIndicator}
      {info}
    </TextGridItem>
  );

  return (
    <StoryPromoWrapper promoType={promoType} {...props}>
      {promoType === 'leading' ? (
        <>
          {renderText}
          {renderImage}
        </>
      ) : (
        <>
          {renderImage}
          {renderText}
        </>
      )}
    </StoryPromoWrapper>
  );
};

StoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
  mediaIndicator: node,
  promoType: PROMO_TYPES,
  displayImage: bool,
};

StoryPromo.defaultProps = {
  mediaIndicator: null,
  promoType: 'regular',
  displayImage: true,
};

export default StoryPromo;
