import React from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool, oneOf } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { C_WHITE, C_POSTBOX, C_GHOST } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getPica } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const TOP_BOTTOM_SPACING = '0.75rem'; // 12px
const CURRENT_ITEM_HOVER_BORDER = '0.3125rem'; // 5px

/* White with 30% transparency over #B80000 */
const BORDER_COLOR = '#eab3b3';

/* Skip to content */
const SKIP_LINK_COLOR = '#333';
const SKIP_LINK_BORDER = '0.1875rem'; // 3px
const SKIP_LINK_TOP_POSITION_LARGE = '-4rem'; // -64px
const SKIP_LINK_TOP_POSITION_SMALL = '-3rem'; // -48px

const NavWrapper = styled.div`
  position: relative;
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  margin: 0 auto;
`;

const SkipLink = styled.a`
  position: absolute;
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  padding: ${TOP_BOTTOM_SPACING} ${GEL_SPACING};
  background-color: #ffffff;
  border: ${SKIP_LINK_BORDER} solid #000;
  color: ${SKIP_LINK_COLOR};
  text-decoration: none;
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSansRegular(service)}

  &:focus {
    clip-path: none;
    clip: auto;
    height: auto;
    width: auto;
    top: ${SKIP_LINK_TOP_POSITION_SMALL};
    left: ${GEL_SPACING};

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      top: ${SKIP_LINK_TOP_POSITION_LARGE};
    }

    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      left: 0;
    }
  }
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
`;

const StyledListItem = styled.li`
  display: inline-block;
  position: relative;
  z-index: 2;

  /* Trick to display a border between the list items when it breaks into multiple lines, which takes the full width */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
    border-bottom: 0.0625rem solid ${BORDER_COLOR};
    z-index: -1;
  }
`;

const ListItemBorder = css`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: ${GEL_SPACING_HLF} solid ${C_WHITE};
`;

const StyledLink = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_GHOST};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: ${TOP_BOTTOM_SPACING} ${GEL_SPACING_DBL};

  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    padding: ${TOP_BOTTOM_SPACING} ${GEL_SPACING};
  }

  &:hover::after {
    ${ListItemBorder}
    ${({ currentLink }) =>
      currentLink &&
      css`
        border-bottom: ${CURRENT_ITEM_HOVER_BORDER} solid ${C_WHITE};
      `}
  }

  &:focus::after {
    ${ListItemBorder}
    top: 0;
    border: 0.25rem solid ${C_WHITE};
  }
`;

const StyledSpan = styled.span`
  &::after {
    ${ListItemBorder}
  }
`;

const CurrentLink = ({ children: link, script, currentPageText }) => (
  <>
    <StyledSpan
      // eslint-disable-next-line jsx-a11y/aria-role
      role="text"
      script={script}
    >
      <VisuallyHiddenText>{currentPageText}, </VisuallyHiddenText>
      {link}
    </StyledSpan>
  </>
);

export const NavigationUl = ({ children, ...props }) => (
  <StyledUnorderedList role="list" {...props}>
    {children}
  </StyledUnorderedList>
);

export const NavigationLi = ({
  children: link,
  url,
  script,
  currentPageText,
  active,
  service,
}) => (
  <StyledListItem role="listitem">
    {active && currentPageText ? (
      <StyledLink
        href={url}
        script={script}
        currentLink="true"
        service={service}
        data-navigation={`${link}_${url}`}
      >
        <CurrentLink script={script} currentPageText={currentPageText}>
          {link}
        </CurrentLink>
      </StyledLink>
    ) : (
      <StyledLink
        href={url}
        script={script}
        service={service}
        data-navigation={`${link}_${url}`}
      >
        {link}
      </StyledLink>
    )}
  </StyledListItem>
);

const StyledNav = styled.nav`
  background-color: ${C_POSTBOX};

  ${StyledListItem} {
    ${({ dir }) => css`
      &::after {
        ${dir === 'ltr' ? 'left' : 'right'}: 0;
      }
    `}
  }
`;

const Navigation = ({ children, script, skipLinkText, service, dir }) => (
  <StyledNav role="navigation" dir={dir}>
    <NavWrapper>
      <SkipLink href="#content" script={script} service={service}>
        {skipLinkText}
      </SkipLink>
      {children}
    </NavWrapper>
  </StyledNav>
);

Navigation.propTypes = {
  children: node.isRequired,
  script: shape(scriptPropType).isRequired,
  skipLinkText: string.isRequired,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

Navigation.defaultProps = { dir: 'ltr' };

NavigationUl.propTypes = {
  children: node.isRequired,
};

NavigationLi.propTypes = {
  children: node.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  active: bool,
  currentPageText: string,
  service: string.isRequired,
};

NavigationLi.defaultProps = {
  active: false,
  currentPageText: null,
};

CurrentLink.propTypes = {
  children: string.isRequired,
  script: shape(scriptPropType).isRequired,
  currentPageText: string,
};

CurrentLink.defaultProps = {
  currentPageText: null,
};

export default Navigation;
