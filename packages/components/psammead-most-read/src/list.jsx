import React from 'react';
import styled from 'styled-components';
import { oneOf, number, node } from 'prop-types';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import Grid from '@bbc/psammead-grid';

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

const StyledOl = styled.ol.attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledGrid = styled(Grid)`
  grid-auto-flow: column;
  grid-template-rows: repeat(
    ${props => Math.ceil(props.numberOfItems / 2)},
    [col-start] auto [col-end]
  );
  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    grid-template-rows: repeat(
      ${props => props.numberOfItems},
      [col-start] auto [col-end]
    );
  }
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-auto-flow: row;
    grid-template-rows: repeat(
      ${props => Math.floor(props.numberOfItems / 2)},
      [col-start] auto [col-end]
    );
  }
`;

const MostReadList = ({ numberOfItems, dir, children }) => (
  <StyledOl>
    <StyledGrid {...MostReadListProps} dir={dir} numberOfItems={numberOfItems}>
      {children}
    </StyledGrid>
  </StyledOl>
);

MostReadList.propTypes = {
  numberOfItems: number.isRequired,
  children: node.isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadList.defaultProps = {
  dir: 'ltr',
};

export default MostReadList;

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

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

export const MostReadItemWrapper = ({ dir, children }) => (
  <Grid
    {...MostReadItemProps}
    parentColumns={MostReadListProps.columns}
    dir={dir}
    forwardedAs="li"
  >
    <StyledLi>{children}</StyledLi>
  </Grid>
);

MostReadItemWrapper.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  children: node.isRequired,
};

MostReadItemWrapper.defaultProps = {
  dir: 'ltr',
};
