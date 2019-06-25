import styled from 'styled-components';
import { C_POSTBOX, C_CLOUD_DARK, C_WHITE } from '@bbc/psammead-styles/colours';

const InlineLink = styled.a`
  color: ${C_POSTBOX};
  border-bottom: 1px solid ${C_POSTBOX};
  text-decoration: none;

  &:visited {
    color: ${C_CLOUD_DARK};
    border-bottom: 1px solid ${C_CLOUD_DARK};
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
