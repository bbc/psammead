import styled, { css } from 'styled-components';
import { GEL_GROUP_2_SCREEN_WIDTH_MAX } from '@bbc/gel-foundations/breakpoints';

/* Convert C_POSTBOX to rgba as IE doesn't like 8 digit hex */
const C_POSTBOX_TRANSPARENT = `rgba(184, 0, 0, 0)`;
const C_POSTBOX_OPAQUE = `rgba(184, 0, 0, 1)`;

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

export default SwipeableNav;
