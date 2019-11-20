import React from 'react';
import styled from 'styled-components';
import { shape, string, node, bool, func, oneOf } from 'prop-types';
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

const MENU_ICON_SIDE_LENGTH = '2.75rem'; // 44px

const getStyles = dir => {
  const direction = dir === 'ltr' ? 'left' : 'right';
  return `border-${direction}: ${GEL_SPACING_HLF} solid ${C_WHITE};
          padding-${direction}: ${GEL_SPACING}`;
};

const DropdownWrapper = styled.div`
  background-color: ${C_EBON};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

const CrossButton = styled.button`
  background-color: ${C_EBON};
  width: ${MENU_ICON_SIDE_LENGTH};
  height: ${MENU_ICON_SIDE_LENGTH};
  padding: 0;
  margin: 0;
  border: 0;

  &:focus {
    box-shadow: inset 0 0 0 ${GEL_SPACING_HLF} ${C_WHITE};
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
  text-decoration: none;

  &:focus {
    text-decoration: underline;
  }
`;

const StyledCurrentLink = styled.span`
  ${({ dir }) => getStyles(dir)}
`;

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
      <StyledDropdownLink script={script} service={service} href={url}>
        <StyledCurrentLink
          dir={dir}
          // eslint-disable-next-line jsx-a11y/aria-role
          role="text"
        >
          <VisuallyHiddenText>{currentPageText}</VisuallyHiddenText>
          {children}
        </StyledCurrentLink>
      </StyledDropdownLink>
    ) : (
      <StyledDropdownLink script={script} service={service} href={url}>
        {children}
      </StyledDropdownLink>
    )}
  </DropdownLi>
);

export const AmpDropdown = ({ announcedText, onClose, children }) => (
  <DropdownWrapper>
    <CrossButton
      aria-label={announcedText}
      on={onClose}
      // eslint-disable-next-line react/jsx-boolean-value
      aria-expanded="true"
    >
      {navigationIcons.cross}
    </CrossButton>
    <DropdownUl role="list">{children}</DropdownUl>
  </DropdownWrapper>
);

export const CanonicalDropdown = ({ announcedText, onClose, children }) => (
  <DropdownWrapper>
    <CrossButton
      aria-label={announcedText}
      onClick={onClose}
      // eslint-disable-next-line react/jsx-boolean-value
      aria-expanded="true"
    >
      {navigationIcons.cross}
    </CrossButton>
    <DropdownUl role="list">{children}</DropdownUl>
  </DropdownWrapper>
);

const HamburgerButton = styled.button`
  width: ${MENU_ICON_SIDE_LENGTH};
  height: ${MENU_ICON_SIDE_LENGTH};
  background-color: ${C_POSTBOX};
  padding: 0;
  margin: 0;
  border: 0;

  &:focus {
    box-shadow: inset 0 0 0 ${GEL_SPACING_HLF} ${C_WHITE};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
  }
`;

export const AmpHamburgerMenu = ({ announcedText, onOpen }) => (
  <HamburgerButton aria-label={announcedText} on={onOpen} aria-expanded="false">
    {navigationIcons.hamburger}
  </HamburgerButton>
);

export const CanonicalHamburgerMenu = ({ announcedText, onOpen }) => (
  <HamburgerButton
    aria-label={announcedText}
    onClick={onOpen}
    aria-expanded="false"
  >
    {navigationIcons.hamburger}
  </HamburgerButton>
);

DropdownNavigationLi.propTypes = {
  children: string.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  active: bool,
  currentPageText: string,
  dir: oneOf(['ltr', 'rtl']),
};

DropdownNavigationLi.defaultProps = {
  active: false,
  currentPageText: null,
  dir: 'ltr',
};

AmpDropdown.propTypes = {
  announcedText: string.isRequired,
  children: node.isRequired,
  onClose: func.isRequired,
};

CanonicalDropdown.propTypes = {
  announcedText: string.isRequired,
  children: node.isRequired,
  onClose: func.isRequired,
};

AmpHamburgerMenu.propTypes = {
  announcedText: string.isRequired,
  onClose: string.isRequired,
};

CanonicalHamburgerMenu.propTypes = {
  announcedText: string.isRequired,
  onOpen: func.isRequired,
};
