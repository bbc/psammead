import styled from 'styled-components';
import { C_POSTBOX, C_CLOUD_DARK, C_WHITE } from '@bbc/psammead-styles/colours';

const InlineLink = styled.a`
  color: ${C_POSTBOX};
  // border-bottom: 1px solid ${C_POSTBOX};
  // padding-bottom: 1px;
  white-space: pre-wrap; // needed so words on the end of sentences, especially italics, don't cut off background-color
  padding: 0 2px 2px;
  margin: 0 -2px; // offset the padding so there is no additional spacing
  box-shadow: inset 0 -1px 0 ${C_POSTBOX};
  text-decoration: none;

  &:visited {
    color: ${C_CLOUD_DARK};
    border-bottom: 1px solid ${C_CLOUD_DARK};
  }

  &:focus,
  &:hover {
    color: ${C_WHITE};
    background-color: ${C_POSTBOX};
  }
`;

export default InlineLink;
