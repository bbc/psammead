import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { C_WHITE, C_POSTBOX, C_GHOST } from '@bbc/psammead-styles/colours';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getPica, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const NavigationWrapper = styled.nav`
  padding: 0 ${GEL_SPACING};
  background-color: ${C_POSTBOX};

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    padding: 0;
  }
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  display: inline-block;
  position: relative;
  z-index: 1;

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    /* Trick a separator line which takes the full width */
    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN};
      border-bottom: 1px solid #eab3b3; /* White with 30% transparency over #B80000 */
      z-index: -1;
    }
  }
`;

const ListItemBorder = css`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 0.25rem solid ${C_WHITE};
`;

const StyledLink = styled.a`
  ${props => (props.script ? getPica(props.script) : '')};
  font-family: ${GEL_FF_REITH_SANS};
  color: ${C_GHOST};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem ${GEL_SPACING};

  &:hover::before {
    ${ListItemBorder}
  }
`;

const StyledSpan = styled.span`
  ${props => (props.script ? getPica(props.script) : '')};
  font-family: ${GEL_FF_REITH_SANS};
  color: ${C_GHOST};
  display: inline-block;
  padding: 0.75rem ${GEL_SPACING};

  &::before {
    ${ListItemBorder}
  }
`;

const CurrentItem = ({ children: link, script }) => (
  <Fragment>
    <StyledSpan
      // eslint-disable-next-line jsx-a11y/aria-role
      role="text"
      script={script}
    >
      <VisuallyHiddenText>Current page,</VisuallyHiddenText>
      {link}
    </StyledSpan>
  </Fragment>
);

export const NavigationUl = ({ children, ...props }) => (
  <StyledUnorderedList role="list" {...props}>
    {children}
  </StyledUnorderedList>
);

export const NavigationLi = ({ children: link, url, script, active }) => (
  <StyledListItem role="listitem">
    {active ? (
      <CurrentItem script={script}>{link}</CurrentItem>
    ) : (
      <StyledLink href={url} script={script}>
        {link}
      </StyledLink>
    )}
  </StyledListItem>
);

const Navigation = ({ children }) => (
  <NavigationWrapper role="navigation">{children}</NavigationWrapper>
);

Navigation.propTypes = {
  children: node.isRequired,
};

NavigationUl.propTypes = {
  children: node.isRequired,
};

NavigationLi.propTypes = {
  children: node.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  active: bool,
};

NavigationLi.defaultProps = {
  active: false,
};

CurrentItem.propTypes = {
  children: string.isRequired,
  script: shape(scriptPropType).isRequired,
};

export default Navigation;
