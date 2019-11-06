import styled from 'styled-components';
import { node } from 'prop-types';
import { MostReadRank, MostReadItem } from './item';

export const MostReadOl = styled.ol.attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MostReadLi = styled.li.attrs({
  role: 'listitem',
})`
  margin: 0;
  padding: 0;
`;

MostReadOl.propTypes = {
  children: node.isRequired,
};

MostReadLi.propTypes = {
  children: node.isRequired,
};
