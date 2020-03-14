import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';
import { C_EBON, C_WHITE } from '@bbc/psammead-styles/colours';
import { getSansBold } from '@bbc/psammead-styles/font-styles';
import { GEL_BREVIER } from '@bbc/gel-foundations/typography';

import { detokenise, toProviderName } from '../utilities';

const BORDER_WEIGHT = '0.125rem';
const GEL_SPACING_THREE_QRTS = `0.75rem`;

// Note: We require control over _when and what_ these styles are applied
// to, and therefore cannot make use of @bbc/psammead-visually-hidden-text.
const visuallyHiddenStyle = `
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`;

const Wrapper = styled.div`
  position: relative;
`;

const SkipLink = styled.a`
  ${({ service }) => getSansBold(service)}
  ${GEL_BREVIER}
  background-color: ${C_WHITE};
  border: ${BORDER_WEIGHT} solid ${C_EBON};
  color: ${C_EBON};
  display: block;
  left: 0;
  line-height: 1;
  padding: ${GEL_SPACING_THREE_QRTS};
  position: absolute;
  text-decoration: none;
  top: 0;
  z-index: 10;

  &:not(:focus):not(:active) {
    ${visuallyHiddenStyle}
  }
`;

const EndText = styled.p`
  ${visuallyHiddenStyle}
`;

const SkipLinkWrapper = ({
  provider,
  service,
  skipToId,
  text,
  children,
  endText,
}) => {
  const dictionary = {
    '%Provider%': toProviderName(provider),
    '%provider%': provider,
  };
  return (
    <Wrapper>
      <SkipLink service={service} href={`#${detokenise(skipToId, dictionary)}`}>
        {detokenise(text, dictionary)}
      </SkipLink>
      {children}
      <EndText tabIndex="-1" id={skipToId}>
        {detokenise(endText, dictionary)}
      </EndText>
    </Wrapper>
  );
};

SkipLinkWrapper.propTypes = {
  provider: string.isRequired,
  service: string.isRequired,
  skipToId: string.isRequired,
  children: node.isRequired,
  text: string.isRequired,
  endText: string.isRequired,
};

export default SkipLinkWrapper;
