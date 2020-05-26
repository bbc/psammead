import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { C_SHADOW, C_METAL } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
  GEL_SPACING_QUIN,
} from '@bbc/gel-foundations/spacings';
import {
  getCanon,
  getTrafalgar,
  getDoublePica,
} from '@bbc/gel-foundations/typography';
import {
  getSansBold,
  getSerifMedium,
  getSansRegular,
} from '@bbc/psammead-styles/font-styles';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

export const Headline = styled.h1`
  ${({ script }) => script && getCanon(script)};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_SHADOW};
  display: block; /* Explicitly set */
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_QUAD} 0;
  ${GEL_GROUP_3_SCREEN_WIDTH_MIN} {
    padding: ${GEL_SPACING_QUIN} 0;
  }
`;

export const SubHeading = styled.h2.attrs(() => ({
  tabIndex: '-1',
}))`
  ${({ script }) => script && getTrafalgar(script)};
  ${({ service }) => getSansBold(service)}
  color: ${C_SHADOW};
  margin: 0; /* Reset */
`;

Headline.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

SubHeading.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

export const PageHeading = styled.h1.attrs(() => ({
  id: 'content',
  tabIndex: '-1',
}))`
  color: ${C_METAL};
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSansRegular(service)};
  margin: 0;
  padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING_TRPL};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: ${GEL_SPACING_TRPL} 0 ${GEL_SPACING_DBL};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_TRPL} 0 ${GEL_SPACING};
  }
`;
