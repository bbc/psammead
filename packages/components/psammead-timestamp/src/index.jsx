import React from 'react';
import styled from 'styled-components';
import { node, string, func, shape, bool } from 'prop-types';
import {
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { GEL_FF_REITH_SANS, getBrevier } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { C_METAL } from '@bbc/psammead-styles/colours';

const PADDING = `
  padding-bottom: ${GEL_SPACING_HLF};
  &:last-child {
    padding-bottom: ${GEL_SPACING_DBL};
  }
`;

const StyledTimestamp = styled.time`
  ${props => (props.typographyFunc ? props.typographyFunc(props.script) : '')}
  color: ${C_METAL};
  display: block;
  font-family: ${GEL_FF_REITH_SANS};
  ${props => props.padding && PADDING}
 `;

const Timestamp = ({ children, datetime, typographyFunc, script, padding }) => (
  <StyledTimestamp
    dateTime={datetime}
    typographyFunc={typographyFunc}
    script={script}
    padding={padding}
  >
    {children}
  </StyledTimestamp>
);

Timestamp.defaultProps = {
  typographyFunc: getBrevier,
  padding: true,
};

Timestamp.propTypes = {
  children: node.isRequired,
  datetime: string.isRequired,
  typographyFunc: func,
  padding: bool,
  script: shape(scriptPropType).isRequired,
};

export default Timestamp;
