import React from 'react';
import styled from '@emotion/styled';
import { node, oneOf, string } from 'prop-types';
import { GEL_SPACING_SEXT } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';

// Because IE11 can't handle 8-digit hex, need to convert to rgba
const convertHexColourToDecimal = (hexColour, opacity = 1) => {
  const hexChars = hexColour.split('');
  const red = parseInt(hexChars[1], 16) * 16 + parseInt(hexChars[2], 16);
  const green = parseInt(hexChars[3], 16) * 16 + parseInt(hexChars[4], 16);
  const blue = parseInt(hexChars[5], 16) * 16 + parseInt(hexChars[6], 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

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
        ${({ brandBackgroundColour }) =>
            convertHexColourToDecimal(brandBackgroundColour, 0)}
          0%,
        ${({ brandBackgroundColour }) =>
            convertHexColourToDecimal(brandBackgroundColour, 1)}
          100%
      );
    }
  }
`;

export const ScrollableNavigation = ({
  children,
  dir,
  brandBackgroundColour,
  brandHighlightColour,
  ...props
}) => (
  <StyledScrollableNav
    dir={dir}
    brandBackgroundColour={brandBackgroundColour}
    brandHighlightColour={brandHighlightColour}
    {...props}
  >
    {children}
  </StyledScrollableNav>
);

ScrollableNavigation.propTypes = {
  children: node.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  brandBackgroundColour: string.isRequired,
  brandHighlightColour: string.isRequired,
};

ScrollableNavigation.defaultProps = {
  dir: 'ltr',
};

export default ScrollableNavigation;
