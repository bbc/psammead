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
  // GEL_GROUP_0_SCREEN_WIDTH_MIN,
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
  },
  group1: {
    min: GEL_GROUP_1_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_1_SCREEN_WIDTH_MAX,
  },
  group2: {
    min: GEL_GROUP_2_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_2_SCREEN_WIDTH_MAX,
  },
  group3: {
    min: GEL_GROUP_3_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_3_SCREEN_WIDTH_MAX,
  },
  group4: {
    min: GEL_GROUP_4_SCREEN_WIDTH_MIN,
    max: GEL_GROUP_4_SCREEN_WIDTH_MAX,
  },
  group5: {
    min: GEL_GROUP_5_SCREEN_WIDTH_MIN,
    max: null,
  },
};

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

export const LegacyGrid = styled.div`
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

const gelMarginsAndMaxWidths = css`
  margin: 0 auto;
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: 0 ${GEL_MARGIN_BELOW_400PX};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: 0 ${GEL_MARGIN_ABOVE_400PX};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN};
  }
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    max-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN};
  }
`;

const SingleGrid = styled.div`
  @supports (display: grid) {
    ${({ wrapper }) => wrapper && `display: grid;`}

    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
      grid-column-gap: ${({ gutterOffset }) =>
        gutterOffset || GEL_GUTTER_BELOW_600PX};
    }
    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      grid-column-gap: ${({ gutterOffset }) =>
        gutterOffset || GEL_GUTTER_ABOVE_600PX};
    }
    ${({ startOffset }) => startOffset && `grid-column-start: ${startOffset};`};
    grid-column: span ${({ columns }) => columns};
  }
`;

// PageStyledGrid should extend with the margins gelMarginsAndMaxWidths
// & then set props as defaults in the PageStyledGrid:
// startOffset={{ group0: 1, group1: 1, group2: 1, group3: 1, group4: 1, group5: 1 }}
// columns={{ group0: 6, group1: 6, group2: 6, group3: 6, group4: 8, group5: 20 }}
// gutters={{ group0: GEL_GUTTER_BELOW_600PX, group1: GEL_GUTTER_BELOW_600PX, group2: GEL_GUTTER_BELOW_600PX, group3: GEL_GUTTER_BELOW_600PX, group4: GEL_GUTTER_ABOVE_600PX, group5: GEL_GUTTER_ABOVE_600PX }}

export const SingleGridComponent = ({ children, ...otherProps }) => {
  const renderChildren = () =>
    React.Children.map(children, child => {
      return React.cloneElement(child, {
        parentColumns: otherProps.columns,
        parentGutterOffset: otherProps.gutterOffset,
        parentStartOffset: otherProps.startOffset,
      });
    });

  return <SingleGrid {...otherProps}>{renderChildren()}</SingleGrid>;
};
SingleGridComponent.propTypes = {
  children: node.isRequired,
};

export const PageStyledGrid = styled(SingleGrid)`
  ${gelMarginsAndMaxWidths};
`;

const gridMediaQueries = ({ columns, startOffset }) => {
  const selectedGroups = Object.keys(columns);
  return selectedGroups.map(group =>
    mediaQuery({
      min: groups[group].min,
      max: groups[group].max,
      styles: `
        grid-template-columns: repeat(${columns[group]}, 1fr);
        grid-column-end: span ${columns[group]};
      ${startOffset ? `grid-column-start: ${startOffset[group]};` : ``}`,
    }),
  );
};

const gelGridGutters = css`
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MAX}) {
    grid-column-gap: ${GEL_GUTTER_BELOW_600PX};
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column-gap: ${GEL_GUTTER_ABOVE_600PX};
  }
`;

const GridComponent = styled.div`
  @supports (display: grid) {
    ${({ topLevel }) => topLevel && `${gelMarginsAndMaxWidths}`}
    ${({ wrapper }) => wrapper && `display: grid;`}
    ${({ gelGutters }) => gelGutters && `${gelGridGutters}`}
    ${gridMediaQueries}
  }
`;

// PageStyledGrid should extend with the margins gelMarginsAndMaxWidths
// & then set props as defaults in the PageStyledGrid:
// startOffset={{ group0: 1, group1: 1, group2: 1, group3: 1, group4: 1, group5: 1 }}
// columns={{ group0: 6, group1: 6, group2: 6, group3: 6, group4: 8, group5: 20 }}
// gutters={{ group0: GEL_GUTTER_BELOW_600PX, group1: GEL_GUTTER_BELOW_600PX, group2: GEL_GUTTER_BELOW_600PX, group3: GEL_GUTTER_BELOW_600PX, group4: GEL_GUTTER_ABOVE_600PX, group5: GEL_GUTTER_ABOVE_600PX }}

export const Grid = ({ children, ...otherProps }) => {
  const renderChildren = () =>
    React.Children.map(children, child => {
      return React.cloneElement(child, {
        parentColumns: otherProps.columns,
        parentGutterOffset: otherProps.gutterOffset,
        parentStartOffset: otherProps.startOffset,
      });
    });

  return <GridComponent {...otherProps}>{renderChildren()}</GridComponent>;
};
Grid.propTypes = {
  children: node.isRequired,
};

const PageGridComponent = styled(GridComponent)`
  ${gelMarginsAndMaxWidths}
  ${gelGridGutters}
`;

export const PageGrid = ({ children, ...otherProps }) => {
  const renderChildren = () =>
    React.Children.map(children, child => {
      return React.cloneElement(child, {
        parentColumns: otherProps.columns,
        parentGutterOffset: otherProps.gutterOffset,
        parentStartOffset: otherProps.startOffset,
      });
    });

  return (
    <PageGridComponent {...otherProps}>{renderChildren()}</PageGridComponent>
  );
};

PageGrid.propTypes = {
  children: node.isRequired,
};
