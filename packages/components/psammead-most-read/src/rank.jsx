import React from 'react';
import { number, oneOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap } from '@bbc/gel-foundations/typography';
import {
  Bengali,
  Burmese,
  EasternArabic,
  WesternArabic,
} from '@bbc/psammead-locales/numerals';
import {
  GEL_GROUP_0_SCREEN_WIDTH_MAX,
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import { getSerifLight } from '@bbc/psammead-styles/font-styles';

const listHasDoubleDigits = ({ numberOfItems }) => numberOfItems >= 9;

// For additional spacing for numerals in the right column because of '10' being double digits.
// Also used in ./item to make link widths in the first column consistent with links in the second column.
export const isInSpecificColumn = (
  { listIndex, numberOfItems },
  supportsGrid,
  column,
) =>
  supportsGrid
    ? listIndex > Math.ceil(numberOfItems / 2)
    : listIndex % 2 === column;

// This checks whether the 2nd column contains a double digit value.
const columnIncludesDoubleDigits = (props, supportsGrid) =>
  isInSpecificColumn(props, supportsGrid, 0) && listHasDoubleDigits(props);

// These default measurements are to be used for 2nd column minimum width.
const doubleDigitDefault = {
  group0: '2.5rem',
  group1: '2.5rem',
  group2: '2.5rem',
  group3: '4rem',
  group5: '4.25rem',
};

// These override measurements are for services with smaller characters and used for 2nd column minimum width.
const doubleDigitOverride = {
  bengali: {
    group0: '2.5rem',
    group1: '2rem',
    group2: '2rem',
    group3: '3rem',
    group5: '3rem',
  },
  arabic: {
    group0: '2.5rem',
    group1: '2.5rem',
    group2: '2.5rem',
    group3: '4rem',
    group5: '3.75rem',
  },
};

const doubleDigitWidth = ({ service }) => {
  const overrideService = ['bengali', 'arabic'];

  return overrideService.includes(service)
    ? doubleDigitOverride[service]
    : doubleDigitDefault;
};

const StyledWrapper = styled.div`
  @media (max-width: ${GEL_GROUP_0_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      listHasDoubleDigits(props) ? doubleDigitWidth(props).group0 : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      listHasDoubleDigits(props) ? doubleDigitWidth(props).group1 : 'auto'};
  }

  /* different number order for when css grid is not supported  */
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      columnIncludesDoubleDigits(props, false)
        ? doubleDigitWidth(props).group2
        : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      columnIncludesDoubleDigits(props, false)
        ? doubleDigitWidth(props).group3
        : 'auto'};
  }

  @supports (${grid}) {
    @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      min-width: ${props =>
        columnIncludesDoubleDigits(props, true)
          ? doubleDigitWidth(props).group2
          : 'auto'};
    }

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
      min-width: ${props =>
        columnIncludesDoubleDigits(props, true)
          ? doubleDigitWidth(props).group3
          : 'auto'};
    }
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listIndex === 5 && listHasDoubleDigits(props)
        ? doubleDigitWidth(props).group5
        : 'auto'};
  }
`;

const StyledSpan = styled.span`
  ${({ service }) => getSerifLight(service)}
  ${({ script }) => script && getFoolscap(script)};
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding: 0;
  float: ${props => (props.dir === 'rtl' ? 'right' : 'left')};
`;

const serviceNumerals = service => {
  const servicesNonWesternNumerals = {
    arabic: EasternArabic,
    bengali: Bengali,
    burmese: Burmese,
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
      <StyledSpan service={service} script={script} dir={dir}>
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
