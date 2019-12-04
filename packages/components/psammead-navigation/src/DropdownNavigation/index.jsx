import React, { cloneElement } from 'react';
import styled, { css } from 'styled-components';
import { shape, string, bool, func, oneOf } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { navigationIcons } from '@bbc/psammead-assets/svgs';
import { C_WHITE, C_EBON, C_SHADOW } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import Helmet from 'react-helmet';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { getPica } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const MENU_ICON_SIDE_LENGTH = '2.75rem'; // 44px

const getStyles = dir => {
  const direction = dir === 'ltr' ? 'left' : 'right';
  return `border-${direction}: ${GEL_SPACING_HLF} solid ${C_WHITE};
          padding-${direction}: ${GEL_SPACING};`;
};

export const Dropdown = styled.div`
  background-color: ${C_EBON};
  clear: both;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
    visibility: hidden;
  }
`;

export const DropdownUl = styled.ul.attrs({ role: 'list' })`
  list-style-type: none;
  margin: 0;
  padding: 0 ${GEL_SPACING};
  border-bottom: 0.125rem solid ${C_SHADOW};
`;

const StyledDropdownLi = styled.li`
  padding: 0.75rem 0;
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

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const StyledCurrentLink = styled.span.attrs({ role: 'text' })`
  ${({ dir }) => getStyles(dir)}
`;

export const DropdownLi = ({
  children,
  script,
  currentPageText,
  active,
  service,
  url,
  dir,
}) => (
  <StyledDropdownLi role="listitem">
    <StyledDropdownLink script={script} service={service} href={url}>
      {active && currentPageText ? (
        <StyledCurrentLink dir={dir}>
          <VisuallyHiddenText>{currentPageText}, </VisuallyHiddenText>
          {children}
        </StyledCurrentLink>
      ) : (
        children
      )}
    </StyledDropdownLink>
  </StyledDropdownLi>
);

DropdownLi.propTypes = {
  children: string.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  active: bool,
  currentPageText: string,
  dir: oneOf(['ltr', 'rtl']),
};

DropdownLi.defaultProps = {
  active: false,
  currentPageText: null,
  dir: 'ltr',
};

const iconBorder = css`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border: ${GEL_SPACING_HLF} solid ${C_WHITE};
`;

const MenuButton = styled.button`
  width: ${MENU_ICON_SIDE_LENGTH};
  height: ${MENU_ICON_SIDE_LENGTH};
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  ${({ dir }) => (dir === 'ltr' ? `float: left;` : `float: right;`)}

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 ${GEL_SPACING_HLF} ${C_WHITE};
    ::after {
      ${iconBorder};
    }
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: none;
    visibility: hidden;
  }
`;

export const CanonicalMenuButton = ({
  announcedText,
  isOpen,
  onOpen,
  onClose,
  dir,
}) => (
  <MenuButton
    aria-label={announcedText}
    onClick={isOpen ? onClose : onOpen}
    aria-expanded={isOpen ? 'true' : 'false'}
    dir={dir}
  >
    {isOpen ? navigationIcons.cross : navigationIcons.hamburger}
  </MenuButton>
);

CanonicalMenuButton.propTypes = {
  announcedText: string.isRequired,
  onOpen: func.isRequired,
  onClose: func.isRequired,
  isOpen: bool.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

CanonicalMenuButton.defaultProps = {
  dir: 'ltr',
};

const AmpHead = () => (
  <Helmet>
    <script
      async
      custom-element="amp-bind"
      src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
    />
  </Helmet>
);

export const AmpMenuButton = ({ announcedText, onToggle, dir }) => {
  const expandedHandler =
    'tap:AMP.setState({ menuState: { expanded: !menuState.expanded }})';

  return (
    <>
      <AmpHead />
      <amp-state id="menuState">
        <script type="application/json">
          {JSON.stringify({
            expanded: false,
          })}
        </script>
      </amp-state>
      <MenuButton
        aria-label={announcedText}
        aria-expanded="false"
        data-amp-bind-aria-expanded='menuState.expanded ? "true" : "false"'
        on={`${expandedHandler};${onToggle}`}
        dir={dir}
      >
        {cloneElement(navigationIcons.hamburger, {
          'data-amp-bind-hidden': 'menuState.expanded',
        })}
        {cloneElement(navigationIcons.cross, {
          hidden: true,
          'data-amp-bind-hidden': '!menuState.expanded',
        })}
      </MenuButton>
    </>
  );
};

AmpMenuButton.propTypes = {
  announcedText: string.isRequired,
  onToggle: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

AmpMenuButton.defaultProps = {
  dir: 'ltr',
};
