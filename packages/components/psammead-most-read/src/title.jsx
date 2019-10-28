import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import { getTrafalgar } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const MostReadTitleWrapper = styled.h2`
  ${({ script }) => script && getTrafalgar(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_SHADOW};
`;

const MostReadTitle = ({ header, ...props }) => (
  <MostReadTitleWrapper {...props}>{header}</MostReadTitleWrapper>
);

MostReadTitle.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  header: string.isRequired,
};

export default MostReadTitle;
