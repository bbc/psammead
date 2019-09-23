import React from 'react';
import { node } from 'prop-types';
import styled, { css } from 'styled-components';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_GUTTER_BELOW_600PX,
  GEL_MARGIN_ABOVE_400PX,
  GEL_GUTTER_ABOVE_600PX,
} from '@bbc/gel-foundations/spacings';
import {
  // GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const group4ColWidth = `6.75rem`;
/* (GEL_GROUP_4_SCREEN_WIDTH_MIN - (2*GEL_MARGIN_ABOVE_400PX + 7*GEL_GUTTER_ABOVE_600PX))/8; */

const group5ColWidth = `2.95rem`;
/* (1280px - (2*16px margins + 19*16px gutters) / 20 columns = 47.2px = 2.95rem single column width */

const group4WrapperMaxWidth = `45.5rem`;
// (6.75rem * 6) + 5*16px gutters = 728 = 45.5 rem

const group5WrapperMaxWidth = `46.4rem`;
// (2.95rem * 12) + 11*16px gutters = 742.4 = 46.4 rem

const gelGridMargin = css`
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_BELOW_400PX};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_MARGIN_ABOVE_400PX};
  }
`;

const Grid = styled.div`
  margin: 0 auto;
  ${gelGridMargin};
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    grid-column-gap: ${GEL_GUTTER_BELOW_600PX};
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
  }
  @media (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    grid-template-columns: [content-start] repeat(6, 1fr) [content-end];
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    grid-template-columns:
      1fr
      [content-start] repeat(8, minmax(0, ${group4ColWidth})) [content-end]
      1fr;
    max-width: ${group4WrapperMaxWidth};
  }
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-template-columns:
      1fr
      [content-start] repeat(20, minmax(0, ${group5ColWidth})) [content-end]
      1fr;
    max-width: ${group5WrapperMaxWidth};
  }

  @supports (display: grid) {
    display: grid;
    max-width: initial;
    margin: initial;
  }
`;

const getGridStart = ({ columns, parentColumns, center, startOffset }) => {
  if (startOffset) {
    return `${startOffset}`;
  }

  if (parentColumns && center) {
    return `${Math.floor((parentColumns - columns) / 2) + 1}`;
  }

  return '1';
};

const SingleGrid = styled.div`
  width: ${({ columns, parentColumns }) =>
    `${(columns / parentColumns) * 100}%`};
  ${({ center }) =>
    center &&
    `
    margin: 0 auto; 
    @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_BELOW_400PX};
    }
    @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
      padding: 0 ${GEL_MARGIN_ABOVE_400PX};
    }
  `};

  @supports (display: grid) {
    margin: initial;
    width: initial;
    ${({ wrapper }) => wrapper && `display: grid;`}

    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      grid-column-gap: ${GEL_GUTTER_BELOW_600PX};
    }
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
    }

    grid-column: ${getGridStart} / span ${({ columns }) => columns};
  }
`;

export const SingleGridComponent = ({ children, ...otherProps }) => {
  const renderChildren = () =>
    React.Children.map(children, child =>
      React.cloneElement(child, {
        parentColumns: otherProps.columns,
      }),
    );

  return <SingleGrid {...otherProps}>{renderChildren()}</SingleGrid>;
};
SingleGridComponent.propTypes = {
  children: node.isRequired,
};

export default Grid;
