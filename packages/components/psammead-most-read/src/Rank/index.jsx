import React from 'react';
import { shape, string, oneOf, number, bool } from 'prop-types';
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
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import { getSerifLight } from '@bbc/psammead-styles/font-styles';
import {
  doubleDigitDefault,
  doubleDigitThin,
  singleDigitDefault,
  singleDigitThin,
  thinFontServices,
} from '../utilities/doubleDigitOverride';

// For additional spacing for numerals in the right column because of '10' being double digits
const isOnSecondColumn = ({ listIndex, numberOfItems }, supportsGrid) =>
  supportsGrid ? listIndex > Math.ceil(numberOfItems / 2) : listIndex % 2 === 0;

const listHasDoubleDigits = ({ numberOfItems }) => numberOfItems >= 9;

// This checks whether the 2nd column contains a double digit value
const columnIncludesDoubleDigits = (props, supportsGrid) =>
  isOnSecondColumn(props, supportsGrid) && listHasDoubleDigits(props);

const doubleDigitCheck = numberOfItems => {
  const singleDigitFunctions = {
    default: singleDigitDefault,
    thin: singleDigitThin,
    name: 'single',
  };
  const doubleDigitFunctions = {
    default: doubleDigitDefault,
    thin: doubleDigitThin,
    name: 'double',
  };

  return listHasDoubleDigits({ numberOfItems })
    ? doubleDigitFunctions
    : singleDigitFunctions;
};

const fontWeight = ({ service, numberOfItems }) => {
  return thinFontServices.includes(service)
    ? doubleDigitCheck(numberOfItems).thin
    : doubleDigitCheck(numberOfItems).default;
};

const isFiveOrTen = ({ listIndex, service, numberOfItems }) => {
  return listIndex === 5 || listIndex === 10
    ? fontWeight({ service, numberOfItems }).group3_5_column
    : doubleDigitThin.group5;
};

const TwoColumnWrapper = styled.div`
  @media (max-width: ${GEL_GROUP_0_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      listHasDoubleDigits(props)
        ? fontWeight(props).group0_column
        : fontWeight(props).group0};
  }
  @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      listHasDoubleDigits(props)
        ? fontWeight(props).group1_column
        : fontWeight(props).group1};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      listHasDoubleDigits(props)
        ? fontWeight(props).group2_column
        : fontWeight(props).group2};
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      columnIncludesDoubleDigits(props, false)
        ? fontWeight(props).group3_5_column
        : fontWeight(props).group3};
  }
  @supports (${grid}) {
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
      min-width: ${props =>
        columnIncludesDoubleDigits(props, true)
          ? fontWeight(props).group3_5_column
          : fontWeight(props).group3};
    }
  }
`;

const MultiColumnWrapper = styled(TwoColumnWrapper)`
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      listHasDoubleDigits(props)
        ? isFiveOrTen(props)
        : fontWeight(props).group5};
  }
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
    bengali: Bengali,
    burmese: Burmese,
    nepali: Nepali,
    pashto: EasternArabic,
    persian: EasternArabic,
  };
  return servicesNonWesternNumerals[service]
    ? servicesNonWesternNumerals[service]
    : WesternArabic;
};

const MostReadRank = ({
  service,
  script,
  listIndex,
  numberOfItems,
  dir,
  maxTwoColumns,
}) => {
  const numerals = serviceNumerals(service);
  const rank = numerals[listIndex];
  const RankWrapper = maxTwoColumns ? TwoColumnWrapper : MultiColumnWrapper;

  return (
    <RankWrapper
      listIndex={listIndex}
      service={service}
      numberOfItems={numberOfItems}
      dir={dir}
    >
      <StyledSpan service={service} script={script}>
        {rank}
      </StyledSpan>
    </RankWrapper>
  );
};

MostReadRank.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  listIndex: number.isRequired,
  numberOfItems: number.isRequired,
  dir: oneOf(['rtl', 'ltr']),
  maxTwoColumns: bool,
};

MostReadRank.defaultProps = {
  dir: 'ltr',
  maxTwoColumns: false,
};

export default MostReadRank;
