import React from 'react';
import styled from 'styled-components';
import { oneOf, shape, string } from 'prop-types';

import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { getBrevier, getDoublePica } from '@bbc/gel-foundations/typography';
import { C_EBON, C_WHITE } from '@bbc/psammead-styles/colours';
import { getSansBold, getSansRegular } from '@bbc/psammead-styles/font-styles';

import {
  minClickableHeightRem,
  paddingDir,
  paddingReverseDir,
} from './constants';

const Title = styled.span`
  ${({ script }) => script && getDoublePica(script)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  ${({ service }) => getSansRegular(service)}
  display: inline-block;
  z-index: 1;

  /* Unset the browser's default margins. */
  margin: 0;

  ${paddingDir}: ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${paddingDir}: ${GEL_SPACING_DBL};
  }
`;

Title.propTypes = {
  dir: oneOf(['ltr', 'rtl']).isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

const FlexContainer = styled.span`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  min-height: ${minClickableHeightRem}rem;
`;

const FlexTextContainer = styled(FlexContainer).attrs({
  role: 'text',
})``;

/* eslint-disable react/prop-types */
export const PlainTitle = ({
  labelId,
  children: title,
  dir,
  script,
  service,
  /* eslint-enable react/prop-types */
}) => (
  <FlexContainer>
    <Title script={script} dir={dir} id={labelId} service={service}>
      {title}
    </Title>
  </FlexContainer>
);

const SectionLabelLink = styled.a.attrs(props => ({
  'aria-labelledby': props.labelId,
}))`
  color: ${C_EBON};
  text-decoration: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const IndexLinkCta = styled.span.attrs({
  'aria-hidden': 'true',
})`
  ${({ script }) => script && getBrevier(script)};
  ${({ service }) => getSansBold(service)};
  color: ${C_EBON};
  background-color: ${C_WHITE};
  ${paddingReverseDir}: ${GEL_SPACING_DBL};
  z-index: 1;
`;

/* eslint-disable react/prop-types */
export const LinkTitle = ({
  href,
  labelId,
  children,
  dir,
  linkText,
  script,
  service,
  /* eslint-enable react/prop-types */
}) => (
  <SectionLabelLink href={href} labelId={labelId}>
    <FlexTextContainer>
      <Title id={labelId} dir={dir} script={script} service={service}>
        {children}
      </Title>
      <IndexLinkCta dir={dir} script={script} service={service}>
        {linkText}
      </IndexLinkCta>
    </FlexTextContainer>
  </SectionLabelLink>
);
