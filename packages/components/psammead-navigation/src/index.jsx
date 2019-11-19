import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool, oneOf, func } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import {
  C_WHITE,
  C_POSTBOX,
  C_GHOST,
  C_CLOUD_DARK,
  C_EBON,
} from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getPica } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { CSSTransition } from 'react-transition-group';

const TOP_BOTTOM_SPACING = '0.75rem'; // 12px
const CURRENT_ITEM_HOVER_BORDER = '0.3125rem'; // 5px

/* White with 30% transparency over #B80000 */
const BORDER_COLOR = '#eab3b3';

/* Skip to content */
const SKIP_LINK_COLOR = '#333';
const SKIP_LINK_BORDER = '0.1875rem'; // 3px
const SKIP_LINK_TOP_POSITION_LARGE = '-4rem'; // -64px
const SKIP_LINK_TOP_POSITION_SMALL = '-3rem'; // -48px

const GRID = true;
const MOVE_CONTENT = true;

const NavWrapper = styled.div`
  position: relative;
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  margin: 0 auto;
  display: flex;
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
  ${({ inMenu }) =>
    !inMenu &&
    `overflow-x: scroll;
    white-space: nowrap;
    &::-webkit-scrollbar{
      display:none
    }

    scroll-behavior: smooth;
    overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
      
    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
      overflow-x: hidden;
      white-space: normal;
    }
  `}

  ${({ inMenu, grid }) =>
    inMenu &&
    grid &&
    `display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

const StyledListItem = styled.li`
  display: ${({ inMenu }) => (inMenu ? 'block' : 'inline-block')};
  position: relative;
  z-index: 2;

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
      border-bottom: 0.0625rem solid ${BORDER_COLOR};
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
  ${({ inMenu }) => !inMenu && 'white-space: nowrap;'}
  ${({ inMenu }) => inMenu && 'width: 100%;'}

  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    padding: ${({ inMenu }) =>
      inMenu ? '0.5rem' : TOP_BOTTOM_SPACING} ${GEL_SPACING};
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

const CurrentLink = ({ children: link, script, currentPageText, inMenu }) => (
  <>
    <StyledSpan
      // eslint-disable-next-line jsx-a11y/aria-role
      role="text"
      script={script}
      inMenu={inMenu}
    >
      <VisuallyHiddenText>{currentPageText}, </VisuallyHiddenText>
      {link}
    </StyledSpan>
  </>
);

export const NavigationUl = ({ children, inMenu, grid, ...props }) => (
  <StyledUnorderedList role="list" inMenu={inMenu} grid={grid} {...props}>
    {inMenu
      ? React.Children.map(children, child =>
          React.cloneElement(child, { inMenu: true }),
        )
      : children}
    {!inMenu && (
      <StyledLink>
        <div style={{ width: GEL_SPACING_DBL, height: '1px' }} />
      </StyledLink>
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
  inMenu,
  ...props
}) => (
  <StyledListItem role="listitem" inMenu={inMenu}>
    {active && currentPageText ? (
      <StyledLink
        href={url}
        script={script}
        currentLink="true"
        service={service}
        data-navigation={`${link}_${url}`}
        inMenu={inMenu}
        {...props}
      >
        <CurrentLink
          script={script}
          currentPageText={currentPageText}
          inMenu={inMenu}
        >
          {link}
        </CurrentLink>
      </StyledLink>
    ) : (
      <StyledLink
        href={url}
        script={script}
        service={service}
        data-navigation={`${link}_${url}`}
        inMenu={inMenu}
        {...props}
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
  position: relative;
`;

// Prototype components
const useOutsideHandler = handler => {
  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handler);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handler);
    };
  });
};

