import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import { C_CHALK, C_EBON } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_BODY_COPY } from '@bbc/gel-foundations/typography';
import { BBC_BLOCKS } from '@bbc/psammead-assets/svgs';

const StyledEmbedError = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${GEL_BODY_COPY};
  background-color: ${C_CHALK};
  background-image: url(data:image/svg+xml;base64,${BBC_BLOCKS});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 38.2%;
  color: ${C_EBON};
  display: flex;
  flex-direction: column;
  height: ${({ fillViewport }) => (fillViewport ? '100vh' : '100%')};
  justify-content: flex-end;
`;

const StyledErrorMessage = styled.p`
  margin: ${GEL_SPACING_TRPL};

  strong {
    font-weight: normal;
  }
`;

const EmbedError = ({ service, message, fillViewport }) => (
  <StyledEmbedError service={service} fillViewport={fillViewport}>
    <StyledErrorMessage>
      <strong>{message}</strong>
    </StyledErrorMessage>
  </StyledEmbedError>
);

EmbedError.defaultProps = {
  service: 'news',
  fillViewport: false,
};

EmbedError.propTypes = {
  service: string,
  fillViewport: bool,
  message: string.isRequired,
};

export default EmbedError;
