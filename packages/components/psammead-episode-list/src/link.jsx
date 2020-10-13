import styled from 'styled-components';

import { C_METAL, C_POSTBOX } from '@bbc/psammead-styles/colours';

const Link = styled.a`
  display: block;
  &:hover,
  &:focus {
    span {
      text-decoration: underline;
    }
    .rounded-play-button__inner-circle,
    .rounded-play-button__outer-circle {
      fill: ${C_POSTBOX};
    }
    .rounded-play-button__triangle {
      fill: white;
    }
  }
  &:visited {
    span {
      color: ${C_METAL};
    }
  }
`;

export default Link;
