import styled from '@emotion/styled';
import {
  C_METAL,
  C_POSTBOX,
  C_WHITE,
  C_PEBBLE,
} from '@bbc/psammead-styles/colours';

const Link = styled.a`
  display: block;
  line-height: 0;
  .rounded-play-button__outer-circle,
  .rounded-play-button__inner-circle,
  .rounded-play-button__triangle {
    transition: fill ease-in-out 0.2s;
  }
  &:hover,
  &:focus {
    .underlined_hover {
      text-decoration: underline;
    }
    .rounded-play-button__outer-circle,
    .rounded-play-button__inner-circle {
      fill: ${C_POSTBOX};
    }
    .rounded-play-button__triangle {
      fill: ${C_WHITE};
    }
  }
  &:visited {
    span {
      color: ${({ darkMode }) => (darkMode ? C_PEBBLE : C_METAL)};
    }
  }
`;

export default Link;
