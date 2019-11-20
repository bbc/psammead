import React from 'react';
import styled from 'styled-components';
import { C_EBON } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';

const CoreIcon = styled.svg`
  vertical-align: middle;
  margin: 0 ${GEL_SPACING_HLF};
  color: ${C_EBON};
  fill: currentColor;
`;

const defaultAttrs = {
  viewBox: '0 0 32 32',
  width: GEL_SPACING_DBL,
  height: GEL_SPACING_DBL,
  focusable: 'false',
};

const CoreIcons = {
  alert: (
    <CoreIcon {...defaultAttrs}>
      <path d="M16 2L0 30h32zm2 25h-4v-4h4zm-4-6V11h4v10z" />
    </CoreIcon>
  ),
  info: (
    <CoreIcon {...defaultAttrs}>
      <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm2 25h-4V13h4zm0-14h-4V7h4z" />
    </CoreIcon>
  ),
  listBullet: (
    <svg
      fill="currentcolor"
      xmlns="http://www.w3.org/2000/svg"
      {...defaultAttrs}
    >
      <circle cx="16" cy="16" r="12" />
    </svg>
  ),
};

export default CoreIcons;
