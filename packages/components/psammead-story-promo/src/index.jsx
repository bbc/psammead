import React from 'react';
import styled, { css } from 'styled-components';
import { node, bool, string, oneOf, shape } from 'prop-types';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_GUTTER_BELOW_600PX,
  GEL_GUTTER_ABOVE_600PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  getPica,
  getParagon,
  getLongPrimer,
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

const twoOfSixColumnsMaxWidthScaleable = `33.33%`;
// (2 / 6) * 100 = 0.3333333333 = 33.33%

const fourOfSixColumnsMaxWidthScaleable = `66.67%`;
// (4 / 6) * 100 = 66.6666666667 = 66.67%

const fullWidthColumnsMaxScaleable = `100%`;
// (12 / 12) * 100 = 100 = 100%

const halfWidthColumnsMaxScaleable = `50%`;

const gridFallbackImageWidth = css`
  width: calc(${halfWidthColumnsMaxScaleable} - ${GEL_SPACING});
`;

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
  leading: wrapperRegularStyles,
};

const StoryPromoWrapper = styled.div`
  position: relative;

  @supports (${grid}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${GEL_GUTTER_BELOW_600PX};

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
    }

    ${({ promoType }) => wrapperStyles[promoType]}
`;

const ImageGridColumnsTopStory = css`
  grid-column: 1 / span 6;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    grid-column: 1 / span 3;
  }
`;

const ImageGridColumns = css`
  grid-column: 1 / span 2;
`;

const ImageGridFallbackTopStory = css`
  margin-bottom: ${GEL_GUTTER_BELOW_600PX};
  width: ${fullWidthColumnsMaxScaleable};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${gridFallbackImageWidth};
    margin-bottom: 0;
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    ${gridFallbackImageWidth};
  }
`;

const ImageGridFallback = css`
  width: ${twoOfSixColumnsMaxWidthScaleable};

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    display: block;
    width: 100%;
  }
`;

const positionBottomOfParent = `
 position: absolute;
 bottom: 0;
`;
const positionBottomOfParentGroup2 = `
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
  ${positionBottomOfParent}
}`;

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

const TextGridColumnsTopStory = css`
  grid-column: 1 / span 6;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 4 / span 3;
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-column: 7 / span 6;
  }
`;

const TextGridColumns = css`
  grid-column: 3 / span 4;

  ${({ displayImage }) => !displayImage && `grid-column: 1 / span 6;`}

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING};
  }
`;

const TextGridFallbackTopStory = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: ${halfWidthColumnsMaxScaleable};
    padding: 0 ${GEL_SPACING_DBL};
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    width: ${halfWidthColumnsMaxScaleable};
  }
`;

const TextGridFallback = css`
  width: ${fourOfSixColumnsMaxWidthScaleable};
  padding: 0 ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_SPACING_DBL};
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    display: block;
    width: 100%;
    padding: ${GEL_SPACING} 0;
  }

  ${({ displayImage }) =>
    !displayImage &&
    `width: ${fullWidthColumnsMaxScaleable}; >div{ vertical-align: middle; }`}
`;

const imageGridFallbackStyles = {
  top: ImageGridFallbackTopStory,
  regular: ImageGridFallback,
  leading: ImageGridFallback,
};
const imageGridStyles = {
  top: ImageGridColumnsTopStory,
  regular: ImageGridColumns,
  leading: ImageGridColumns,
};
const textGridFallbackStyles = {
  top: TextGridFallbackTopStory,
  regular: TextGridFallback,
  leading: TextGridFallback,
};
const textGridStyles = {
  top: TextGridColumnsTopStory,
  regular: TextGridColumns,
  leading: TextGridColumns,
};
const mediaIndicatorStyles = {
  top: positionBottomOfParent,
  regular: positionBottomOfParentGroup2,
  leading: positionBottomOfParentGroup2,
};
const summaryStyles = {
  top: summaryTopStoryStyles,
  regular: summaryRegularStyles,
  leading: summaryRegularStyles,
};

const ImageGridItem = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  ${({ promoType }) => imageGridFallbackStyles[promoType]}

  @supports (${grid}) {
    display: block;
    width: initial;
    ${({ promoType }) => imageGridStyles[promoType]}
  }
`;

const ImageContentsWrapper = styled.div`
  position: relative;
`;

const InlineMediaIndicator = styled.div`
  ${({ promoType }) => mediaIndicatorStyles[promoType]}
`;

const TextGridItem = styled.div`
  display: inline-block;
  vertical-align: top;

  ${({ promoType }) => textGridFallbackStyles[promoType]}

  @supports (${grid}) {
    display: block;
    width: initial;
    padding: initial;
    ${({ promoType }) => textGridStyles[promoType]}
  }

  ${({ displayImage }) =>
    !displayImage &&
    `>div{ display:inline-block; padding: 0; vertical-align:initial; } `}
`;

const headlineTopStoryTypography = `
  ${({ script }) => getParagon(script)}
`;

// This is needed to get around the issue of IE11 not supporting
// nested media queries (which would be returned by getParagon() and
// getGreatPrimer())
const headlineRegularTypography = script => {
  const fontSize = script.greatPrimer.groupD.fontSize / 16;
  const lineHeight = script.greatPrimer.groupD.lineHeight / 16;
  return css`
    ${getPica(script)}
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      font-size: ${fontSize}rem;
      line-height: ${lineHeight}rem;
    }
    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      ${({ promoHasImage }) => !promoHasImage && getPica(script)}
    }
  `;
};

const headlineTypography = script => ({
  top: headlineTopStoryTypography,
  regular: headlineRegularTypography(script),
  leading: headlineTopStoryTypography,
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
  promoType: string,
};

Headline.defaultProps = {
  promoHasImage: true,
  promoType: 'regular',
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
  promoType: string,
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

  return (
    <StoryPromoWrapper promoType={promoType} {...props}>
      {renderImage}
      <TextGridItem promoType={promoType} displayImage={displayImage}>
        {!displayImage && mediaIndicator}
        {info}
      </TextGridItem>
    </StoryPromoWrapper>
  );
};

StoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
  mediaIndicator: node,
  promoType: string,
  displayImage: bool,
};

StoryPromo.defaultProps = {
  mediaIndicator: null,
  promoType: 'regular',
  displayImage: true,
};

export default StoryPromo;
