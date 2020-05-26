import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { getDoublePica } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const HeadingIndex = styled.h1.attrs(() => ({
  tabIndex: '-1',
}))`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSansRegular(service)};
  color: ${C_METAL};
  margin: 0;
`;

HeadingIndex.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

export default HeadingIndex;
