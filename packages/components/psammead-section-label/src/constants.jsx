export const minClickableHeightPx = 44;
export const minClickableHeightRem = minClickableHeightPx / 16;

export const paddingDir = ({ dir }) =>
  `padding-${dir === 'rtl' ? 'left' : 'right'}`;
export const paddingReverseDir = ({ dir }) =>
  `padding-${dir === 'rtl' ? 'right' : 'left'}`;
