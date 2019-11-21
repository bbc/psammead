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
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getPica } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const TOP_BOTTOM_SPACING = '0.75rem'; // 12px
const CURRENT_ITEM_HOVER_BORDER = '0.3125rem'; // 5px
const GRADIENT_WIDTH = '3rem'; // 48px

/* White with 30% transparency over #B80000 */
const BORDER_COLOR = '#eab3b3';

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

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    overflow: hidden;
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

const StyledListItem = styled.li`
  display: inline-block;
  position: relative;
  z-index: 2;

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    &:last-child {
      ${({ dir }) => css`
        margin-${dir === 'ltr' ? 'right' : 'left'}: ${GRADIENT_WIDTH}; 
      `}
    }
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    /* Trick to display a border between the list items when it breaks into multiple lines, which takes the full width */
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

CurrentLink.propTypes = {
  children: string.isRequired,
  script: shape(scriptPropType).isRequired,
  currentPageText: string,
};

CurrentLink.defaultProps = {
  currentPageText: null,
};

export const NavigationUl = ({ children, isSwipeable, ...props }) => (
  <StyledUnorderedList role="list" isSwipeable={isSwipeable} {...props}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { isSwipeable }),
    )}
  </StyledUnorderedList>
);

NavigationUl.propTypes = {
  children: node.isRequired,
  isSwipeable: bool,
};

NavigationUl.defaultProps = { isSwipeable: false };

export const NavigationLi = ({
  children: link,
  url,
  script,
  currentPageText,
  active,
  service,
  dir,
  isSwipeable,
  ...props
}) => {
  const tabIndex = isSwipeable && { tabIndex: -1 };

  return (
    <StyledListItem dir={dir} role="listitem">
      {active && currentPageText ? (
        <StyledLink
          href={url}
          script={script}
          service={service}
          currentLink
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

NavigationLi.propTypes = {
  children: node.isRequired,
  url: string.isRequired,
  script: shape(scriptPropType).isRequired,
  active: bool,
  currentPageText: string,
  service: string.isRequired,
  isSwipeable: bool,
  dir: oneOf(['ltr', 'rtl']),
};

NavigationLi.defaultProps = {
  active: false,
  currentPageText: null,
  isSwipeable: false,
  dir: 'ltr',
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

const Navigation = ({ children, dir }) => {
  return (
    <StyledNav role="navigation" dir={dir}>
      <NavWrapper>{children}</NavWrapper>
    </StyledNav>
  );
};

Navigation.propTypes = {
  children: node.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

Navigation.defaultProps = { dir: 'ltr' };

export default Navigation;
