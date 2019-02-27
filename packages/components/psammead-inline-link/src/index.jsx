import styled from 'styled-components';
import {
  C_SHADOW,
  C_POSTBOX,
  C_CLOUD_DARK,
} from '@bbc/psammead-styles/colours';

const InlineLink = styled.a`
  color: ${C_SHADOW};
  border-bottom: 1px solid ${C_POSTBOX};
  text-decoration: none;

  &:visited {
    color: ${C_CLOUD_DARK};
    border-bottom: 1px solid ${C_CLOUD_DARK};
  }

  &:focus {
    color: ${C_POSTBOX};
    border-bottom: 2px solid ${C_POSTBOX};
  }

  &:hover {
    color: ${C_POSTBOX};
    border-bottom: 2px solid ${C_POSTBOX};
  }
`;

export default InlineLink;
