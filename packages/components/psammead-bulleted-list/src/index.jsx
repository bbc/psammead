import styled from 'styled-components';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import Bullet from './bullet.svg';

export const BulletedList = styled.ul`
  ${({ script }) => script && getBodyCopy(script)};
  ${({ service }) => getSansRegular(service)}
  list-style-type: none;
`;

export const BulletedListItem = styled.li`
  &::before {
    content: '\u00A0';
    background: url(${Bullet}) no-repeat
      ${({ dir }) => (dir === 'rtl' ? 'right' : 'left')} center;
    display: inline-block;
    width: ${GEL_SPACING_TRPL};
    background-size: 30%;
    ${({ dir }) =>
      dir === 'rtl'
        ? `margin-right: -${GEL_SPACING_TRPL}`
        : `margin-left: -${GEL_SPACING_TRPL}`};
  }
`;

export default BulletedList;
