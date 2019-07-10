import styled from 'styled-components';
import { C_POSTBOX, C_METAL, C_EBON } from '@bbc/psammead-styles/colours';

const InlineLink = styled.a`
  color: ${C_EBON};
  border-bottom: 1px solid ${C_POSTBOX};
  text-decoration: none;

  &:visited {
    color: ${C_METAL};
    border-bottom: 1px solid ${C_METAL};
  }

  &:focus,
  &:hover {
    color: ${C_POSTBOX};
    border-bottom: 2px solid ${C_POSTBOX};
  }
`;

export default InlineLink;
