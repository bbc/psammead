import React from 'react';
import styled from 'styled-components';
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
import { getSansRegular, getSansBold } from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getPica, getLongPrimer } from '@bbc/gel-foundations/typography';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { Link, LiveLabel } from '@bbc/psammead-story-promo';

const BulletinWrapper = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }

  ${({ type }) =>
    type.toLowerCase() === 'audio' && `background-color: ${C_LUNAR};`}
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  > svg {
    color: ${C_WHITE};
    fill: currentColor;
  }
  margin: 0 0.25rem;
`;

const PlayCTA = styled.div.attrs({ 'aria-hidden': true })`
  background-color: ${({ isLive }) => (isLive ? C_POSTBOX : C_EBON)};
  ${({ service }) => service && getSansRegular(service)};
  ${({ script }) => script && getPica(script)};
  color: ${C_WHITE};
  text-align: center;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
`;

const BulletinSummary = styled.p`
  ${({ script }) => script && getLongPrimer(script)}
  ${({ service }) => service && getSansRegular(service)}
  color: ${C_SHADOW};
  margin: 0; /* Reset */
  ${({ type }) =>
    type.toLowerCase() === 'audio' && `padding: 0 ${GEL_SPACING};`}
  padding-bottom: ${GEL_SPACING_DBL};
`;

const BulletinHeading = styled.h3`
  ${({ script }) => script && getPica(script)}
  ${({ service }) => getSansBold(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  ${({ type }) =>
    type.toLowerCase() === 'audio'
      ? `padding: ${GEL_SPACING} ${GEL_SPACING};`
      : `padding: ${GEL_SPACING} 0;`}
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
}) => (
  <BulletinWrapper type={type}>
    {image && type === 'video' && image}
    <BulletinHeading script={script} service={service} type={type}>
      <VisuallyHiddenText>
        {isLive ? `${ctaText} ${liveText} ` : `${ctaText} `}
      </VisuallyHiddenText>
      {isLive && <LiveLabel service={service}>{liveText}</LiveLabel>}
      <Link href={ctaLink}>{headlineText}</Link>
    </BulletinHeading>
    <BulletinSummary script={script} service={service} type={type}>
      {summaryText}
    </BulletinSummary>
    <PlayCTA isLive={isLive} service={service} script={script}>
      <IconWrapper>{mediaIcons[type.toLowerCase()]}</IconWrapper>
      {ctaText}
    </PlayCTA>
  </BulletinWrapper>
);

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
