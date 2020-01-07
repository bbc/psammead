import React from 'react';
import styled from 'styled-components';
import { node, string, func, shape, bool } from 'prop-types';
import {
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const PADDING = `
  padding-bottom: ${GEL_SPACING_HLF};
  &:last-child {
    padding-bottom: ${GEL_SPACING_DBL};
  }
`;

const StyledTimestamp = styled.time`
  ${({ script, typographyFunc }) =>
    script && typographyFunc && typographyFunc(script)}
  color: ${C_METAL};
  display: block;
  ${({ service }) => getSansRegular(service)}
  ${props => props.padding && PADDING}
`;

const Timestamp = ({
  children,
  datetime,
  typographyFunc,
  script,
  padding,
  service,
}) => (
  // https://github.com/bbc/simorgh/issues/1449#issuecomment-571564795
  // https://github.com/dequelabs/axe-core/issues/1597
  // eslint-disable-next-line jsx-a11y/aria-role
  <span role="text">
    <StyledTimestamp
      dateTime={datetime}
      typographyFunc={typographyFunc}
      script={script}
      padding={padding}
      service={service}
    />
    {children}
  </span>
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
  service: string.isRequired,
};

export default Timestamp;
