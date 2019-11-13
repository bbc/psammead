import React from 'react';
import styled from 'styled-components';
import { node, shape, string, arrayOf, integer } from 'prop-types';
import { EasternArabic, WesternArabic } from '@bbc/psammead-locales/numerals';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
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
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const serviceNumerals = {
  news: WesternArabic,
  arabic: EasternArabic,
};

const MostReadListItem = ({ service, script, item, rank }) => (
  <StyledLi>
    <MostReadRank service={service} script={script}>
      {rank}
    </MostReadRank>
    <MostReadItem service={service} item={item} />
  </StyledLi>
);

const MostReadList = ({ items, service, script }) => {
  const numerals = serviceNumerals[service];
  return (
    <StyledOl>
      {items.map((item, i) => (
        <MostReadListItem
          item={item}
          service={service}
          script={script}
          rank={numerals[i + 1]}
        />
      ))}
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
  rank: integer.isRequired,
};

MostReadList.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  items: arrayOf(itemPropTypes).isRequired,
};

export default MostReadList;
