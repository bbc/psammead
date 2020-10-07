import React from 'react';
import styled from 'styled-components';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { grid } from '@bbc/psammead-styles/detection';
import Grid from '@bbc/psammead-grid';
import { string } from 'prop-types';

const RecentEpisodes = ({ }) => (
  <StyledGrid forwardedAs="ul" dir={dir}>
  </StyledGrid>
);

RecentEpisodes.propTypes = {
};

RecentEpisodes.defaultProps = {
};

export default RecentEpisodes;
