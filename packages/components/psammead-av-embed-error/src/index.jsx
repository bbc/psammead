import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { C_CHALK, C_EBON } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_BODY_COPY } from '@bbc/gel-foundations/typography';
import { BBC_BLOCKS } from '@bbc/psammead-assets/svgs';

const StyledAvEmbedError = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${GEL_BODY_COPY};
  background-color: ${C_CHALK};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 33.33%;
  background-image: url(data:image/svg+xml;base64,${BBC_BLOCKS});
  color: ${C_EBON};
  position: relative;
  height: 100vh;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: ${GEL_SPACING_TRPL};
  left: ${GEL_SPACING_TRPL};
`;

// const IconWrapper = styled.div`
//   > svg {
//     color: ${C_EBON};
//     fill: currentColor;
//     height: ${GEL_SPACING_TRPL};
//     width: ${GEL_SPACING_TRPL};
//   }
// `;

const AvEmbedError = ({ service, message }) => (
  <StyledAvEmbedError service={service}>
    <MessageWrapper>
      {/* <IconWrapper aria-hidden="true">{mediaIcons[type]}</IconWrapper> */}
      <strong>{message}</strong>
    </MessageWrapper>
  </StyledAvEmbedError>
);

AvEmbedError.defaultProps = {
  service: 'news',
};

AvEmbedError.propTypes = {
  service: string,
  message: string.isRequired,
};

export default AvEmbedError;
