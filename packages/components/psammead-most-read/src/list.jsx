import React from 'react';
import styled from 'styled-components';
import { shape, string, arrayOf } from 'prop-types';
import {
  Burmese,
  Bengali,
  EasternArabic,
  WesternArabic,
} from '@bbc/psammead-locales/numerals';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import Grid from '../../psammead-grid';
import { MostReadRank, MostReadLink } from './item';

const MostReadItemProps = {
  columns: {
    group0: 5,
    group1: 5,
    group2: 5,
    group3: 5,
    group4: 5,
    group5: 5,
  },
};

const MostReadRankProps = {
  item: true,
  columns: {
    group0: 1,
    group1: 1,
    group2: 1,
    group3: 1,
    group4: 1,
    group5: 1,
  },
};

const MostReadLinkProps = {
  item: true,
  columns: {
    group0: 4,
    group1: 4,
    group2: 4,
    group3: 4,
    group4: 4,
    group5: 4,
  },
};

const MostReadListProps = {
  enableGelGutters: true,
  enableGelMargins: true,
  columns: {
    group0: 1,
    group1: 1,
    group2: 2,
    group3: 2,
    group4: 2,
    group5: 5,
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

const MostReadItem = ({ service, script, item, rank, dir }) => (
  <li>
    <Grid {...MostReadItemProps} dir={dir}>
      <Grid {...MostReadRankProps} dir={dir}>
        <MostReadRank service={service} script={script}>
          {rank}
        </MostReadRank>
      </Grid>
      <Grid {...MostReadLinkProps} dir={dir}>
        <MostReadLink service={service} item={item} script={script} />
      </Grid>
    </Grid>
  </li>
);

const MostReadList = ({ items, service, script, dir }) => {
  const numerals = serviceNumerals(service);
  return (
    <StyledOl>
      <Grid {...MostReadListProps} dir={dir}>
        {items.map((item, i) => {
          const rank = numerals[i + 1];
          return (
            <MostReadItem
              key={rank}
              item={item}
              service={service}
              script={script}
              rank={rank}
              dir={dir}
            />
          );
        })}
      </Grid>
    </StyledOl>
  );
};

const itemPropTypes = shape({
  title: string.isRequired,
  href: string.isRequired,
});

MostReadItem.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  item: itemPropTypes.isRequired,
  rank: string.isRequired,
  dir: string.isRequired,
};

MostReadList.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  items: arrayOf(itemPropTypes).isRequired,
  dir: string.isRequired,
};

export default MostReadList;
