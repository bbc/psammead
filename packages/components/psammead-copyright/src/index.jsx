import styled from 'styled-components';
import { oneOf, string } from 'prop-types';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';
import { GEL_MINION } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Copyright = styled.p.attrs({
  role: 'text',
})`
  ${GEL_MINION};
  background-color: rgba(34, 34, 34, 0.75);
  text-transform: uppercase;
  color: ${C_WHITE};
  padding: ${GEL_SPACING_HLF} ${GEL_SPACING};
  ${({ service }) => (service ? getSansRegular(service) : '')}
  position: absolute;
  bottom: 0;
  margin: 0;
  ${props => props.position}: 0;
`;

Copyright.propTypes = {
  position: oneOf(['left', 'right']),
  service: string.isRequired,
};

Copyright.defaultProps = {
  position: 'left',
};

export default Copyright;