const MenuWrapper = styled.menu`
  max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  overflow: auto;
  // border-bottom: solid ${C_POSTBOX};
  background-color: ${C_EBON};
  margin: 0 auto;
  position: ${({ moveContent }) => (moveContent ? 'relative' : 'absolute')};
  ${({ dir }) => (dir === 'ltr' ? 'left' : 'right')}: 0;
  // border-left: solid ${C_POSTBOX};
  // border-right: solid ${C_POSTBOX};
  ${({ grid }) => grid && 'width: 100%;'}
  pointer-events: auto;
  ${({ moveContent }) => !moveContent && 'max-height: 75vh;'}
  padding: 0;
  max-height: 0;
  display: none;
  transition: max-height 500ms ease-out;

  // We can't transition to height auto in css sadly.
  // This transitions to a full screen max-height then sets it to fit-content.
  // This introduces to smallest possible delay to things
  // that are shorter than full-screen without
  // ruining the ones that are longer than the screen.
  // Unfortunately, there is a delay closing services with a menu shorter
  // than the height of the screen. This could probably be solved with js. 

  &.menu-animation-enter {
    max-height: 0;
    display: block;
  }
  &.menu-animation-enter-active {
    max-height: 100vh;
    display: block;
  }
  &.menu-animation-enter-done {
    max-height: fit-content;
    display: block;
  }

  &.menu-animation-exit {
    max-height: 100vh;
    display: block;
  }
  &.menu-animation-exit-active {
    max-height: 0;
    display: block;
  }
  &.menu-animation-exit-done {
    max-height: 0;
    display: none;
  }

  &::-webkit-scrollbar {
    width: 6px;
    margin-right: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${C_CLOUD_DARK};
  }
`;

const ChevronSvg = styled.svg`
  ${({ dir }) => (dir === 'ltr' ? 'margin-left: 8px;' : 'margin-right: 8px;')}
`;

const Chevron = ({ dir, children }) => (
  <ChevronSvg
    xmlns="http://www.w3.org/2000/svg"
    width="8px"
    height="8px"
    viewBox="0 0 32 32"
    focusable="false"
    fill="white"
    dir={dir}
  >
    {children}
  </ChevronSvg>
);

const UpChevronSvg = ({ dir }) => (
  <Chevron dir={dir}>
    <title>up</title>
    <path d="M16 3L0 29h7.2L16 13.7 24.8 29H32L16 3z" />
  </Chevron>
);

const DownChevronSvg = ({ dir }) => (
  <Chevron dir={dir}>
    <title>down</title>
    <path d="M16 29L32 3h-7.2L16 18.3 7.2 3H0l16 26z" />
  </Chevron>
);

const StyledNavMenu = styled.div`
  position: relative;
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    display: none;
  }
  background-color: ${({ menuVisible }) => (menuVisible ? C_EBON : C_POSTBOX)};
`;

const StyledNavGradient = styled.div`
  width: ${GEL_SPACING_QUAD};
  height: 100%;
  z-index: 3;
  overflow: hidden;
  background-color: ${C_POSTBOX}00;
  background-image: linear-gradient(
    ${({ dir }) => (dir === 'ltr' ? 'to right' : 'to left')},
    ${C_POSTBOX}00,
    ${C_POSTBOX}FF
  );
  position: absolute;
  ${({ dir }) => (dir === 'ltr' ? 'right' : 'left')}: 0;
  top: 0;
  pointer-events: none;
  @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    width: 4rem;
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    display: none;
  }
`;

const MenuSpan = styled.span`
  display: inline-block;
`;

const NavMenu = ({
  script,
  service,
  setMenuVisibile,
  menuVisible,
  buttonRef,
}) => {
  const updateMenuVisiblity = () => setMenuVisibile(!menuVisible);
  return (
    <StyledNavMenu menuVisible={menuVisible}>
      <button
        style={{ border: 0, padding: 0, backgroundColor: 'inherit' }}
        onClick={updateMenuVisiblity}
        type="button"
        ref={buttonRef}
        on="tap:menu.toggleVisibility,menu_hider.toggleVisibility"
      >
        <StyledLink script={script} service={service}>
          <MenuSpan>{menuVisible ? 'x' : '☰'}</MenuSpan>
        </StyledLink>
      </button>
    </StyledNavMenu>
  );
};

