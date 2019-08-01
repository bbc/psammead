import React from 'react';
import styled, { css } from 'styled-components';
import { node, bool, string, shape } from 'prop-types';
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
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  getBrevier,
  getPica,
  getGreatPrimer,
  getParagon,
  getLongPrimer,
} from '@bbc/gel-foundations/typography';
import {
  C_EBON,
  C_LUNAR,
  C_METAL,
  C_SHADOW,
} from '@bbc/psammead-styles/colours';
import {
  getSansRegular,
  getSansMedium,
  getSerifBold,
} from '@bbc/psammead-styles/font-styles';
import { grid } from '@bbc/psammead-styles/detection';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

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

const StoryPromoWrapper = styled.div`
  position: relative;

  @supports (${grid}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${GEL_GUTTER_BELOW_600PX};

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
    }

    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      grid-template-columns: repeat(12, 1fr);
    }
  }
`;

const ImageGridColumnsTopStory = css`
  grid-column: 1 / span 6;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 2;
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 4;
  }
`;

const ImageGridColumns = css`
  grid-column: 1 / span 2;

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 4;
  }
`;

const ImageGridFallbackTopStory = css`
  margin-bottom: ${GEL_GUTTER_BELOW_600PX};
  width: ${fullWidthColumnsMaxScaleable};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: ${twoOfSixColumnsMaxWidthScaleable};
    margin-bottom: 0;
  }
`;

const ImageGridFallback = css`
  width: ${twoOfSixColumnsMaxWidthScaleable};
`;

const ImageGridItem = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;

  ${({ topStory }) =>
    topStory ? ImageGridFallbackTopStory : ImageGridFallback}

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    width: ${fourOfTwelveColumnsMaxWidthScaleable};
  }

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

export const Headline = styled.h3`
  ${props => (props.script ? getPica(props.script) : '')};

  ${({ script, topStory }) => {
    if (!script) {
      return '';
    }

    return topStory ? getParagon(script) : getPica(script);
  }}

  color: ${C_EBON};
  ${({ service }) => getSerifBold(service)}
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${props => (props.script ? getGreatPrimer(props.script) : '')};
  }
`;

export const Summary = styled.p`
  ${props => (props.script ? getLongPrimer(props.script) : '')};
  color: ${C_SHADOW};
  ${({ service }) => getSansRegular(service)}
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};

  ${({ topStory }) =>
    !topStory &&
    css`
      @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
        display: none;
        visibility: hidden;
      }
    `}
`;

const TextGridColumnsTopStory = css`
  grid-column: 1 / span 6;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 3 / span 4;
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-column: 5 / span 8;
  }
`;

const TextGridColumns = css`
  grid-column: 3 / span 4;

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-column: 5 / span 8;
  }
`;

const TextGridFallbackTopStory = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: ${fourOfSixColumnsMaxWidthScaleable};
  }
`;

const TextGridFallback = css`
  width: ${fourOfSixColumnsMaxWidthScaleable};
  padding: 0 ${GEL_SPACING};
`;

const TextGridItem = styled.div`
  display: inline-block;
  vertical-align: top;

  ${({ topStory }) => (topStory ? TextGridFallbackTopStory : TextGridFallback)}

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_SPACING_DBL};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    width: ${eightOfTwelveColumnsMaxScaleable};
  }

  @supports (${grid}) {
    display: block;
    width: initial;
    padding: initial;

    ${({ topStory }) => (topStory ? TextGridColumnsTopStory : TextGridColumns)}
  }
`;

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

const StyledIndexAlsos = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

const StyledIndexAlso = styled.div`
  border-top: 1px solid ${C_LUNAR};
  padding: ${GEL_SPACING} 0;
`;

const StyledIndexAlsosUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledIndexAlsosLi = styled.li`
  border-top: 1px solid ${C_LUNAR};
  padding: ${GEL_SPACING} 0;
`;

const IndexAlsosLink = styled.a`
  ${props => (props.script ? getBrevier(props.script) : '')};
  ${({ service }) => getSansMedium(service)}
  color: ${C_EBON};
  cursor: pointer;
  text-decoration: none;
`;

export const IndexAlsos = ({ children, offScreenText }) => (
  <StyledIndexAlsos>
    <VisuallyHiddenText as="h4">{offScreenText}</VisuallyHiddenText>
    {children}
  </StyledIndexAlsos>
);

export const IndexAlso = ({ children, script, service, url }) => {
  return (
    <StyledIndexAlso>
      <IndexAlsosLink href={url} script={script} service={service}>
        {children}
      </IndexAlsosLink>
    </StyledIndexAlso>
  );
};

export const IndexAlsosUl = ({ children, ...props }) => (
  <StyledIndexAlsosUl role="list" {...props}>
    {children}
  </StyledIndexAlsosUl>
);

export const IndexAlsosLi = ({ children, script, service, url }) => (
  <StyledIndexAlsosLi role="listitem">
    <IndexAlsosLink href={url} script={script} service={service}>
      {children}
    </IndexAlsosLink>
  </StyledIndexAlsosLi>
);

const StoryPromo = ({ image, info, mediaIndicator, topStory }) => (
  <StoryPromoWrapper>
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

IndexAlso.propTypes = {
  children: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  url: string.isRequired,
};

IndexAlsos.propTypes = {
  children: node.isRequired,
  offScreenText: string,
};

IndexAlsos.defaultProps = {
  offScreenText: null,
};

IndexAlsosUl.propTypes = {
  children: node.isRequired,
};

IndexAlsosLi.propTypes = {
  children: node.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  url: string.isRequired,
};

export default StoryPromo;
