import React from 'react';
import styled from '@emotion/styled';
import { node, oneOf } from 'prop-types';
import { GEL_SPACING_SEXT } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';

/* Convert C_POSTBOX to rgba as IE doesn't like 8 digit hex */
const C_POSTBOX_TRANSPARENT = `rgba(184, 0, 0, 0)`;
const C_POSTBOX_OPAQUE = `rgba(184, 0, 0, 1)`;

const StyledScrollableNav = styled.div`
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    white-space: nowrap;
    overflow-x: scroll;

    /* Avoid using smooth scrolling as it causes accessibility issues */
    scroll-behavior: auto;
    -webkit-overflow-scrolling: touch;

    /* Hide scrollbar */
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    &:after {
      content: ' ';
      height: 100%;
      width: ${GEL_SPACING_SEXT};
      @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
        width: 6rem;
      }
      position: absolute;
      ${({ dir }) => `
        ${dir === 'ltr' ? 'right' : 'left'}: 0;
      `}
      bottom: 0;
      z-index: 3;
      overflow: hidden;
      pointer-events: none;
      background: linear-gradient(
        ${({ dir }) => (dir === 'ltr' ? 'to right' : 'to left')},
        ${C_POSTBOX_TRANSPARENT} 0%,
        ${C_POSTBOX_OPAQUE} 100%
      );
    }
  }
`;

export const ScrollableNavigation = ({ children, dir, ...props }) => (
  <StyledScrollableNav dir={dir} {...props}>
    {children}
  </StyledScrollableNav>
);

ScrollableNavigation.propTypes = {
  children: node.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

ScrollableNavigation.defaultProps = {
  dir: 'ltr',
};

export default ScrollableNavigation;
