import React from 'react';
import { string, bool, shape } from 'prop-types';
import styled from 'styled-components';
import { C_CHALK, C_EBON } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_TRPL,
  GEL_SPACING_HLF,
} from '@bbc/gel-foundations/spacings';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_BODY_COPY } from '@bbc/gel-foundations/typography';
import { BBC_BLOCKS } from '@bbc/psammead-assets/svgs';

const GOLDEN_RATIO_PERCENT = '38.2%';
const GEL_SPACING_TRPL_MINUS_HLF = '1.25rem';

const StyledEmbedError = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${GEL_BODY_COPY};
  background-color: ${C_CHALK};
  background-image: url(data:image/svg+xml;base64,${BBC_BLOCKS});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: ${GOLDEN_RATIO_PERCENT};
  color: ${C_EBON};
  display: flex;
  flex-direction: column;
  height: ${({ fillViewport }) => (fillViewport ? '100vh' : '100%')};
  justify-content: flex-end;
`;

const StyledErrorMessage = styled.div`
  display: flex;
  margin: ${GEL_SPACING_TRPL} ${GEL_SPACING_TRPL_MINUS_HLF};

  strong {
    font-weight: normal;
    margin: 0 ${GEL_SPACING_HLF};
  }
`;

const EmbedError = ({ service, message, fillViewport, link }) => (
  <StyledEmbedError service={service} fillViewport={fillViewport}>
    <StyledErrorMessage>
      <strong>{message}</strong>
      {link && link.text && link.href && <a href={link.href}>{link.text}</a>}
    </StyledErrorMessage>
  </StyledEmbedError>
);

EmbedError.defaultProps = {
  service: 'news',
  fillViewport: false,
  link: null,
};

EmbedError.propTypes = {
  service: string,
  fillViewport: bool,
  message: string.isRequired,
  link: shape({
    text: string.isRequired,
    href: string.isRequired,
  }),
};

export default EmbedError;
