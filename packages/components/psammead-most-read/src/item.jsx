import React from 'react';
import { node, oneOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import { getLongPrimer, getPica } from '@bbc/gel-foundations/typography';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import { C_POSTBOX, C_EBON } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';

const MostReadWrapper = styled.div`
  position: relative;
`;
export const ItemWrapper = styled.p`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  `;

export const CountWrapper = styled.p`
  ${({ script }) => script && getLongPrimer(script)};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  `;

const MostRead = ({ count, item, dir, ...props }) => (
  <MostReadWrapper>
    <CountWrapper {...props}>{count}</CountWrapper>
    <ItemWrapper {...props}>{item}</ItemWrapper>
  </MostReadWrapper>
);

MostRead.propTypes = {
  dir: string,
  item: node.isRequired,
  count: node.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

MostRead.defaultProps = {
  dir: oneOf(['rtl', 'ltr']),
};

export default MostRead;
