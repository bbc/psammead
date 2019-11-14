import React from 'react';
import styled from 'styled-components';
import { shape, string, arrayOf } from 'prop-types';
import { EasternArabic, WesternArabic } from '@bbc/psammead-locales/numerals';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import Grid from '../../psammead-grid';
import { MostReadRank, MostReadItem } from './item';

const MostReadLiOuterProps = {
  columns: {
    group0: 5,
    group1: 5,
    group2: 5,
    group3: 5,
    group4: 5,
    group5: 5,
  },
};

const MostReadLiRankProps = {
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

const MostReadLiItemProps = {
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

const MostReadListOuterProps = {
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

const serviceNumerals = {
  news: WesternArabic,
  arabic: EasternArabic,
};

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
  padding: 0.2rem;
`;

const MostReadLi = ({ service, script, item, rank }) => (
  <StyledLi>
    <Grid {...MostReadLiOuterProps}>
      <Grid {...MostReadLiRankProps}>
        <MostReadRank service={service} script={script}>
          {rank}
        </MostReadRank>
      </Grid>
      <Grid {...MostReadLiItemProps}>
        <MostReadItem service={service} item={item} />
      </Grid>
    </Grid>
  </StyledLi>
);

const MostReadList = ({ items, service, script }) => {
  const numerals = serviceNumerals[service];
  return (
    <StyledOl>
      <Grid {...MostReadListOuterProps}>
        {items.map((item, i) => (
          <MostReadLi
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

const itemPropTypes = shape({
  title: string.isRequired,
  href: string.isRequired,
});

MostReadLi.propTypes = {
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
