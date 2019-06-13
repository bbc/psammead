import React from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool } from 'prop-types';
import { C_WHITE, C_POSTBOX, C_GHOST } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getPica, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const NavigationWrapper = styled.div`
  padding: 0 ${GEL_SPACING_DBL};
  background-color: ${C_POSTBOX};

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_SPACING};
  }
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const StyledListItem = styled.li`
  display: inline-block;
  position: relative;
  z-index: 2;

  &:last-child > a {
    padding-right: ${GEL_SPACING};
  }

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    &::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;
      width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN};
      border-bottom: 1px solid #eab3b3; /* White with 30% transparency over #B80000 */
      z-index: -1;
    }
  }
`;

const LinkBorder = css`
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: ${GEL_SPACING_DBL};
  border-bottom: 0.25rem solid ${C_WHITE};
`;

const Link = styled.a`
  ${props => (props.script ? getPica(props.script) : '')};
  font-family: ${GEL_FF_REITH_SANS};
  padding: 0.75rem ${GEL_SPACING_DBL} 0.75rem 0;
  color: ${C_GHOST};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  ${({ active }) =>
    active &&
    css`
      &::before {
        ${LinkBorder}
      }
    `}

  &:hover::before {
    ${LinkBorder}
  }

  &:last-child:hover::before {
    right: ${GEL_SPACING};
  }
`;

export const NavigationUl = ({ children, ...props }) => (
  <StyledUnorderedList role="list" {...props}>
    {children}
  </StyledUnorderedList>
);

export const NavigationLi = ({ children, ...props }) => {
  const { url, script, active } = props;

  return (
    <StyledListItem role="listitem">
      <Link href={url} script={script} active={active}>
        {children}
      </Link>
    </StyledListItem>
  );
};

const Navigation = ({ children }) => (
  <NavigationWrapper>{children}</NavigationWrapper>
);

NavigationUl.propTypes = {
  children: node.isRequired,
};

NavigationLi.defaultProps = {
  active: false,
};

NavigationLi.propTypes = {
  children: node.isRequired,
  url: string,
  script: shape(scriptPropType).isRequired,
  active: bool,
};

Navigation.propTypes = {
  children: string.isRequired,
};

NavigationLi.defaultProps = {
  url: null,
};

export default Navigation;
