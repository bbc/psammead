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
  doubleDigitOverride,
} from '../utilities/doubleDigitOverride';

// For additional spacing for numerals in the right column because of '10' being double digits
const isOnSecondColumn = ({ listIndex, numberOfItems }, supportsGrid) =>
  supportsGrid ? listIndex > Math.ceil(numberOfItems / 2) : listIndex % 2 === 0;

const listHasDoubleDigits = ({ numberOfItems }) => numberOfItems >= 9;

// This checks whether the 2nd column contains a double digit value
const columnIncludesDoubleDigits = (props, supportsGrid) =>
  isOnSecondColumn(props, supportsGrid) && listHasDoubleDigits(props);

const doubleDigitWidth = ({ service }) => {
  const overrideService = Object.keys(doubleDigitOverride);
  return overrideService.includes(service)
    ? doubleDigitOverride[service]
    : doubleDigitDefault;
};

const OneColumnWrapper = styled.div`
  @media (max-width: ${GEL_GROUP_0_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      listHasDoubleDigits(props) ? doubleDigitWidth(props).group0 : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      listHasDoubleDigits(props) ? doubleDigitWidth(props).group1 : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    min-width: ${props =>
      listHasDoubleDigits(props) ? doubleDigitWidth(props).group2 : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      listHasDoubleDigits(props) ? doubleDigitWidth(props).group3 : 'auto'};
  }

  /* different number order for when css grid is supported  */
  @supports (${grid}) {
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      min-width: ${props =>
        listHasDoubleDigits(props) ? doubleDigitWidth(props).group3 : 'auto'};
    }
  }
`;

const TwoColumnWrapper = styled(OneColumnWrapper)`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      columnIncludesDoubleDigits(props, false)
        ? doubleDigitWidth(props).group3
        : 'auto'};
  }
  /* different number order for when css grid is supported  */
  @supports (${grid}) {
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      min-width: ${props =>
        columnIncludesDoubleDigits(props, true)
          ? doubleDigitWidth(props).group3
          : 'auto'};
    }
  }
`;

const MultiColumnWrapper = styled(TwoColumnWrapper)`
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

const getColumnWrapper = columnWrapper =>
  ({
    oneColumn: OneColumnWrapper,
    twoColumn: TwoColumnWrapper,
    multiColumn: MultiColumnWrapper,
  }[columnWrapper]);

const MostReadRank = ({
  service,
  script,
  listIndex,
  numberOfItems,
  dir,
  columnLayout,
}) => {
  const numerals = serviceNumerals(service);
  const rank = numerals[listIndex];
  const RankWrapper = getColumnWrapper(columnLayout);

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
  columnLayout: string,
};

MostReadRank.defaultProps = {
  dir: 'ltr',
  columnLayout: 'multiColumn',
};

export default MostReadRank;
