import { shape, func } from 'prop-types';
import styled from 'styled-components';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const TypographyText = styled.p`
  ${props =>
    props.script && props.typographyFunc
      ? props.typographyFunc(props.script)
      : ''}
`;

TypographyText.propTypes = {
  script: shape(scriptPropType).isRequired,
  typographyFunc: func.isRequired,
};

export default TypographyText;
