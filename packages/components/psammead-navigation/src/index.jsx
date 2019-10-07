import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool, oneOf, func } from 'prop-types';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { C_WHITE, C_POSTBOX, C_GHOST } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_QUAD,
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

/* Skip to content */
const SKIP_LINK_COLOR = '#333';
const SKIP_LINK_BORDER = '0.1875rem'; // 3px
const SKIP_LINK_TOP_POSITION_LARGE = '-4rem'; // -64px
const SKIP_LINK_TOP_POSITION_SMALL = '-3rem'; // -48px

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
    `overflow-x: scroll; white-space: nowrap; &::-webkit-scrollbar{
      display:none}`}

  ${({ inMenu, grid }) =>
    inMenu &&
    grid &&
    `display: grid;
    grid-template-columns: repeat(3, 1fr);`}
`;

const StyledListItem = styled.li`
  display: ${({ inMenu }) => (inMenu ? 'block' : 'inline-block')};
  position: relative;
  z-index: 2;
`;

const ListItemBorder = inMenu => css`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: ${GEL_SPACING_HLF} solid ${inMenu ? C_POSTBOX : C_WHITE};
`;

const StyledLink = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${({ inMenu }) => (inMenu ? C_POSTBOX : C_GHOST)};
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
    ${({ inMenu }) => ListItemBorder(inMenu)}
    ${({ currentLink, inMenu }) =>
      currentLink &&
      css`
        border-bottom: ${CURRENT_ITEM_HOVER_BORDER} solid
          ${inMenu ? C_POSTBOX : C_WHITE};
      `}
  }

  &:focus::after {
    ${({ inMenu }) => ListItemBorder(inMenu)}
    top: 0;
    border: 0.25rem solid ${C_WHITE};
  }
`;

const StyledSpan = styled.span`
  &::after {
    ${({ inMenu }) => ListItemBorder(inMenu)}
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
}) => (
  <StyledListItem role="listitem" inMenu={inMenu}>
    {active && currentPageText ? (
      <StyledLink
        href={url}
        script={script}
        currentLink="true"
        service={service}
        inMenu={inMenu}
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
      <StyledLink href={url} script={script} service={service} inMenu={inMenu}>
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
  overflow: scroll;
  border-bottom: solid ${C_POSTBOX};
  display: ${({ visible }) => (visible ? 'inline-block' : 'none')};
  background-color: ${C_WHITE};
  margin: 0 auto;
  position: ${({ moveContent }) => (moveContent ? 'relative' : 'absolute')};
  ${({ dir }) => (dir === 'ltr' ? 'left' : 'right')}: 0;
  ${({ dir }) => dir === 'rtl' && 'float: right;'}
  border-left: solid ${C_POSTBOX};
  border-right: solid ${C_POSTBOX};
  z-index: 10;
  ${({ moveContent }) => moveContent && 'width: 100%;'}
  flex-grow: 1;
  pointer-events: auto;
  ${({ moveContent }) => !moveContent && 'max-height: 85vh;'}
  padding: 0;
`;

const Chevron = ({ dir, children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8px"
    height="8px"
    viewBox="0 0 32 32"
    focusable="false"
    fill="white"
    style={dir === 'ltr' ? { marginLeft: '8px' } : { marginRight: '8px' }}
  >
    {children}
  </svg>
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
  ${({ dir }) => (dir === 'ltr' ? 'border-right' : 'border-left')}: ${C_WHITE}
    solid;
`;

const StyledMenuBottomContainer = styled.div`
  width: 100%;
  height: 0;
  position: sticky;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
`;

const StyledNavGradient = styled.div`
  width: ${GEL_SPACING_QUAD};
  height: 100%;
  flex-shrink: 0;
  z-index: 3;
  overflow: hidden;
  background-color: rgb(184, 0, 0, 0);
  background-image: linear-gradient(
    ${({ dir }) => (dir === 'ltr' ? 'right' : 'left')},
    rgba(184, 0, 0, 0),
    ${C_POSTBOX}
  );
  position: absolute;
  ${({ dir }) => (dir === 'ltr' ? 'right' : 'left')}: 0;
  top: 0;
  pointer-events: none;
`;

const NavMenu = ({
  script,
  service,
  setMenuVisibile,
  menuVisible,
  dir,
  buttonRef,
}) => {
  const updateMenuVisiblity = () => setMenuVisibile(!menuVisible);
  return (
    <StyledNavMenu dir={dir}>
      <button
        style={{ border: 0, padding: 0, backgroundColor: 'inherit' }}
        onClick={updateMenuVisiblity}
        type="button"
        ref={buttonRef}
      >
        <StyledLink script={script} service={service}>
          Menu
          {menuVisible ? (
            <UpChevronSvg dir={dir} />
          ) : (
            <DownChevronSvg dir={dir} />
          )}
        </StyledLink>
      </button>
    </StyledNavMenu>
  );
};

const Menu = ({ children, visible, dir, moveContent, wrapperRef }) => {
  const [gradDisplay, setGradDisplay] = useState(false);

  useEffect(() => {
    if (wrapperRef.current) {
      const settingGrad = () =>
        setGradDisplay(
          wrapperRef.current.scrollHeight -
            wrapperRef.current.offsetHeight -
            wrapperRef.current.scrollTop >
            7,
        );
      settingGrad();
      /* eslint-disable-next-line no-param-reassign */
      wrapperRef.current.onscroll = settingGrad;
    }
  }, [wrapperRef.current]);

  return (
    <MenuWrapper
      visible={visible}
      dir={dir}
      moveContent={moveContent}
      ref={wrapperRef}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { inMenu: true }),
      )}
      <StyledMenuBottomContainer>
        <div
          style={{
            height: '4rem',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: 'rgb(184,0,0,0)',
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), ${C_WHITE})`,
            position: 'absolute',
            bottom: 0,
            display: gradDisplay ? 'block' : 'none',
          }}
        />
      </StyledMenuBottomContainer>
    </MenuWrapper>
  );
};

NavMenu.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  setMenuVisibile: func.isRequired,
  menuVisible: bool.isRequired,
  dir: string.isRequired,
  buttonRef: shape({ current: node }).isRequired,
};

Menu.propTypes = {
  children: node.isRequired,
  visible: bool.isRequired,
  dir: string.isRequired,
  wrapperRef: shape({ current: node }).isRequired,
  moveContent: bool,
};

Menu.defaultProps = {
  moveContent: false,
};

Chevron.propTypes = {
  children: node.isRequired,
  dir: string.isRequired,
};

UpChevronSvg.propTypes = {
  dir: string.isRequired,
};

DownChevronSvg.propTypes = UpChevronSvg.propTypes;

// End prototypes
const Navigation = ({
  children,
  script,
  skipLinkText,
  service,
  dir,
  moveContent,
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
      <Menu
        visible={menuVisible}
        dir={dir}
        moveContent={moveContent}
        wrapperRef={wrapperRef}
      >
        {children}
      </Menu>
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
};

Navigation.defaultProps = { dir: 'ltr', moveContent: false };

NavigationUl.propTypes = {
  children: node.isRequired,
  inMenu: bool,
  grid: bool,
};

NavigationUl.defaultProps = { inMenu: false, grid: false };

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
