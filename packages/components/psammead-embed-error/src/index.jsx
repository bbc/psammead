import React from 'react';
import { string } from 'prop-types';
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
  background-size: 38.2%; // Golden Ratio
  color: ${C_EBON};
  height: 100vh;
  position: relative;
`;

const StyledErrorMessage = styled.p`
  position: absolute;
  margin: ${GEL_SPACING_TRPL};
  bottom: 0;

  strong {
    font-weight: normal;
  }
`;

const EmbedError = ({ service, message }) => (
  <StyledEmbedError service={service}>
    <StyledErrorMessage>
      <strong>{message}</strong>
    </StyledErrorMessage>
  </StyledEmbedError>
);

EmbedError.defaultProps = {
  service: 'news',
};

EmbedError.propTypes = {
  service: string,
  message: string.isRequired,
};

export default EmbedError;
