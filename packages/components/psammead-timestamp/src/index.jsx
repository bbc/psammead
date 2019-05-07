import React from 'react';
import styled from 'styled-components';
import { node, string, func, shape } from 'prop-types';
import {
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { GEL_FF_REITH_SANS, getBrevier } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { C_CLOUD_DARK } from '@bbc/psammead-styles/colours';

const StyledTimestamp = styled.time`
  ${props => (props.typographyFunc ? props.typographyFunc(props.script) : '')}
  color: ${C_CLOUD_DARK};
  display: block;
  font-family: ${GEL_FF_REITH_SANS};
  padding-bottom: ${GEL_SPACING_HLF};
  &:last-child {
    padding-bottom: ${GEL_SPACING_DBL};
  }
`;

const Timestamp = ({ children, datetime, typographyFunc, script }) => (
  <StyledTimestamp
    dateTime={datetime}
    typographyFunc={typographyFunc}
    script={script}
  >
    {children}
  </StyledTimestamp>
);

Timestamp.defaultProps = {
  typographyFunc: getBrevier,
};

Timestamp.propTypes = {
  children: node.isRequired,
  datetime: string.isRequired,
  typographyFunc: func,
  script: shape(scriptPropType).isRequired,
};

export default Timestamp;
