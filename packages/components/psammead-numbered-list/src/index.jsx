import styled from 'styled-components';
import { string, oneOf, shape } from 'prop-types';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const NumberedList = styled.ol`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)};
  margin-top: 0;
`;

export const NumberedListItem = styled.li`
  margin-bottom: ${GEL_SPACING_DBL};
`;

NumberedList.propTypes = {
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['ltr', 'rtl']),
  service: string.isRequired,
};

NumberedList.defaultProps = {
  dir: 'ltr',
};

export default NumberedList;
