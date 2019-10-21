import React from 'react';
import { bool, node, number, shape, oneOf } from 'prop-types';
import styled, { css } from 'styled-components';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_GUTTER_BELOW_600PX,
  GEL_MARGIN_ABOVE_400PX,
  GEL_GUTTER_ABOVE_600PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_0_SCREEN_WIDTH_MAX,
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const groups = {
  group0: {
    min: null,
    max: GEL_GROUP_0_SCREEN_WIDTH_MAX,
    gutterSize: GEL_GUTTER_BELOW_600PX,
    marginSize: GEL_MARGIN_BELOW_400PX,
  },
  group1: {
    min: GEL_GROUP_1_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_1_SCREEN_WIDTH_MAX,
    gutterSize: GEL_GUTTER_BELOW_600PX,
    marginSize: GEL_MARGIN_BELOW_400PX,
  },
  group2: {
    min: GEL_GROUP_2_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_2_SCREEN_WIDTH_MAX,
    gutterSize: GEL_GUTTER_BELOW_600PX,
    marginSize: GEL_MARGIN_ABOVE_400PX,
  },
  group3: {
    min: GEL_GROUP_3_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_3_SCREEN_WIDTH_MAX,
    gutterSize: GEL_GUTTER_ABOVE_600PX,
    marginSize: GEL_MARGIN_ABOVE_400PX,
  },
  group4: {
    min: GEL_GROUP_4_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_4_SCREEN_WIDTH_MAX,
    gutterSize: GEL_GUTTER_ABOVE_600PX,
    marginSize: GEL_MARGIN_ABOVE_400PX,
  },
  group5: {
    min: GEL_GROUP_5_SCREEN_WIDTH_MIN,
    max: null,
    gutterSize: GEL_GUTTER_ABOVE_600PX,
    marginSize: GEL_MARGIN_ABOVE_400PX,
  },
};

const mediaQuery = ({ min, max, styles }) => {
  if (min && max) {
    return `
      @media (min-width: ${min}) and (max-width: ${max}) {
        ${styles}
      }
    `;
  }
  if (min) {
    return `
      @media (min-width: ${min}) {
        ${styles}
      }
    `;
  }
  if (max) {
    return `
      @media (max-width: ${max}) {
        ${styles}
      }
    `;
  }
  return '';
};

const gridMediaQueries = ({
  columns,
  gridStartOffset,
  enableGelGutters,
  enableGelMargins,
}) => {
  const selectedGroups = Object.keys(columns);

  return selectedGroups.map(group =>
    mediaQuery({
      min: groups[group].min,
      max: groups[group].max,
      styles: `
      width: initial;
      margin: 0;
      grid-template-columns: repeat(${columns[group]}, 1fr);
      grid-column-end: span ${columns[group]};
      ${enableGelGutters ? `grid-column-gap: ${groups[group].gutterSize};` : ``}
      ${enableGelMargins ? `padding: 0 ${groups[group].marginSize};` : ``}
      ${
        gridStartOffset && gridStartOffset[group]
          ? `grid-column-start: ${gridStartOffset[group]};`
          : ``
      }`,
    }),
  );
};

const startOffsetPercentage = (columnsGroup, gridStartOffsetGroup) =>
  `${(100 / columnsGroup) * (gridStartOffsetGroup - 1)}%`;

const negativeOffset = (
  columnsGroup,
  parentColumnsGroup,
  gridStartOffset,
  gridStartOffsetGroup,
) => {
  const isValidOffset =
    gridStartOffset &&
    gridStartOffsetGroup &&
    gridStartOffsetGroup < parentColumnsGroup &&
    columnsGroup === parentColumnsGroup;

  return isValidOffset
    ? ` - ${startOffsetPercentage(parentColumnsGroup, gridStartOffsetGroup)}`
    : ``;
};

/*
 * 1 We vertically align to the top so that sibling
 *   grid items that are placed side-by-side within a row
 *   have their text and images aligned
 */
const childrenFallback = (
  item,
  dir,
  columnsGroup,
  parentColumnsGroup,
  parentEnableGelGutters,
  gutterSize,
  gridStartOffset,
  gridStartOffsetGroup,
) => ` 
  ${
    item && parentEnableGelGutters
      ? ` 
        margin: 0 ${parseFloat(gutterSize) / 2}rem;
        width: calc(${(100 * columnsGroup) / parentColumnsGroup}%
          - ${gutterSize}${negativeOffset(
          columnsGroup,
          parentColumnsGroup,
          gridStartOffset,
          gridStartOffsetGroup,
        )});
        `
      : `
        width: calc(${(100 * columnsGroup) /
          parentColumnsGroup}%${negativeOffset(
          columnsGroup,
          parentColumnsGroup,
          gridStartOffset,
          gridStartOffsetGroup,
        )});
        `
  }
  ${
    gridStartOffsetGroup && gridStartOffsetGroup < parentColumnsGroup
      ? `margin-${dir === 'ltr' ? 'left' : 'right'}: ${startOffsetPercentage(
          parentColumnsGroup,
          gridStartOffsetGroup,
        )}`
      : ``
  }
  display: inline-block;
  vertical-align: top; 
`; /* [1] */

