import React from 'react';
import styled from 'styled-components';
import { getPica } from '@bbc/gel-foundations/typography';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { string, shape, node, func } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const touchAreaStyles = `
&::after {
  content: '';
  position: absolute;
  top: -0.25rem;
  left: -0.25rem;
  right: 0;
  bottom: 0;
  height: 2.75rem;
  width: 2.75rem;
  margin: 0 0.25rem;
}`;

const StyledLink = styled.a`
  ${({ script }) => script && getPica(script)}
  ${({ service }) => service && getSansRegular(service)}
  position: relative;
  display: inline-block;
  color: ${C_WHITE};
  text-decoration: none;
  padding: 0 1rem;
  height: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0.0625rem solid ${C_WHITE};
  }

  &:hover::before,
  &:focus::before {
    border: 0.25rem solid ${C_WHITE};
  }

  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    line-height: 2.5rem;
    height: 2.5rem;
    padding: 0 0.75rem;
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    line-height: 3rem;

    ${touchAreaStyles}
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    height: 2.25rem;
    line-height: 2.25rem;
    padding: 0 0.625rem;

    ${touchAreaStyles}
  }
`;

const ScriptLink = ({ children, script, service, href, variant, onClick }) => (
  <StyledLink
    script={script}
    service={service}
    href={href}
    data-variant={variant}
    onClick={onClick}
  >
    {children}
  </StyledLink>
);

const noopFunction = () => {};

ScriptLink.defaultProps = {
  variant: null,
  onClick: noopFunction,
};

ScriptLink.propTypes = {
  children: node.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  href: string.isRequired,
  variant: string,
  onClick: func,
};

export default ScriptLink;
