import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { getCanon, getTrafalgar } from '@bbc/gel-foundations/typography';
import { MEDIA_QUERY_TYPOGRAPHY } from '@bbc/gel-foundations/breakpoints';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansBold, getSerifMedium } from '@bbc/psammead-styles/font-styles';

export const Headline = styled.h1`
  ${props => (props.script ? getCanon(props.script) : '')};
  color: ${C_SHADOW};
  ${({ service }) => getSerifMedium(service)}
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_QUAD} 0;
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    padding: 2.5rem 0;
  }
`;

export const SubHeading = styled.h2.attrs(() => ({
  tabIndex: '-1',
}))`
  ${props => (props.script ? getTrafalgar(props.script) : '')};
  color: ${C_SHADOW};
  ${({ service }) => getSansBold(service)}
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_TRPL} 0;
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    padding-top: ${GEL_SPACING_QUAD};
  }
`;

Headline.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

SubHeading.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};
