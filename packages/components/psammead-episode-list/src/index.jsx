import React from 'react';
import styled from 'styled-components';
import { C_METAL, C_EBON, C_CLOUD_LIGHT } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

import { arrayOf, element } from 'prop-types';

import Episode from './episode';

const StyledEpisodeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 16px 0;
  }
  li:first-child {
    padding-top: 0;
  }
  li:last-child {
    padding-bottom: 0;
  }
  li:not(:last-child) {
    border-bottom: 1px ${C_CLOUD_LIGHT} solid;
  }
`;

const EpisodeList = ({ children }) => {
  if (!children.length) return null;

  const hasMultipleChildren = children.length > 1;
  const enhancedChildren = children.map(child =>
    React.cloneElement(child, {
      as: hasMultipleChildren ? 'li' : 'div',
    }),
  );

  if (hasMultipleChildren)
    return <StyledEpisodeList>{enhancedChildren}</StyledEpisodeList>;
  return <>{enhancedChildren}</>;
};

EpisodeList.propTypes = {
  children: arrayOf(element),
};

EpisodeList.defaultProps = {
  children: [],
};

// This module also has a range of supplemental components to provide consumers with some compositational control
EpisodeList.Episode = Episode;

const TypographyBase = styled.span`
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
`;

EpisodeList.Title = styled(TypographyBase)`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 16px;
  }
`;

EpisodeList.Description = styled(TypographyBase)`
  font-size: 15px;
  line-height: 18px;
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    font-size: 14px;
  }
  margin: 4px 0;
`;

EpisodeList.Metadata = styled(TypographyBase)`
  font-size: 14px;
  line-height: 18px;
  color: ${C_METAL};
  text-decoration: none !important;
  span {
    text-decoration: none !important;
  }
`;

export default EpisodeList;
