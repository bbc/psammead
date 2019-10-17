import React from 'react';
import styled from 'styled-components';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  C_WHITE,
  C_POSTBOX,
  C_SHADOW,
  C_EBON,
} from '@bbc/psammead-styles/colours';
import { string, oneOf, node, bool, shape } from 'prop-types';
import { getSansRegular, getSansBold } from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getPica, getLongPrimer } from '@bbc/gel-foundations/typography';
import { mediaIcons } from '@bbc/psammead-assets/svgs';

export const Bulletin = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  > svg {
    color: ${C_WHITE};
    fill: currentColor;
  }
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

export const BulletinSummary = styled.p`
  ${({ script }) => script && getLongPrimer(script)};
  ${({ service }) => service && getSansRegular(service)}
  color: ${C_SHADOW};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING_DBL};
`;

export const BulletinHeading = styled.h3`
  ${({ script }) => script && getPica(script)}
  ${({ service }) => getSansBold(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding-top: ${GEL_SPACING_DBL}; 
  padding-bottom:${GEL_SPACING};
`;

export const BulletinCTA = ({
  type,
  isLive,
  dir,
  service,
  script,
  children,
}) => (
  <PlayCTA
    type={type}
    isLive={isLive}
    dir={dir}
    service={service}
    script={script}
  >
    <IconWrapper>{mediaIcons[type.toLowerCase()]}</IconWrapper>
    {children}
  </PlayCTA>
);

BulletinCTA.propTypes = {
  type: oneOf(['video', 'audio']).isRequired,
  isLive: bool,
  dir: oneOf(['ltr', 'rtl']),
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  children: node.isRequired,
};

BulletinCTA.defaultProps = {
  dir: 'ltr',
  isLive: false,
};
