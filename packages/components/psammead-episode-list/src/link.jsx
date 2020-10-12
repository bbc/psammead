import styled from 'styled-components';

import { C_METAL, C_POSTBOX } from '@bbc/psammead-styles/colours';

const Link = styled.a`
  display: block;
  &:hover,
  &:focus {
    span {
      text-decoration: underline;
    }
    .play-button-wrapper {
      background-color: ${C_POSTBOX};
      border-color: ${C_POSTBOX};
    }
    .play-icon {
      border-left-color: white;
    }
  }
  &:visited {
    span {
      color: ${C_METAL};
    }
  }
`;

export default Link;
