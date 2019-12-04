import styled from 'styled-components';
import { string, oneOf, shape } from 'prop-types';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import {
  GEL_SPACING_QUAD,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const BulletedList = styled.ul.attrs(() => ({
  role: 'list',
}))`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)}
  list-style-type: none;
  & > li::before {
    content: '\u00A0';
    display: inline-block;
    width: ${GEL_SPACING_QUAD};
    background: url("data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E @media screen and (-ms-high-contrast: active){svg{fill: #fff}}%3C/style%3E%3Ccircle cx='5' cy='5' r='3'%3E%3C/circle%3E%3C/svg%3E")
      no-repeat center;
    ${({ dir }) =>
      dir === 'rtl'
        ? `margin-right: -${GEL_SPACING_QUAD};`
        : `margin-left: -${GEL_SPACING_QUAD};`}
  }
`;

export const BulletedListItem = styled.li.attrs(() => ({ role: 'listitem' }))`
  margin-bottom: ${GEL_SPACING_DBL};
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
