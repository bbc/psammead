import React from 'react';
import styled from 'styled-components';
import { shape, string, oneOf } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import { getTrafalgar } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const MOST_READ_LABEL = 'most-read-title';

const StyledHeading = styled.h2`
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getTrafalgar(script)};
  color: ${C_SHADOW};
`;

const StyledSection = styled.section.attrs(props => ({
  'aria-labelledby': props.labelId,
  role: 'region',
}))``;

const MostReadTitle = ({
  header,
  service,
  script,
  labelId = MOST_READ_LABEL,
  dir,
}) => (
  <StyledSection labelId={labelId}>
    <StyledHeading dir={dir} id={labelId} script={script} service={service}>
      {header}
    </StyledHeading>
  </StyledSection>
);

MostReadTitle.propTypes = {
  header: string.isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  labelId: string,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadTitle.defaultProps = {
  labelId: MOST_READ_LABEL,
  dir: 'ltr',
};

export default MostReadTitle;
