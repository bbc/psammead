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
    gutters: GEL_GUTTER_BELOW_600PX,
    margins: GEL_MARGIN_BELOW_400PX,
  },
  group1: {
    min: GEL_GROUP_1_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_1_SCREEN_WIDTH_MAX,
    gutters: GEL_GUTTER_BELOW_600PX,
    margins: GEL_MARGIN_BELOW_400PX,
  },
  group2: {
    min: GEL_GROUP_2_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_2_SCREEN_WIDTH_MAX,
    gutters: GEL_GUTTER_BELOW_600PX,
    margins: GEL_MARGIN_ABOVE_400PX,
  },
  group3: {
    min: GEL_GROUP_3_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_3_SCREEN_WIDTH_MAX,
    gutters: GEL_GUTTER_ABOVE_600PX,
    margins: GEL_MARGIN_ABOVE_400PX,
  },
  group4: {
    min: GEL_GROUP_4_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_4_SCREEN_WIDTH_MAX,
    gutters: GEL_GUTTER_ABOVE_600PX,
    margins: GEL_MARGIN_ABOVE_400PX,
  },
  group5: {
    min: GEL_GROUP_5_SCREEN_WIDTH_MIN,
    max: null,
    gutters: GEL_GUTTER_ABOVE_600PX,
    margins: GEL_MARGIN_ABOVE_400PX,
  },
};

const group4WrapperMaxWidth = `45.5rem`;
// (6.75rem * 6) + 5*16px gutters = 728 = 45.5 rem

const group5WrapperMaxWidth = `46.4rem`;
// (2.95rem * 12) + 11*16px gutters = 742.4 = 46.4 rem

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

const gelGridGutters = css`
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    grid-column-gap: ${GEL_GUTTER_BELOW_600PX};
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
  }
`;

const gelMargins = css`
  margin: 0 auto;
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_BELOW_400PX};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_MARGIN_ABOVE_400PX};
  }
`;

const gelMaxWidths = css`
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    max-width: ${group4WrapperMaxWidth};
  }
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    max-width: ${group5WrapperMaxWidth};
  }
`;
const group4MaxWidth = css`
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    max-width: ${group4WrapperMaxWidth};
  }
`;

const gridMediaQueries = ({ columns, startOffset }) => {
  const selectedGroups = Object.keys(columns);
  return selectedGroups.map(group =>
    mediaQuery({
      min: groups[group].min,
      max: groups[group].max,
      styles: `
        width: initial;
        grid-template-columns: repeat(${columns[group]}, 1fr);
        grid-column-end: span ${columns[group]};
      ${startOffset ? `grid-column-start: ${startOffset[group]};` : ``}`,
    }),
  );
};

const gridFallbacks = css`
  ${({ wrapper, columns, parentColumns }) => {
    if (wrapper || !parentColumns) {
      return `position: relative;`;
    }
    const selectedGroups = Object.keys(columns);
    return selectedGroups.map(
      group =>
        `
      display: inline-block; 
      ${mediaQuery({
        min: groups[group].min,
        max: groups[group].max,
        styles: `
          width: ${(100 * columns[group]) / parentColumns[group]}%;
          vertical-align: top;
        `,
      })}
    `,
    );
  }}
`;

const GridComponent = styled.div`
  ${gridFallbacks}

  @supports (display: grid) {
    ${({ enableGelGutters }) => enableGelGutters && gelGridGutters}
    ${({ enableGelMargins }) => enableGelMargins && gelMargins}
    ${({ enableGelMaxWidths }) => enableGelMaxWidths && gelMaxWidths}
    ${({ enableGroupFourMaxWidth }) =>
      enableGroupFourMaxWidth &&
      group4MaxWidth} /* Don't use a number in a prop! */
    ${gridMediaQueries}
    ${({ wrapper }) =>
      wrapper ? `display: grid; position: initial;` : `display: block;`}
  }
`;

const Grid = ({ children, ...otherProps }) => {
  const renderChildren = () =>
    React.Children.map(children, child => {
      return React.cloneElement(child, {
        parentColumns: otherProps.columns,
        parentStartOffset: otherProps.startOffset,
      });
    });

  return <GridComponent {...otherProps}>{renderChildren()}</GridComponent>;
};
Grid.propTypes = {
  children: node.isRequired,
};

export default Grid;
