import React from 'react';
import styled from 'styled-components';
import { oneOf, shape, string } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import { getTrafalgar } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const StyledHeading = styled.h2`
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getTrafalgar(script)};
  color: ${C_SHADOW};
`;

const MostReadTitle = ({ header, ...props }) => (
  <StyledHeading {...props}>{header}</StyledHeading>
);

MostReadTitle.propTypes = {
  header: string.isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadTitle.defaultProps = {
  dir: 'ltr',
};

export default MostReadTitle;
