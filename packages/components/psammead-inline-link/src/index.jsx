import styled from 'styled-components';
import {
  C_POSTBOX,
  C_METAL,
  C_WHITE,
  C_EBON,
} from '@bbc/psammead-styles/colours';

const InlineLink = styled.a`
  color: ${C_EBON};
  border-bottom: 1px solid ${C_POSTBOX};
  margin: 0 -2px;
  padding: 0 2px;
  text-decoration: none;

  &:visited {
    color: ${C_METAL};
    border-bottom: 1px solid ${C_METAL};
  }

  &:focus,
  &:hover {
    background-color: ${C_POSTBOX};
    border-bottom: 2px solid ${C_POSTBOX};
    color: ${C_WHITE};
    white-space: pre-wrap;
  }
`;

export default InlineLink;
