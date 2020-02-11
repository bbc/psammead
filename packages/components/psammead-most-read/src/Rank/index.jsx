import React from 'react';
import { shape, string, oneOf, number } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap } from '@bbc/gel-foundations/typography';
import {
  Burmese,
  Bengali,
  EasternArabic,
  Nepali,
  WesternArabic,
} from '@bbc/psammead-locales/numerals';
import {
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_0_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING_QUAD } from '@bbc/gel-foundations/spacings';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import { getSerifLight } from '@bbc/psammead-styles/font-styles';
import {
  doubleDigitDefault,
  doubleDigitOverride,
} from '../testHelpers/doubleDigitOverride';

// For additional spacing for numerals in the right column because of '10' being double digits
const isOnSecondColumn = ({ listIndex, numberOfItems }, supportsGrid) =>
  supportsGrid ? listIndex > Math.ceil(numberOfItems / 2) : listIndex % 2 === 0;

const listHasDoubleDigits = ({ numberOfItems }) => numberOfItems >= 9;

// This checks whether the 2nd column contains a double digit value
const columnIncludesDoubleDigits = (props, supportsGrid) =>
  isOnSecondColumn(props, supportsGrid) && listHasDoubleDigits(props);

const doubleDigitWidth = service => {
  const overrideService = Object.keys(doubleDigitOverride);
  return overrideService.includes(service)
    ? doubleDigitOverride[service]
    : doubleDigitDefault;
};

const isFiveOrTen = ({ service, listIndex }) => {
  return listIndex === 5 ? doubleDigitWidth(service).group5 : 'auto';
};

const bullshit = ({ listIndex }) => {
  return listIndex === 10 ? '2rem' : '4rem';
};
const isTen = ({ listIndex }) => {
  return listIndex === 10 ? '1rem' : '2rem';
};

const StyledWrapper = styled.div`
  min-width: ${props => (listHasDoubleDigits(props) ? isTen(props) : '2rem')};

  max-width: ${props =>
    listHasDoubleDigits(props) ? bullshit(props) : '4rem'};
`;

const StyledSpan = styled.span`
  ${({ service }) => getSerifLight(service)}
  ${({ script }) => script && getFoolscap(script)};
  position: relative;
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding: 0;
`;

const serviceNumerals = service => {
  const servicesNonWesternNumerals = {
    arabic: EasternArabic,
    bengali: Bengali,
    burmese: Burmese,
    nepali: Nepali,
    pashto: EasternArabic,
    persian: EasternArabic,
    urdu: EasternArabic,
  };
  return servicesNonWesternNumerals[service]
    ? servicesNonWesternNumerals[service]
    : WesternArabic;
};

const MostReadRank = ({ service, script, listIndex, numberOfItems, dir }) => {
  const numerals = serviceNumerals(service);
  const rank = numerals[listIndex];
  return (
    <StyledWrapper
      listIndex={listIndex}
      service={service}
      numberOfItems={numberOfItems}
      dir={dir}
    >
      <StyledSpan service={service} script={script}>
        {rank}
      </StyledSpan>
    </StyledWrapper>
  );
};

MostReadRank.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  listIndex: number.isRequired,
  numberOfItems: number.isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadRank.defaultProps = {
  dir: 'ltr',
};

export default MostReadRank;