const outerGridFallback = (
  dir,
  columnsGroup,
  enableGelGutters,
  gutterSize,
  gridStartOffset,
  gridStartOffsetGroup,
) => `
  ${enableGelGutters ? `margin: 0 -${parseFloat(gutterSize) / 2}rem;` : ``}
  ${
    gridStartOffset && gridStartOffsetGroup < columnsGroup
      ? `margin-${dir === 'ltr' ? 'left' : 'right'}: ${startOffsetPercentage(
          columnsGroup,
          gridStartOffsetGroup,
        )}`
      : ``
  }`;

const gridFallbacks = css`
  ${({
    item,
    dir,
    columns,
    parentColumns,
    enableGelGutters,
    parentEnableGelGutters,
    gridStartOffset,
  }) => {
    const isOuterGrid = !parentColumns;

    const selectedGroups = Object.keys(columns);
    return `
      ${isOuterGrid ? 'position: relative;' : ''}

      ${selectedGroups
        .map(
          group => `
            ${mediaQuery({
              min: groups[group].min,
              max: groups[group].max,
              styles: `
              ${
                isOuterGrid
                  ? outerGridFallback(
                      dir,
                      columns[group],
                      enableGelGutters,
                      groups[group].gutterSize,
                      gridStartOffset,
                      gridStartOffset[group],
                    )
                  : childrenFallback(
                      item,
                      dir,
                      columns[group],
                      parentColumns[group],
                      parentEnableGelGutters,
                      groups[group].gutterSize,
                      gridStartOffset,
                      gridStartOffset[group],
                    )
              }`,
            })}
          `,
        )
        .join('')} 
    `;
  }}
`;

const GridComponent = styled.div`
  ${gridFallbacks}
  @supports (display: grid) {
    ${gridMediaQueries}
    ${({ item }) =>
      item ? `display: block;` : `display: grid; position: initial;`}
  }
`;

const wrapperFallbacks = ({ columns }) => {
  const selectedGroups = Object.keys(columns);

  return selectedGroups.map(group =>
    mediaQuery({
      min: groups[group].min,
      max: groups[group].max,
      styles: `
        padding: 0 ${groups[group].marginSize};
      `,
    }),
  );
};

const Wrapper = styled.div`
  ${wrapperFallbacks}
  @supports (display: grid) {
    padding: 0;
  }
`;

const Grid = ({
  children,
  startOffset: gridStartOffset, // alias this prop to prevent it rendering as an element attribute e.g. <div startoffset="[object Object]">
  ...otherProps
}) => {
  const renderChildren = () =>
    React.Children.map(children, child => {
      const isNestedGridComponent = child.type === Grid;

      if (isNestedGridComponent) {
        return React.cloneElement(child, {
          parentColumns: otherProps.columns,
          parentEnableGelGutters: otherProps.enableGelGutters,
        });
      }
      return child;
    });

  const renderGridComponent = () => (
    <GridComponent {...otherProps} gridStartOffset={gridStartOffset}>
      {renderChildren()}
    </GridComponent>
  );

  const isOuterGrid = otherProps.enableGelMargins && !otherProps.parentColumns;

  if (isOuterGrid) {
    // This is done to add a wrapper with padding when CSS Grid is not supported and enableGelMargins is passed
    return (
      <Wrapper columns={otherProps.columns}>{renderGridComponent()}</Wrapper>
    );
  }

  return renderGridComponent();
};

Grid.propTypes = {
  children: node.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  columns: shape({
    group1: number,
    group2: number,
    group3: number,
    group4: number,
    group5: number,
  }).isRequired,
  enableGelGutters: bool,
  enableGelMargins: bool,
  startOffset: shape({
    group1: number,
    group2: number,
    group3: number,
    group4: number,
    group5: number,
  }),
  item: bool,
};

Grid.defaultProps = {
  dir: 'ltr',
  enableGelGutters: false,
  enableGelMargins: false,
  startOffset: {},
  item: false,
};

export default Grid;
