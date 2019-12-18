import React from 'react';
import styled from 'styled-components';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { getPica } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { string, shape, node, func } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const StyledLink = styled.a`
  ${({ script }) => script && getPica(script)}
  ${({ service }) => service && getSansRegular(service)}
  display: inline-block;
  color: ${C_WHITE};
  text-decoration: none;
  height: 3rem;
  border: 1px solid ${C_WHITE};
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    line-height: calc(3rem - 8px);
  }
  > span {
    margin: 3px;
    display: inline-block;
    height: calc(100%);
    padding: 0 1rem;
  }

  &:hover span {
    margin: 0;
    border: 3px solid white;
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
    <span>{children}</span>
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
