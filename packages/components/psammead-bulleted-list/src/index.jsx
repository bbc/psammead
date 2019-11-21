import styled from 'styled-components';
import { string, oneOf, shape } from 'prop-types';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING_QUAD } from '@bbc/gel-foundations/spacings';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const BulletedList = styled.ul`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)}
  list-style-type: none;
  & > li::before {
    content: '\u00A0';
    display: inline-block;
    width: ${GEL_SPACING_QUAD};
    background: url("data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='3'%3E%3C/circle%3E%3C/svg%3E")
      no-repeat center;
    ${({ dir }) =>
      dir === 'rtl' ? `margin-right:` : `margin-left:`} -${GEL_SPACING_QUAD};
  }
`;

BulletedList.propTypes = {
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['ltr', 'rtl']),
  service: string.isRequired,
};

BulletedList.defaultProps = {
  dir: 'ltr',
};

export default BulletedList;
