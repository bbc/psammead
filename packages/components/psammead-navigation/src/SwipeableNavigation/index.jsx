import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf, bool } from 'prop-types';
import { GEL_GROUP_2_SCREEN_WIDTH_MAX } from '@bbc/gel-foundations/breakpoints';
import useWindowWidth from '../../hooks/useWindowWidth';
import useOverflowed from '../../hooks/useOverflowed';

/* Convert C_POSTBOX to rgba as IE doesn't like 8 digit hex */
const C_POSTBOX_TRANSPARENT = `rgba(184, 0, 0, 0)`;
const C_POSTBOX_OPAQUE = `rgba(184, 0, 0, 1)`;

const StyledSwipeableNav = styled.div`
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

    ${({ overflowed, scrollEnd }) =>
      overflowed &&
      !scrollEnd &&
      css`
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
      `}
  }
`;

const SwipeableNavigation = ({ children, dir, isSwipeable }) => {
  const ariaHidden = isSwipeable && { 'aria-hidden': true };

  const ref = useRef(null);
  const windowWidth = useWindowWidth();
  const isOverflowed = useOverflowed(ref, windowWidth);

  const [scrollEnd, setScrollEnd] = useState(false);

  const handleScroll = event => {
    const { scrollLeft, scrollWidth } = event.target;

    const isEnd =
      scrollWidth - Math.abs(scrollLeft) === event.target.offsetWidth;

    if (isEnd) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <StyledSwipeableNav
      onScroll={handleScroll}
      ref={ref}
      dir={dir}
      overflowed={isOverflowed}
      scrollEnd={scrollEnd}
      {...ariaHidden}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { isSwipeable }),
      )}
    </StyledSwipeableNav>
  );
};

SwipeableNavigation.propTypes = {
  children: node.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  isSwipeable: bool,
};

SwipeableNavigation.defaultProps = { dir: 'ltr', isSwipeable: false };

export default SwipeableNavigation;
