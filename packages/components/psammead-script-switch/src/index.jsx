import React from 'react';
import styled from 'styled-components';
import { getPica } from '@bbc/gel-foundations/typography';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { C_WHITE, C_EBON } from '@bbc/psammead-styles/colours';
import { string, shape, node } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const StyledLink = styled.a`
  ${({ script }) => script && getPica(script)}
  ${({ service }) => service && getSansRegular(service)}

  display: inline-block;
  border: 0.0625rem solid ${C_WHITE};
  color: ${C_WHITE};
  text-decoration: none;
  padding: 0 1rem;
  height: 3rem;

  &:hover {
    border-width: 0.25rem;
    line-height: 2.62rem;
    padding: 0 0.81rem;
  }
  &:focus {
    background-color: ${C_WHITE};
    color: ${C_EBON};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    line-height: 3rem;
  }
  @media (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    line-height: 2.5rem;
    height: 2.5rem;
    padding: 0 0.75rem;
    &:hover {
      line-height: 2.1rem;
      padding: 0 0.56rem;
    }
  }
`;

const ScriptSwitch = ({ children, script, service, href, variant }) => (
  <StyledLink
    script={script}
    service={service}
    href={href}
    data-variant={variant}
  >
    {children}
  </StyledLink>
);

ScriptSwitch.defaultProps = {
  variant: null,
};

ScriptSwitch.propTypes = {
  children: node.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  href: string.isRequired,
  variant: string,
};

export default ScriptSwitch;
