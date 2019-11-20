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
};

const PlainIcons = {
  bullet: (
    <svg {...defaultAttrs}>
      <circle cx="10" cy="10" r="8" fill="#3f3f3f" />
    </svg>
  ),
};

export default PlainIcons;
