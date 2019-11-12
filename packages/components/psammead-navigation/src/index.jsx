import React from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool, oneOf } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { navigationIcons } from '@bbc/psammead-assets/svgs';
import {
  C_WHITE,
  C_POSTBOX,
  C_GHOST,
  C_EBON,
  C_SHADOW,
} from '@bbc/psammead-styles/colours';
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

const DropdownWrapper = styled.div`
  background-color: ${C_EBON};
  width: 100vw;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

const CrossButton = styled.button`
  background-color: ${C_EBON};
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  margin: 0;
  border: 0;

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 0.25rem ${C_WHITE};
    cursor: pointer;
  }
`;

const DropdownUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-right: ${GEL_SPACING};
  padding-left: ${GEL_SPACING};
  border-bottom: 0.125rem solid ${C_SHADOW};
`;

const DropdownLi = styled.li`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 0.0625rem solid ${C_SHADOW};

  &:last-child {
    padding-bottom: ${GEL_SPACING_DBL};
    border: 0;
  }
`;

const StyledDropdownLink = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => service && getSansRegular(service)}
  color: ${C_WHITE};

  &:hover,
  &:focus {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledCurrentLink = styled.span`
  ${({ dir }) =>
    dir === 'ltr'
      ? `border-left: ${GEL_SPACING_HLF} solid ${C_WHITE};
        padding-left: ${GEL_SPACING};`
      : `border-right: ${GEL_SPACING_HLF} solid ${C_WHITE};
        padding-right: ${GEL_SPACING};`}
`;

const CurrentDropdownLink = ({ children, currentPageText, dir }) => (
  <>
    <StyledCurrentLink dir={dir}>
      <VisuallyHiddenText>{currentPageText}, </VisuallyHiddenText>
      {children}
    </StyledCurrentLink>
  </>
);

export const DropdownNavigationLi = ({
  children,
  script,
  currentPageText,
  active,
  service,
  url,
  dir,
}) => (
  <DropdownLi role="listitem">
    {active && currentPageText ? (
      <StyledDropdownLink script={script} service={service} url={url}>
        <CurrentDropdownLink currentPageText={currentPageText} dir={dir}>
          {children}
        </CurrentDropdownLink>
      </StyledDropdownLink>
    ) : (
      <StyledDropdownLink script={script} service={service} url={url}>
        {children}
      </StyledDropdownLink>
    )}
  </DropdownLi>
);

export const AmpDropdown = ({ closeAction, children }) => (
  <DropdownWrapper>
    <CrossButton on={closeAction}>{navigationIcons.cross}</CrossButton>
    <DropdownUl>{children}</DropdownUl>
  </DropdownWrapper>
);

export const CanonicalDropdown = ({ onClose, children }) => (
  <DropdownWrapper>
    <CrossButton onClick={onClose}>{navigationIcons.cross}</CrossButton>
    <DropdownUl>{children}</DropdownUl>
  </DropdownWrapper>
);

DropdownNavigationLi.propTypes = {
  children: node.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  active: bool,
  currentPageText: string,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

DropdownNavigationLi.defaultProps = {
  active: false,
  currentPageText: null,
  dir: 'ltr',
};

CurrentDropdownLink.propTypes = {
  children: string.isRequired,
  currentPageText: string,
  dir: oneOf(['ltr', 'rtl']),
};

CurrentDropdownLink.defaultProps = {
  currentPageText: null,
  dir: 'ltr',
};

AmpDropdown.propTypes = {
  children: string.isRequired,
  closeAction: node.isRequired,
};

CanonicalDropdown.propTypes = {
  children: string.isRequired,
  onClose: node.isRequired,
};

const HamburgerButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  background-color: ${C_POSTBOX};
  padding: 0;
  margin: 0;
  border: 0;

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 0.25rem ${C_WHITE};
    cursor: pointer;
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

export const AmpHamburgerMenu = (announcedText, action, isMenuOpen) => (
  <HamburgerButton
    aria-label={announcedText}
    on={action}
    aria-expanded={isMenuOpen}
  >
    {navigationIcons.hamburger}
  </HamburgerButton>
);

export const CanonicalHamburgerMenu = (announcedText, onClick, isMenuOpen) => (
  <HamburgerButton
    aria-label={announcedText}
    onClick={onClick}
    aria-expanded={isMenuOpen}
  >
    {navigationIcons.hamburger}
  </HamburgerButton>
);

const NavWrapper = styled.div`
  position: relative;
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  margin: 0 auto;
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
  ...props
}) => (
  <StyledListItem role="listitem">
    {active && currentPageText ? (
      <StyledLink
        href={url}
        script={script}
        currentLink="true"
        service={service}
        {...props}
      >
        <CurrentLink script={script} currentPageText={currentPageText}>
          {link}
        </CurrentLink>
      </StyledLink>
    ) : (
      <StyledLink href={url} script={script} service={service} {...props}>
        {link}
      </StyledLink>
    )}
  </StyledListItem>
);

const StyledNav = styled.nav`
  background-color: ${C_POSTBOX};
  border-top: 0.0625rem solid ${C_WHITE};
  ${StyledListItem} {
    ${({ dir }) => css`
      &::after {
        ${dir === 'ltr' ? 'left' : 'right'}: 0;
      }
    `}
  }
`;

const Navigation = ({ children, dir }) => (
  <StyledNav role="navigation" dir={dir}>
    <NavWrapper>{children}</NavWrapper>
  </StyledNav>
);

Navigation.propTypes = {
  children: node.isRequired,
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
