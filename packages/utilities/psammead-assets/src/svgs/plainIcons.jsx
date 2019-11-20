/* Plain Icons contain svgs which are b64 transformed and so cannot depend on any classes
 */
import React from 'react';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';

const defaultAttrs = {
  viewBox: '0 0 32 32',
  width: GEL_SPACING_DBL,
  height: GEL_SPACING_DBL,
  focusable: 'false',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'currentcolor',
};

const PlainIcons = {
  bullet: (
    <svg {...defaultAttrs}>
      <circle cx="16" cy="16" r="12" />
    </svg>
  ),
};

export default PlainIcons;
