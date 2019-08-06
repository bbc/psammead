import React, { Fragment } from 'react';
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
  C_POSTBOX,
  C_SHADOW,
} from '@bbc/psammead-styles/colours';
import {
  getSansRegular,
  getSansBold,
  getSerifMedium,
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
  ${({ service }) => getSerifMedium(service)}
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
  color: ${C_POSTBOX};
  ${({ service }) => getSansBold(service)}
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
 *  Index Alsos
 */
const StyledIndexAlsos = styled.div`
  margin: ${GEL_SPACING_DBL} 0 ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

const StyledIndexAlso = styled.div`
  border-top: 1px solid ${C_LUNAR};
  padding: ${GEL_SPACING} 0;
`;

const StyledIndexAlsosLink = styled.a`
  ${props => (props.script ? getBrevier(props.script) : '')};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:visited {
    color: ${C_METAL};
  }
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

const IndexAlsosMediaIndicator = styled.span`
  padding-right: ${GEL_SPACING};
`;

const IndexAlsosText = styled.span`
  display: inline;
  vertical-align: middle;
`;

export const IndexAlsos = ({ children, offScreenText }) => (
  <StyledIndexAlsos>
    <VisuallyHiddenText as="h4">{offScreenText}</VisuallyHiddenText>
    {children}
  </StyledIndexAlsos>
);

IndexAlsos.propTypes = {
  children: node.isRequired,
  offScreenText: string,
};

IndexAlsos.defaultProps = {
  offScreenText: null,
};

export const IndexAlsosLink = ({
  children,
  script,
  service,
  url,
  mediaIndicator,
}) => {
  return (
    <StyledIndexAlsosLink href={url} script={script} service={service}>
      {mediaIndicator ? (
        <Fragment>
          <IndexAlsosMediaIndicator>{mediaIndicator}</IndexAlsosMediaIndicator>
          <IndexAlsosText>{children}</IndexAlsosText>
        </Fragment>
      ) : (
        <IndexAlsosText>{children}</IndexAlsosText>
      )}
    </StyledIndexAlsosLink>
  );
};

IndexAlsosLink.propTypes = {
  children: node.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  url: string.isRequired,
  mediaIndicator: node,
};

IndexAlsosLink.defaultProps = {
  mediaIndicator: null,
};

export const IndexAlso = ({ ...props }) => {
  return (
    <StyledIndexAlso>
      <IndexAlsosLink {...props} />
    </StyledIndexAlso>
  );
};

export const IndexAlsosUl = ({ children, ...props }) => (
  <StyledIndexAlsosUl role="list" {...props}>
    {children}
  </StyledIndexAlsosUl>
);

IndexAlsosUl.propTypes = {
  children: node.isRequired,
};

export const IndexAlsosLi = ({ ...props }) => (
  <StyledIndexAlsosLi role="listitem">
    <IndexAlsosLink {...props} />
  </StyledIndexAlsosLi>
);

/*
 *  Story Promo
 */
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

export default StoryPromo;
