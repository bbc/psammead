import styled from 'styled-components';
import { string, oneOf, shape } from 'prop-types';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import {
  GEL_SPACING_QUAD,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const BULLET_PADDING = '1.75rem';

const BulletedList = styled.ul.attrs(() => ({
  role: 'list',
}))`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)};
  margin-top: 0;
  list-style-type: none;
  & > li::before {
    content: '\u00A0';
    padding-left: ${BULLET_PADDING};
    background: url('data:image/svg+xml,%3Csvg%20height%3D%2710%27%20width%3D%2710%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cstyle%3E%40media%20screen%20and%20%28-ms-high-contrast%3A%20active%29%7Bsvg%7Bfill%3A%20%23fff%7D%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%275%27%20cy%3D%275%27%20r%3D%273%27%3E%3C%2Fcircle%3E%3C%2Fsvg%3E')
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
