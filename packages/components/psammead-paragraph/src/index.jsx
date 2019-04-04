import React from 'react';
import styled from 'styled-components';
import { node, objectOf, object } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import {
  getBodyCopy,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { latin } from '@bbc/gel-foundations/scripts';

const StyledElement = styled.p`
  ${props => (props.typography ? props.typography : '')};
  color: ${C_SHADOW};
  font-family: ${GEL_FF_REITH_SANS};
  padding-bottom: ${GEL_SPACING_TRPL};
  margin: 0; /* Reset */
`;

const Paragraph = ({ children, script }) => {
  const GEL_BODY_COPY = getBodyCopy(script);

  return <StyledElement typography={GEL_BODY_COPY}>{children}</StyledElement>;
};

Paragraph.propTypes = {
  children: node.isRequired,
  script: objectOf(object),
};

Paragraph.defaultProps = {
  script: latin,
};

export default Paragraph;
