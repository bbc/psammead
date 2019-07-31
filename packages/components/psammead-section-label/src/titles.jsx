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
  display: inline-block;
  z-index: 1;

  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  background-color: ${C_WHITE};

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

export const PlainTitle = ({
  children: title,
  dir,
  labelId,
  script,
  service,
}) => (
  <FlexContainer>
    <Title script={script} dir={dir} id={labelId} service={service}>
      {title}
    </Title>
  </FlexContainer>
);

PlainTitle.propTypes = {
  children: string.isRequired,
  dir: oneOf(['ltr', 'rtl']).isRequired,
  labelId: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

export const LinkTitle = ({
  children: title,
  dir,
  href,
  labelId,
  linkText,
  script,
  service,
}) => (
  <SectionLabelLink href={href} labelId={labelId}>
    <FlexTextContainer>
      <Title id={labelId} dir={dir} script={script} service={service}>
        {title}
      </Title>
      <IndexLinkCta dir={dir} script={script} service={service}>
        {linkText}
      </IndexLinkCta>
    </FlexTextContainer>
  </SectionLabelLink>
);

LinkTitle.propTypes = {
  children: string.isRequired,
  dir: oneOf(['ltr', 'rtl']).isRequired,
  href: string.isRequired,
  labelId: string.isRequired,
  linkText: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};
