import React from 'react';
import styled from 'styled-components';
import { shape, string, oneOf, arrayOf } from 'prop-types';
import {
  Burmese,
  Bengali,
  EasternArabic,
  WesternArabic,
} from '@bbc/psammead-locales/numerals';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import Grid from '../../../psammead-grid';
import { MostReadRank, MostReadLink } from '../Item';

const MostReadItemProps = {
  item: true,
  columns: {
    group0: 6,
    group1: 6,
    group2: 3,
    group3: 3,
    group4: 4,
    group5: 4,
  },
};

const MostReadListProps = {
  enableGelGutters: true,
  enableGelMargins: true,
  columns: {
    group0: 6,
    group1: 6,
    group2: 6,
    group3: 6,
    group4: 8,
    group5: 20,
  },
};

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

const StyledOl = styled.ol.attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const StyledGrid = styled(Grid)`
  grid-auto-flow: column;
  grid-template-rows: repeat(
    ${props => Math.ceil(props.items.length / 2)},
    [col-start] auto [col-end]
  );
  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    grid-template-rows: repeat(
      ${props => props.items.length},
      [col-start] auto [col-end]
    );
  }
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-auto-flow: row;
    grid-template-rows: repeat(
      ${props => Math.floor(props.items.length / 2)},
      [col-start] auto [col-end]
    );
  }
`;

const renderMostReadRank = (service, script, index) => {
  const numerals = serviceNumerals(service);
  const rank = numerals[index + 1];
  return (
    <MostReadRank service={service} script={script} listindex={index}>
      {rank}
    </MostReadRank>
  );
};

const renderMostReadLink = (link, service, script, dir) => (
  <MostReadLink service={service} link={link} script={script} dir={dir} />
);

const MostReadList = ({ items, service, script, dir }) => (
  <StyledOl>
    <StyledGrid {...MostReadListProps} dir={dir} items={items}>
      {items.map((link, i) => (
        <Grid {...MostReadItemProps} dir={dir} forwardedAs="li">
          <StyledLi item={i}>
            {renderMostReadRank(service, script, i)}
            {renderMostReadLink(link, service, script, dir)}
          </StyledLi>
        </Grid>
      ))}
    </StyledGrid>
  </StyledOl>
);

export const itemPropTypes = shape({
  title: string.isRequired,
  href: string.isRequired,
});

MostReadList.propTypes = {
  items: arrayOf(itemPropTypes).isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadList.defaultProps = {
  dir: 'ltr',
};

export default MostReadList;
