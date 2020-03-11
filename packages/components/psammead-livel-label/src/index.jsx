import React from 'react';
import styled from 'styled-components';
import { node, bool, string, oneOf } from 'prop-types';
import { getSansBold } from '@bbc/psammead-styles/font-styles';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const StyledSpan = styled.span.attrs(
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

const LiveLabel = ({
  service,
  dir,
  ariaHidden,
  liveText,
  withOffScreenText,
  offScreenText,
  lang,
  children,
}) => (
  // eslint-disable-next-line jsx-a11y/aria-role
  <span role="text">
    <StyledSpan service={service} dir={dir} ariaHidden={ariaHidden}>
      {`${liveText} `}
    </StyledSpan>
    {withOffScreenText && (
      <VisuallyHiddenText lang={lang}>
        {`${offScreenText}, `}
      </VisuallyHiddenText>
    )}
    {children}
  </span>
);

LiveLabel.propTypes = {
  service: string.isRequired,
  dir: oneOf(['rtl', 'ltr']),
  ariaHidden: bool,
  liveText: string,
  withOffScreenText: bool,
  offScreenText: string,
  lang: string,
  children: node,
};

LiveLabel.defaultProps = {
  dir: 'ltr',
  ariaHidden: false,
  liveText: 'LIVE',
  withOffScreenText: false,
  offScreenText: 'Live',
  lang: 'en-GB',
  children: null,
};

export default LiveLabel;
