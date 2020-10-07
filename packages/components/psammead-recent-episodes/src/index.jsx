import React from 'react';
import styled from 'styled-components';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { grid } from '@bbc/psammead-styles/detection';
import Grid from '@bbc/psammead-grid';
import { string } from 'prop-types';

// Wrapping Grid + adds the dividers
const RecentEpisodes = styled.ul`
  li {
    border-bottom: 1px black solid;
  }
`;

// Get SVG
// Align to top
const PlayIcon = styled.div`
  display: inline-block;
`;

const Wrapper = styled.h3`
  display: inline-block;
`;

// Most stuff goes
RecentEpisodes.Episode = ({ children, Link }) => {
  return (
    <li>
      <Link>
        <PlayIcon>Play!</PlayIcon>
        <Wrapper>{children}</Wrapper>
      </Link>
    </li>
  );
};

RecentEpisodes.BrandTitle = styled.h2``;
RecentEpisodes.EpisodeTitle = styled.p``;
RecentEpisodes.Date = styled.p``;
RecentEpisodes.Duration = styled.p``;

RecentEpisodes.propTypes = {};

RecentEpisodes.defaultProps = {};

export default RecentEpisodes;
