import styled from '@emotion/styled';
import { C_METAL, C_POSTBOX } from '@bbc/psammead-styles/colours';

const Link = styled.a`
  display: block;
  .rounded-play-button__outer-circle,
  .rounded-play-button__inner-circle,
  .rounded-play-button__triangle {
    transition: fill ease-in-out 0.2s;
  }
  &:hover,
  &:focus {
    span {
      text-decoration: underline;
    }
    .rounded-play-button__outer-circle,
    .rounded-play-button__inner-circle {
      fill: ${C_POSTBOX};
    }
    .rounded-play-button__triangle {
      fill: #fff;
    }
  }
  &:visited {
    span {
      color: ${C_METAL};
    }
  }
`;

export default Link;
