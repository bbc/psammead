import styled from 'styled-components';
import { bool, string, oneOf } from 'prop-types';
import { getSansBold } from '@bbc/psammead-styles/font-styles';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';

const LiveLabel = styled.span.attrs(
  ({ ariaHidden }) => ariaHidden && { 'aria-hidden': 'true' },
)`
    ${({ service }) => getSansBold(service)}
    color: ${C_POSTBOX};
    display: inline-block;
    ${({ dir }) =>
      dir === 'rtl'
        ? `margin-left: ${GEL_SPACING};`
        : `margin-right: ${GEL_SPACING};`}
  `;

LiveLabel.propTypes = {
  service: string.isRequired,
  dir: oneOf(['rtl', 'ltr']),
  ariaHidden: bool,
};

LiveLabel.defaultProps = {
  dir: 'ltr',
  ariaHidden: false,
};

export default LiveLabel;
