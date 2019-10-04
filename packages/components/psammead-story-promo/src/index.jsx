import React from 'react';
import styled, { css } from 'styled-components';
import { node, bool, string, oneOf } from 'prop-types';
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
import { grid } from '@bbc/psammead-styles/detection';

const twoOfSixColumnsMaxWidthScaleable = `33.33%`;
// (2 / 6) * 100 = 0.3333333333 = 33.33%

const fourOfTwelveColumnsMaxWidthScaleable = `33.33%`;
// (4 / 12) * 100 = 0.3333333333 = 33.33%

const fourOfSixColumnsMaxWidthScaleable = `66.67%`;
// (4 / 6) * 100 = 66.6666666667 = 66.67%

const eightOfTwelveColumnsMaxScaleable = `66.67%`;
// (8 / 12) * 100 = 66.6666666667 = 66.67%

const fullWidthColumnsMaxScaleable = `100%`;
// (12 / 12) * 100 = 100 = 100%

const halfWidthColumnsMaxScaleable = `50%`;

const StoryPromoWrapper = styled.div`
  position: relative;

  @supports (${grid}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${GEL_GUTTER_BELOW_600PX};

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
    }

    ${({ topStory }) =>
      topStory
        ? css`
            @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
              grid-template-columns: repeat(12, 1fr);
            }
          `
        : css`
            @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
              display: block;
            }
          `}
  }
`;

/*
 *  Image
 */
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
    width: ${halfWidthColumnsMaxScaleable};
    margin-bottom: 0;
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    width: ${fourOfTwelveColumnsMaxWidthScaleable};
  }
`;

const ImageGridFallback = css`
  width: ${twoOfSixColumnsMaxWidthScaleable};

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    display: block;
    width: 100%;
  }
`;

const ImageGridItem = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;

  ${({ topStory }) =>
    topStory ? ImageGridFallbackTopStory : ImageGridFallback}

  @supports (${grid}) {
    display: block;
    width: initial;

    ${({ topStory }) =>
      topStory ? ImageGridColumnsTopStory : ImageGridColumns}
  }
`;

const ImageContentsWrapper = styled.div`
  position: relative;
`;

const InlineMediaIndicator = styled.div`
  ${({ topStory }) =>
    topStory
      ? `
      position: absolute;
      bottom: 0;
      `
      : `
      @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
        position: absolute;
        bottom: 0;
      }
      `}
`;

/*
 *  Text
 */
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

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING};
  }
`;

const TextGridFallbackTopStory = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: ${halfWidthColumnsMaxScaleable};
    padding: 0 ${GEL_SPACING_DBL};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    width: ${eightOfTwelveColumnsMaxScaleable};
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
`;

const TextGridItem = styled.div`
  display: inline-block;
  vertical-align: top;

  ${({ topStory }) => (topStory ? TextGridFallbackTopStory : TextGridFallback)}

  @supports (${grid}) {
    display: block;
    width: initial;
    padding: initial;

    ${({ topStory }) => (topStory ? TextGridColumnsTopStory : TextGridColumns)}
  }
`;

// This is needed to get around the issue of IE11 not supporting
// nested media queries (which would be returned by getParagon() and
// getGreatPrimer())
const getHeadlineFontStyle = (script, topStory) => {
  const type = topStory ? 'paragon' : 'greatPrimer';

  const fontSize = script[type].groupD.fontSize / 16;
  const lineHeight = script[type].groupD.lineHeight / 16;

  return css`
    font-size: ${fontSize}rem;
    line-height: ${lineHeight}rem;
  `;
};

export const Headline = styled.h3`
  ${({ script, topStory }) =>
    script && (topStory ? getParagon(script) : getPica(script))}
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${({ script, topStory }) =>
      script && getHeadlineFontStyle(script, topStory)}
  }
`;

export const Summary = styled.p`
  ${({ script }) => script && getLongPrimer(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_SHADOW};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};

  ${({ topStory }) =>
    topStory
      ? css`
          @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
            display: none;
            visibility: hidden;
          }
        `
      : css`
          @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
            display: none;
            visibility: hidden;
          }

          @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
            display: none;
            visibility: hidden;
          }
        `}
`;

/*
 *  Link
 */
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

/*
 *  Live Label
 */
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

/*
 *  Story Promo
 */
const StoryPromo = ({ image, info, mediaIndicator, topStory }) => (
  <StoryPromoWrapper topStory={topStory}>
    <ImageGridItem topStory={topStory}>
      <ImageContentsWrapper>
        {image}
        {mediaIndicator && (
          <InlineMediaIndicator topStory={topStory}>
            {mediaIndicator}
          </InlineMediaIndicator>
        )}
      </ImageContentsWrapper>
    </ImageGridItem>
    <TextGridItem topStory={topStory}>{info}</TextGridItem>
  </StoryPromoWrapper>
);

StoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
  mediaIndicator: node,
  topStory: bool,
};

StoryPromo.defaultProps = {
  mediaIndicator: null,
  topStory: false,
};

export default StoryPromo;