const Menu = ({
  children,
  visible,
  dir,
  moveContent,
  wrapperRef,
  grid,
  amp,
}) => {
  return (
    <MenuWrapper
      id="menu"
      visible={visible}
      dir={dir}
      moveContent={moveContent}
      ref={wrapperRef}
      grid={grid}
      hidden={amp || !visible}
      amp={amp}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { inMenu: true }),
      )}
    </MenuWrapper>
  );
};

NavMenu.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  setMenuVisibile: func.isRequired,
  menuVisible: bool.isRequired,
  buttonRef: shape({ current: node }).isRequired,
};

Menu.propTypes = {
  children: node.isRequired,
  visible: bool.isRequired,
  dir: string.isRequired,
  wrapperRef: shape({ current: node }).isRequired,
  moveContent: bool.isRequired,
  grid: bool.isRequired,
  amp: bool.isRequired,
};

Chevron.propTypes = {
  children: node.isRequired,
  dir: string.isRequired,
};

UpChevronSvg.propTypes = {
  dir: string.isRequired,
};

DownChevronSvg.propTypes = UpChevronSvg.propTypes;

const MenuHider = ({ menuVisible }) => {
  return (
    <div
      id="menu_hider"
      style={{
        position: 'fixed',
        backgroundColor: 'black',
        opacity: 0.4,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        cursor: 'default',
      }}
      hidden={!menuVisible}
      on="tap:menu.hide,menu_hider.hide"
    />
  );
};

MenuHider.propTypes = {
  menuVisible: bool.isRequired,
};

// End prototypes
const Navigation = ({
  children,
  script,
  skipLinkText,
  service,
  dir,
  moveContent,
  grid,
  amp,
}) => {
  const [menuVisible, setMenuVisibile] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = event => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      menuVisible
    ) {
      setMenuVisibile(false);
    }
  };

  useOutsideHandler(handleClickOutside);

  return (
    <>
      <StyledNav role="navigation" dir={dir}>
        <NavWrapper>
          <SkipLink href="#content" script={script} service={service}>
            {skipLinkText}
          </SkipLink>
          <NavMenu
            script={script}
            service={service}
            setMenuVisibile={setMenuVisibile}
            menuVisible={menuVisible}
            dir={dir}
            buttonRef={buttonRef}
          />
          {children}
          <StyledNavGradient dir={dir} />
        </NavWrapper>
      </StyledNav>
      <CSSTransition in={menuVisible} timeout={500} classNames="menu-animation">
        <Menu
          visible
          dir={dir}
          moveContent={moveContent}
          wrapperRef={wrapperRef}
          grid={grid}
          amp={amp}
        >
          {children}
        </Menu>
      </CSSTransition>
      {!moveContent && <MenuHider menuVisible={menuVisible} />}
    </>
  );
};

Navigation.propTypes = {
  children: node.isRequired,
  script: shape(scriptPropType).isRequired,
  skipLinkText: string.isRequired,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  moveContent: bool,
  grid: bool,
  amp: bool.isRequired,
};

Navigation.defaultProps = { dir: 'ltr', moveContent: MOVE_CONTENT, grid: GRID };

NavigationUl.propTypes = {
  children: node.isRequired,
  inMenu: bool,
  grid: bool,
};

NavigationUl.defaultProps = { inMenu: false, grid: GRID };

NavigationLi.propTypes = {
  children: node.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  active: bool,
  currentPageText: string,
  service: string.isRequired,
  inMenu: bool,
};

NavigationLi.defaultProps = {
  active: false,
  currentPageText: null,
  inMenu: false,
};

CurrentLink.propTypes = {
  children: string.isRequired,
  script: shape(scriptPropType).isRequired,
  currentPageText: string,
  inMenu: bool,
};

CurrentLink.defaultProps = {
  currentPageText: null,
  inMenu: false,
};

export default Navigation;
