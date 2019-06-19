import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { C_WHITE, C_POSTBOX, C_GHOST } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getPica, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

/* White with 30% transparency over #B80000 */
const BORDER_COLOR = '#eab3b3';

const StyledNav = styled.nav`
  padding: 0 ${GEL_SPACING};
  background-color: ${C_POSTBOX};
  position: relative;

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    padding: 0;
  }
`;

const SkipLink = styled.a`
  position: absolute;
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  padding: 0.75rem 0.5rem;
  background-color: #ffffff;
  border: 0.1875rem solid #000;
  color: #333;
  text-decoration: none;
  font-family: ${GEL_FF_REITH_SANS};

  &:focus {
    clip-path: none;
    clip: auto;
    top: -3.75rem;
    left: ${GEL_SPACING_DBL};
    height: auto;
    width: auto;

    @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      top: -3rem;
      left: 0.5rem;
    }
  }
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

  /* Display a transparent border line > 600px */
  &::after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 0.0625rem solid transparent;
    z-index: 1;
  }

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    &::after {
      content: none;
    }
  }
`;

const StyledListItem = styled.li`
  display: inline-block;
  position: relative;
  z-index: 2;

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    /* Trick to display a border between the list items, which takes the full width */
    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN};
      border-bottom: 1px solid ${BORDER_COLOR};
      z-index: -1;

      ${({ dir }) =>
        dir === 'ltr'
          ? css`
              left: 0;
            `
          : css`
              right: 0;
            `};
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

  &:hover::after {
    ${ListItemBorder}
  }

  &:focus::after {
    ${ListItemBorder}
    top: 0;
    border: 0.25rem solid ${C_WHITE};
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

export const NavigationLi = ({ children: link, url, script, dir, active }) => (
  <StyledListItem role="listitem" dir={dir}>
    {active ? (
      <CurrentItem script={script}>{link}</CurrentItem>
    ) : (
      <StyledLink href={url} script={script}>
        {link}
      </StyledLink>
    )}
  </StyledListItem>
);

const Navigation = ({ children, skipLinkText }) => (
  <StyledNav role="navigation">
    <SkipLink href="#content">{skipLinkText}</SkipLink>
    {children}
  </StyledNav>
);

Navigation.propTypes = {
  children: node.isRequired,
  skipLinkText: string.isRequired,
};

NavigationUl.propTypes = {
  children: node.isRequired,
};

NavigationLi.propTypes = {
  children: node.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: string,
  active: bool,
};

NavigationLi.defaultProps = {
  dir: 'ltr',
  active: false,
};

CurrentItem.propTypes = {
  children: string.isRequired,
  script: shape(scriptPropType).isRequired,
};

export default Navigation;
