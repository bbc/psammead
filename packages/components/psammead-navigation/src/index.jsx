import React, { useState, useEffect } from 'react';
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
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getPica } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const TOP_BOTTOM_SPACING = '0.75rem'; // 12px
const CURRENT_ITEM_HOVER_BORDER = '0.3125rem'; // 5px

/* White with 30% transparency over #B80000 */
const BORDER_COLOR = '#eab3b3';

/* Convert C_POSTBOX to rgba as IE doesn't like 8 digit hex */
const C_POSTBOX_TRANSPARENT = `rgba(184, 0, 0, 0)`;
const C_POSTBOX_OPAQUE = `rgba(184, 0, 0, 1)`;

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

  ${({ isMobile }) => !isMobile && `overflow: hidden;`}
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

// eslint-disable-next-line react/prop-types
export const NavigationUl = ({ children, isMobile, ...props }) => (
  <StyledUnorderedList role="list" isMobile={isMobile} {...props}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { isMobile }),
    )}
  </StyledUnorderedList>
);

export const NavigationLi = ({
  children: link,
  url,
  script,
  currentPageText,
  active,
  service,
  // eslint-disable-next-line react/prop-types
  isMobile,
  ...props
}) => {
  const tabIndex = isMobile && { tabIndex: -1 };

  return (
    <StyledListItem role="listitem">
      {active && currentPageText ? (
        <StyledLink
          href={url}
          script={script}
          currentLink="true"
          service={service}
          {...props}
          {...tabIndex}
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
          {...tabIndex}
          {...props}
        >
          {link}
        </StyledLink>
      )}
    </StyledListItem>
  );
};

const StyledNav = styled.nav`
  position: relative;
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

const SwipeableNav = styled.div`
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    white-space: nowrap;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    /* Hide scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    &:before {
      content: ' ';
      height: 100%;
      width: 3rem;
      position: absolute;
      ${({ dir }) => css`
        ${dir === 'ltr' ? 'right' : 'left'}: 0;
      `}
      bottom: 0;
      z-index: 3;
      overflow: hidden;
      pointer-events: none; /* ignore clicks */
      background: linear-gradient(
        ${({ dir }) => (dir === 'ltr' ? 'to right' : 'to left')},
        ${C_POSTBOX_TRANSPARENT} 0%,
        ${C_POSTBOX_OPAQUE} 100%
      );
    }
  }
`;

const Navigation = ({ children, dir }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const isMobile = width < 600;
  const ariaHidden = isMobile && { 'aria-hidden': true };

  return (
    <StyledNav role="navigation" dir={dir}>
      <NavWrapper>
        <SwipeableNav dir={dir} {...ariaHidden}>
          {React.Children.map(children, child =>
            React.cloneElement(child, { isMobile }),
          )}
        </SwipeableNav>
      </NavWrapper>
    </StyledNav>
  );
};

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
