import React from 'react';
import styled from 'styled-components';
import { getPica } from '@bbc/gel-foundations/typography';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { C_WHITE, C_EBON } from '@bbc/psammead-styles/colours';
import { string, shape, node } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const SIZE_ABOVE_600PX = '3rem'; // 48px
const SIZE_BELOW_600PX = '2.5rem'; // 40px

const getDimensions = size => `
  height: ${size}
  width: ${size}
`;

const StyledLink = styled.a`
  ${({ script }) => script && getPica(script)}
  ${({ service }) => service && getSansRegular(service)}

  display: inline-block;
  border: 0.0625rem solid ${C_WHITE};
  color: ${C_WHITE};
  text-align: center;
  text-decoration: none;

  &:hover {
    border-width: 0.25rem;
    line-height: 2.675rem;
  }
  &:focus {
    background-color: ${C_WHITE};
    color: ${C_EBON};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    line-height: ${SIZE_ABOVE_600PX};
    ${getDimensions(SIZE_ABOVE_600PX)}
  }
  @media (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    line-height: ${SIZE_BELOW_600PX};
    ${getDimensions(SIZE_BELOW_600PX)}
    &:hover {
      line-height: 2.125rem;
    }
  }
`;

const ScriptSwitch = ({ children, script, service, href, variant }) => {
  return (
    <StyledLink
      script={script}
      service={service}
      href={href}
      data-variant={variant}
    >
      {children}
    </StyledLink>
  );
};

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
