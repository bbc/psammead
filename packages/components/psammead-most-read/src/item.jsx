import React from 'react';
import { shape, string, oneOf, node, number } from 'prop-types';
import styled from 'styled-components';
import { getDoublePica } from '@bbc/gel-foundations/typography';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import {
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

// This is to handle the padding between the rank and the link for both ltr and rtl stories.
const paddingStart = ({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}`;

// This is to make where the link ends consistent for both columns.
const paddingEnd = ({ dir }) => `padding-${dir === 'ltr' ? 'right' : 'left'}`;

// This checks if the item is in the first column to make links the same width as in the second column.
const isOnFirstColumn = ({ listIndex, numberOfItems }, supportsGrid) =>
  supportsGrid ? listIndex > Math.ceil(numberOfItems / 2) : listIndex % 2 === 1;

// These measurements are to be used for making the width of the links in each column consistent.
const firstColumnLinkWidths = {
  group2: '1.3rem',
  group3: '1.8rem',
  group5: '1.5rem',
};

const StyledLink = styled.a`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSerifMedium(service)}

  color: ${C_EBON};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const StyledItem = styled.div`
  padding-bottom: ${GEL_SPACING_TRPL};
  ${paddingStart}: ${GEL_SPACING_DBL};
  ${paddingEnd}: ${GEL_SPACING_DBL};
  ${paddingEnd}: 0;

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    ${paddingEnd}: ${props =>
  isOnFirstColumn(props, false) ? '0rem' : firstColumnLinkWidths.group2};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    ${paddingEnd}: ${props =>
  isOnFirstColumn(props, false) ? '0rem' : firstColumnLinkWidths.group3};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    ${paddingEnd}: ${props =>
  props.listIndex !== 4 && props.listIndex !== 9
    ? firstColumnLinkWidths.group5
    : '0rem'};
  }

  @supports (${grid}) {
    @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
      ${paddingEnd}: ${props =>
  isOnFirstColumn(props, true) ? '0rem' : firstColumnLinkWidths.group2};
    }

    @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
      ${paddingEnd}: ${props =>
  isOnFirstColumn(props, true) ? '0rem' : firstColumnLinkWidths.group3};
    }

    @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
      ${paddingEnd}: 0rem;
  }
`;

export const MostReadLink = ({
  dir,
  service,
  script,
  title,
  href,
  numberOfItems,
  listIndex,
  children,
}) => (
  <StyledItem dir={dir} numberOfItems={numberOfItems} listIndex={listIndex}>
    <StyledLink href={href} script={script} service={service}>
      {title}
    </StyledLink>
    {children}
  </StyledItem>
);

MostReadLink.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  title: string.isRequired,
  href: string.isRequired,
  numberOfItems: number.isRequired,
  listIndex: number.isRequired,
  children: node, // this node will be a timestamp container
};

MostReadLink.defaultProps = {
  dir: 'ltr',
  children: null,
};

export default MostReadLink;
