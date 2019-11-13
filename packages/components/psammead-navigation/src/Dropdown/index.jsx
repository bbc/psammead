import React from 'react';
import styled from 'styled-components';
import { shape, string, node, bool, oneOf } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { navigationIcons } from '@bbc/psammead-assets/svgs';
import {
  C_WHITE,
  C_POSTBOX,
  C_EBON,
  C_SHADOW,
} from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { getPica } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

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
