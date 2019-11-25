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
import Grid from '../../psammead-grid';
import { MostReadRank, MostReadLink } from './item';

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
    group0: 5,
    group1: 5,
    group2: 2,
    group3: 2,
    group4: 4,
    group5: 3,
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

const StyledLi = styled.li.attrs({
  role: 'listitem',
})`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const MostReadItem = ({ rank, link, service, script, dir }) => (
  <Grid {...MostReadItemProps} dir={dir} forwardedAs="li">
    <StyledLi>
      <MostReadRank service={service} script={script}>
        {rank}
      </MostReadRank>
      <MostReadLink service={service} link={link} script={script} dir={dir} />
    </StyledLi>
  </Grid>
);

const MostReadList = ({ items, service, script, dir }) => {
  const numerals = serviceNumerals(service);
  return (
    <StyledOl>
      <Grid {...MostReadListProps} dir={dir}>
        {items.map((link, i) => {
          const rank = numerals[i + 1];
          return (
            <MostReadItem
              key={rank}
              link={link}
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

const linkPropTypes = shape({
  title: string.isRequired,
  href: string.isRequired,
});

MostReadItem.propTypes = {
  rank: string.isRequired,
  link: linkPropTypes.isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadList.propTypes = {
  items: arrayOf(linkPropTypes).isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadItem.defaultProps = {
  dir: 'ltr',
};

MostReadList.defaultProps = {
  dir: 'ltr',
};

export default MostReadList;
