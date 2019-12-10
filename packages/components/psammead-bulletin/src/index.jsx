import React from 'react';
import styled, { css } from 'styled-components';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  C_WHITE,
  C_POSTBOX,
  C_SHADOW,
  C_EBON,
  C_LUNAR,
} from '@bbc/psammead-styles/colours';
import { string, oneOf, node, bool, shape } from 'prop-types';
import {
  getSansRegular,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getPica, getLongPrimer } from '@bbc/gel-foundations/typography';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { Link, LiveLabel } from '@bbc/psammead-story-promo';
import { grid } from '@bbc/psammead-styles/detection';

const twoOfSixColumnsMaxWidthScaleable = `33.33%`;
// (2 / 6) * 100 = 0.3333333333 = 33.33%

const fourOfSixColumnsMaxWidthScaleable = `66.67%`;
// (4 / 6) * 100 = 66.6666666667 = 66.67%

const fullWidthColumnsMaxScaleable = `100%`;
// (12 / 12) * 100 = 100 = 100%

const halfWidthColumnsMaxScaleable = `50%`;

const bulletinWrapperStyles = `
  position: relative;
  background-color: ${C_LUNAR};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: ${GEL_SPACING_DBL};
`;

const imageWrapperStyles = `
  vertical-align: top;
  display: inline-block;
  grid-column: 1 / span 6;
  padding: ${GEL_SPACING} ${GEL_SPACING} 0 ${GEL_SPACING};
  @supports (${grid}) {
    width: initial;
  }
`;

const textWrapperStyles = `
  grid-column: 1 / span 6;
  display: inline-block;
  width: ${fullWidthColumnsMaxScaleable};
  @supports (${grid}) {
    width: initial;
    padding: 0;
  }
`;

const TVBulletinWrapper = styled.div`
  ${bulletinWrapperStyles};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL};
  }
`;

const TVImageWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 3;
    width: ${halfWidthColumnsMaxScaleable};
    padding: 0;
  }
  ${imageWrapperStyles};
`;

const TVTextWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 4 / span 3;
    width: ${halfWidthColumnsMaxScaleable};
    ${({ dir }) =>
      dir === 'ltr'
        ? `padding-left: ${GEL_SPACING_DBL};`
        : `padding-right: ${GEL_SPACING_DBL};`}
  }

  ${textWrapperStyles};
`;

const RadioBulletinWrapper = styled.div`
  ${bulletinWrapperStyles};
  background-color: ${C_LUNAR};
`;

const RadioImageWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 2;
    width: ${twoOfSixColumnsMaxWidthScaleable};
    padding: 0;
  }
  ${imageWrapperStyles};
`;

const RadioTextWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 3 / span 4;
    width: ${fourOfSixColumnsMaxWidthScaleable};
    ${({ dir }) =>
      dir === 'ltr'
        ? `padding-left: ${GEL_SPACING_DBL};`
        : `padding-right: ${GEL_SPACING_DBL};`}
  }
  ${textWrapperStyles};
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  > svg {
    color: ${C_WHITE};
    fill: currentColor;
    width: 1.0625rem;
    height: 1rem;
    margin-top: -0.0938rem;  /* to center the icon on display inline-block */
  }
  ${({ dir }) =>
    dir === 'ltr'
      ? `padding-right: ${GEL_SPACING};`
      : `padding-left: ${GEL_SPACING};`}

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: inline-block;
  }
`;

const PlayCTA = styled.div.attrs({ 'aria-hidden': true })`
  background-color: ${({ isLive }) => (isLive ? C_POSTBOX : C_EBON)};
  border: 0.0625rem solid transparent;
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getPica(script)};
  color: ${C_WHITE};
  align-items: center;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: inline-block;
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
    ${({ isAudio }) => isAudio && `margin-bottom: ${GEL_SPACING_DBL};`}
  }
`;

const BulletinSummary = styled.p`
  ${({ script }) => script && getLongPrimer(script)}
  ${({ service }) => service && getSansRegular(service)}
  color: ${C_SHADOW};
  margin: 0; /* Reset */
  padding: 0 ${GEL_SPACING};
  @media(min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding-left: 0;
    padding-right: ${({ mediaType }) =>
      mediaType === 'audio' ? `${GEL_SPACING}` : `0`};
  }
  padding-bottom: ${GEL_SPACING_DBL};
`;

const headingStyles = css`
  ${({ service }) => service && getSerifMedium(service)}
  ${({ script }) => script && getPica(script)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING};
`;

const TVHeading = styled.h3`
  ${headingStyles}
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: 0 0 ${GEL_SPACING} 0;
  }
`;

const RadioHeading = styled.h3`
  ${headingStyles}
  @media(min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} 0;
  }
`;

const Bulletin = ({
  script,
  service,
  isLive,
  headlineText,
  summaryText,
  image,
  mediaType,
  ctaText,
  ctaLink,
  liveText,
  dir,
  lang,
  offScreenText,
}) => {
  const isAudio = mediaType === 'audio';
  const BulletinWrapper = isAudio ? RadioBulletinWrapper : TVBulletinWrapper;
  const ImageWrapper = isAudio ? RadioImageWrapper : TVImageWrapper;
  const TextWrapper = isAudio ? RadioTextWrapper : TVTextWrapper;
  const BulletinHeading = isAudio ? RadioHeading : TVHeading;

  return (
    <BulletinWrapper>
      <ImageWrapper>{image}</ImageWrapper>
      <TextWrapper dir={dir}>
        <BulletinHeading script={script} service={service} dir={dir}>
          <Link href={ctaLink}>
            {/* eslint-disable jsx-a11y/aria-role */}
            <span role="text">
              <VisuallyHiddenText lang={lang}>
                {`${offScreenText},`}
              </VisuallyHiddenText>
              {isLive && (
                <LiveLabel service={service} dir={dir}>
                  {liveText}
                </LiveLabel>
              )}
              <span>{headlineText}</span>
            </span>
          </Link>
        </BulletinHeading>
        <BulletinSummary
          script={script}
          service={service}
          mediaType={mediaType}
        >
          {summaryText}
        </BulletinSummary>
        <PlayCTA
          isLive={isLive}
          service={service}
          script={script}
          isAudio={isAudio}
          dir={dir}
        >
          <IconWrapper dir={dir}>{mediaIcons[mediaType]}</IconWrapper>
          {ctaText}
        </PlayCTA>
      </TextWrapper>
    </BulletinWrapper>
  );
};

Bulletin.propTypes = {
  mediaType: oneOf(['video', 'audio']).isRequired,
  isLive: bool,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  ctaText: string.isRequired,
  ctaLink: string.isRequired,
  image: node,
  summaryText: string.isRequired,
  headlineText: string.isRequired,
  liveText: string,
  dir: oneOf(['ltr', 'rtl']),
  lang: string,
  offScreenText: string.isRequired,
};

Bulletin.defaultProps = {
  isLive: false,
  image: null,
  liveText: 'LIVE',
  dir: 'ltr',
  lang: 'en-GB',
};

export default Bulletin;
