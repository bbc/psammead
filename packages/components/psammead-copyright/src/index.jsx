import React from 'react';
import styled from 'styled-components';
import { node, objectOf, object } from 'prop-types';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';
import { getMinion, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import { latin } from '@bbc/gel-foundations/scripts';

const StyledCopyright = styled.p.attrs({
  role: 'text',
})`
  ${props => (props.typography ? props.typography : '')};
  background-color: rgba(34, 34, 34, 0.75);
  text-transform: uppercase;
  color: ${C_WHITE};
  padding: ${GEL_SPACING_HLF} ${GEL_SPACING};
  font-family: ${GEL_FF_REITH_SANS};
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
`;

const Copyright = ({ children, script }) => {
  const GEL_MINION = getMinion(script);

  return <StyledCopyright typography={GEL_MINION}>{children}</StyledCopyright>;
};

Copyright.propTypes = {
  children: node.isRequired,
  script: objectOf(object),
};

Copyright.defaultProps = {
  script: latin,
};

export default Copyright;
