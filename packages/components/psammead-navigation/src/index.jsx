import React from 'react';
import styled, { css } from 'styled-components';
import { shape, string, node, bool, oneOf } from 'prop-types';
import { C_WHITE, C_POSTBOX, C_GHOST } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getPica, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const NavigationWrapper = styled.div`
  padding: 0 ${GEL_SPACING_DBL};
  background-color: ${C_POSTBOX};
  position: relative;

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_SPACING};
    /* Trick to hide the last line border bottom */
    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid #ffffff;
      z-index: 2;
    }
  }
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const StyledListItem = styled.li`
  display: inline-block;
  position: relative;
  z-index: 1;

  ${({ dir }) =>
    dir === 'ltr'
      ? css`
          &:last-child > a {
            padding-right: ${GEL_SPACING};
          }

          &:last-child > a:hover::before {
            right: ${GEL_SPACING};
          }
        `
      : css`
          &:last-child > a {
            padding-left: ${GEL_SPACING};
          }

          &:last-child > a:hover::before {
            left: ${GEL_SPACING};
          }
        `};

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    /* Trick a separator line which takes the full width */
    &::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN};
      border-bottom: 1px solid #eab3b3; /* White with 30% transparency over #B80000 */
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

const LinkBorder = css`
  content: '';
  position: absolute;
  bottom: 0;
  border-bottom: 0.25rem solid ${C_WHITE};

  ${({ dir }) =>
    dir === 'ltr'
      ? css`
          left: 0;
          right: ${GEL_SPACING_DBL};
        `
      : css`
          left: ${GEL_SPACING_DBL};
          right: 0;
        `}
`;

const Link = styled.a`
  ${props => (props.script ? getPica(props.script) : '')};
  font-family: ${GEL_FF_REITH_SANS};
  color: ${C_GHOST};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  ${({ dir }) =>
    dir === 'ltr'
      ? css`
          padding: 0.75rem ${GEL_SPACING_DBL} 0.75rem 0;
        `
      : css`
          padding: 0.75rem 0 0.75rem ${GEL_SPACING_DBL};
        `}

  ${({ active }) =>
    active &&
    css`
      &::before {
        ${LinkBorder}
      }
    `}

  &:hover::before {
    ${LinkBorder}
  }
`;

export const NavigationUl = ({ children, ...props }) => (
  <StyledUnorderedList role="list" {...props}>
    {children}
  </StyledUnorderedList>
);

export const NavigationLi = ({ children: link, url, script, dir, active }) => (
  <StyledListItem role="listitem" dir={dir}>
    <Link href={url} script={script} dir={dir} active={active}>
      {link}
    </Link>
  </StyledListItem>
);

const Navigation = ({ children }) => (
  <NavigationWrapper>{children}</NavigationWrapper>
);

NavigationUl.propTypes = {
  children: node.isRequired,
};

NavigationLi.defaultProps = {
  dir: 'ltr',
  active: false,
};

NavigationLi.propTypes = {
  children: node.isRequired,
  url: string,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['ltr', 'rtl']),
  active: bool,
};

Navigation.propTypes = {
  children: string.isRequired,
};

NavigationLi.defaultProps = {
  url: null,
};

export default Navigation;
