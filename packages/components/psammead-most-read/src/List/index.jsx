import React from 'react';
import styled from 'styled-components';
import { oneOf, number, node, string } from 'prop-types';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import Grid from '@bbc/psammead-grid';
import { mostReadListGridProps } from '../utilities/gridProps';

const OneColumnGrid = styled(Grid).attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-auto-flow: column;
  grid-template-rows: repeat(
    ${props => props.numberOfItems},
    [col-start] auto [col-end]
  );
  }
`;

const TwoColumnGrid = styled(Grid).attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-auto-flow: column;
  grid-template-rows: repeat(
    ${props => Math.ceil(props.numberOfItems / 2)},
    [col-start] auto [col-end]
  );
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    grid-template-rows: repeat(
      ${props => props.numberOfItems},
      [col-start] auto [col-end]
    );
  }
`;

const MultiColumnGrid = styled(TwoColumnGrid)`
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-auto-flow: row;
    grid-template-rows: repeat(
      ${props => Math.floor(props.numberOfItems / 2)},
      [col-start] auto [col-end]
    );
  }
`;

const getColumnLayout = columnLayout =>
  ({
    oneColumn: OneColumnGrid,
    twoColumn: TwoColumnGrid,
    multiColumn: MultiColumnGrid,
  }[columnLayout]);

const MostReadList = ({ numberOfItems, dir, columnLayout, children }) => {
  const MostReadListGrid = getColumnLayout(columnLayout);
  return (
    <MostReadListGrid
      {...mostReadListGridProps}
      dir={dir}
      numberOfItems={numberOfItems}
      forwardedAs="ol"
    >
      {children}
    </MostReadListGrid>
  );
};

MostReadList.propTypes = {
  children: node.isRequired,
  dir: oneOf(['rtl', 'ltr']),
  columnLayout: string,
  numberOfItems: number.isRequired,
};

MostReadList.defaultProps = {
  dir: 'ltr',
  columnLayout: 'multiColumn',
};

export default MostReadList;
