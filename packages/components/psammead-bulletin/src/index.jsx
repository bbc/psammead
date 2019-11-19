import React from 'react';
import styled from 'styled-components';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  C_WHITE,
  C_POSTBOX,
  C_SHADOW,
  C_EBON,
  C_LUNAR,
} from '@bbc/psammead-styles/colours';
import { string, oneOf, node, bool, shape } from 'prop-types';
import { getSansRegular, getSansBold } from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getPica, getLongPrimer } from '@bbc/gel-foundations/typography';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { Link, LiveLabel } from '@bbc/psammead-story-promo';
import { grid } from '@bbc/psammead-styles/detection';

const twoOfSixColumnsMaxWidthScaleable = `33.33%`;
// (2 / 6) * 100 = 0.3333333333 = 33.33%

const fullWidthColumnsMaxScaleable = `100%`;
// (12 / 12) * 100 = 100 = 100%

const halfWidthColumnsMaxScaleable = `50%`;

const bulletinWrapperStyles = `
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: ${GEL_SPACING_DBL};
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

const imageWrapperStyles = `
  vertical-align: top;
  display: inline-block;
  grid-column: 1 / span 6;
  @supports (${grid}) {
    width: initial;
  }
`;

const textWrapperStyles = `
  grid-column: 1 / span 6;
  display: inline-block;
  @supports (${grid}) {
    width: initial;
    padding-left: 0;
  }
`;

const TVBulletinWrapper = styled.div`
  ${bulletinWrapperStyles};
  padding: ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL};
  }
`;

const TVImageWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 3;
    width: ${halfWidthColumnsMaxScaleable};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 4;
    width: ${halfWidthColumnsMaxScaleable};
  }
  ${imageWrapperStyles};
`;

const TVTextWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 4 / span 3;
    width: ${halfWidthColumnsMaxScaleable};
    padding-left: ${GEL_SPACING_DBL};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    grid-column: 5 / span 4;
    width: ${halfWidthColumnsMaxScaleable};
    padding-left: ${GEL_SPACING_DBL};
  }
  ${textWrapperStyles};
`;

const RadioBulletinWrapper = styled.div`
  ${bulletinWrapperStyles};
  background-color: ${C_LUNAR};
`;

const RadioImageWrapper = styled.div`
  padding: ${GEL_SPACING} ${GEL_SPACING} 0 ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 2;
    width: ${twoOfSixColumnsMaxWidthScaleable};
    padding: 0;
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    display: block;
    width: ${fullWidthColumnsMaxScaleable};
    grid-column: 1 / span 8;
    padding: ${GEL_SPACING} ${GEL_SPACING} 0 ${GEL_SPACING};
  }
  ${imageWrapperStyles};
`;

const RadioTextWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${({ fullWidth }) =>
      fullWidth
        ? `
          grid-column: 1 / span 6;
          padding: 0;
          width: 100%;
          `
        : `
          grid-column: 3 / span 4;
          padding-left: ${GEL_SPACING_DBL};
        `}
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    display: block;
    padding-left: 0;
    grid-column: 1 / span 8;
  }
  ${textWrapperStyles};
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  > svg {
    color: ${C_WHITE};
    fill: currentColor;
  }
  margin: 0 0.25rem;
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: inline-block;
    margin-left: 0;
    padding-left: ${GEL_SPACING};
  }
`;

const PlayCTA = styled.div.attrs({ 'aria-hidden': true })`
  background-color: ${({ isLive }) => (isLive ? C_POSTBOX : C_EBON)};
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getPica(script)};
  color: ${C_WHITE};
  align-items: center;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    ${({ fullWidth }) =>
      !fullWidth &&
      `
        display: inline-block;
        padding: ${GEL_SPACING} ${GEL_SPACING_DBL} ${GEL_SPACING} 0;
      `}
  }
`;

const BulletinSummary = styled.p`
  ${({ script }) => script && getLongPrimer(script)}
  ${({ service }) => service && getSansRegular(service)}
  color: ${C_SHADOW};
  margin: 0; /* Reset */
  ${({ type }) => type === 'audio' && `padding: 0 ${GEL_SPACING};`}
  @media(min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding-left: 0;
    padding-right: 0;
    ${({ applyLeftPadding }) =>
      applyLeftPadding && `padding-left: ${GEL_SPACING}`}

  }
  padding-bottom: ${GEL_SPACING_DBL};
  @media(min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    ${({ type }) => type === 'audio' && `padding-left: ${GEL_SPACING}`}
  }
`;

const TVHeading = styled.h3`
  ${({ script }) => script && getPica(script)}
  ${({ service }) => getSansBold(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING} 0;
  @media(min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding:0 0 ${GEL_SPACING} 0;
  }
`;

const RadioHeading = styled.h3`
  ${({ script }) => script && getPica(script)}
  ${({ service }) => getSansBold(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING} ${GEL_SPACING};
  @media(min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} 0;
    ${({ applyLeftPadding }) =>
      applyLeftPadding && `padding-left: ${GEL_SPACING}`}
  }

  @media(min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING};
  }
`;

const Bulletin = ({
  script,
  service,
  isLive,
  headlineText,
  summaryText,
  image,
  type,
  ctaText,
  ctaLink,
  liveText,
}) => {
  const isAudio = type === 'audio';
  const BulletinWrapper = isAudio ? RadioBulletinWrapper : TVBulletinWrapper;
  const ImageWrapper = isAudio ? RadioImageWrapper : TVImageWrapper;
  const TextWrapper = isAudio ? RadioTextWrapper : TVTextWrapper;
  const BulletinHeading = isAudio ? RadioHeading : TVHeading;

  const hasImage = !!image; // convert to boolean value
  const fullWidth = !hasImage && isAudio;

  return (
    <BulletinWrapper hasImage={hasImage}>
      {image && <ImageWrapper>{image}</ImageWrapper>}
      <TextWrapper fullWidth={fullWidth}>
        <BulletinHeading
          script={script}
          service={service}
          applyLeftPadding={fullWidth}
        >
          <VisuallyHiddenText>
            {isLive ? `${ctaText} ${liveText} ` : `${ctaText} `}
          </VisuallyHiddenText>
          {isLive && <LiveLabel service={service}>{liveText}</LiveLabel>}
          <Link href={ctaLink}>{headlineText}</Link>
        </BulletinHeading>
        <BulletinSummary
          script={script}
          service={service}
          type={type}
          applyLeftPadding={fullWidth}
        >
          {summaryText}
        </BulletinSummary>
        <PlayCTA
          isLive={isLive}
          service={service}
          script={script}
          fullWidth={fullWidth}
        >
          <IconWrapper fullWidth={fullWidth}>{mediaIcons[type]}</IconWrapper>
          {ctaText}
        </PlayCTA>
      </TextWrapper>
    </BulletinWrapper>
  );
};

Bulletin.propTypes = {
  type: oneOf(['video', 'audio']).isRequired,
  isLive: bool,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  ctaText: string.isRequired,
  ctaLink: string.isRequired,
  image: node,
  summaryText: string.isRequired,
  headlineText: string.isRequired,
  liveText: string,
};

Bulletin.defaultProps = {
  isLive: false,
  image: null,
  liveText: 'LIVE',
};

export default Bulletin;
