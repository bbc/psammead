import React from 'react';
import styled from 'styled-components';
import { node, shape, string, arrayOf } from 'prop-types';
import { EasternArabic, WesternArabic } from '@bbc/psammead-locales/numerals';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import Grid from '../../psammead-grid';
import { MostReadRank, MostReadItem } from './item';

const StyledOl = styled.ol.attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li.attrs({
  role: 'listitem',
})`
  margin: 1rem;
  padding: 0;
  background: #99ffff;
`;

const serviceNumerals = {
  news: WesternArabic,
  arabic: EasternArabic,
};

const MostReadListItem = ({ service, script, item, rank }) => (
  <StyledLi>
    <Grid
      columns={{
        group0: 5,
        group1: 5,
        group2: 5,
        group3: 5,
        group4: 5,
        group5: 5,
      }}
    >
      <Grid
        item
        columns={{
          group0: 1,
          group1: 1,
          group2: 1,
          group3: 1,
          group4: 1,
          group5: 1,
        }}
      >
        <MostReadRank service={service} script={script}>
          {rank}
        </MostReadRank>
      </Grid>
      <Grid
        item
        columns={{
          group0: 4,
          group1: 4,
          group2: 4,
          group3: 4,
          group4: 4,
          group5: 4,
        }}
      >
        <MostReadItem service={service} item={item} />
      </Grid>
    </Grid>
  </StyledLi>
);

const MostReadList = ({ items, service, script }) => {
  const numerals = serviceNumerals[service];
  return (
    <StyledOl>
      <Grid
        enableGelGutters
        enableGelMargins
        columns={{
          group0: 1,
          group1: 1,
          group2: 2,
          group3: 2,
          group4: 2,
          group5: 5,
        }}
      >
        {items.map((item, i) => (
          <MostReadListItem
            item={item}
            service={service}
            script={script}
            rank={numerals[i + 1]}
          />
        ))}
      </Grid>
    </StyledOl>
  );
};

StyledOl.propTypes = {
  children: node.isRequired,
};

StyledLi.propTypes = {
  children: node.isRequired,
};

const itemPropTypes = shape({
  title: string.isRequired,
  href: string.isRequired,
});

MostReadListItem.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  item: itemPropTypes.isRequired,
  rank: string.isRequired,
};

MostReadList.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  items: arrayOf(itemPropTypes).isRequired,
};

export default MostReadList;
