import React from 'react';
import styled from '@emotion/styled';
import { string, number } from 'prop-types';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MAX,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const Wrapper = styled.div`
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};
  @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
    margin-left: ${props => (props.dir === 'ltr' ? 0 : GEL_SPACING_DBL)};
    margin-right: ${props => (props.dir === 'ltr' ? GEL_SPACING_DBL : 0)};
    padding-top: ${props => (props.dir === 'ltr' ? 0 : '0.25rem')};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    margin-left: ${props =>
      props.dir === 'ltr' ? GEL_SPACING : GEL_SPACING_DBL};
    margin-right: ${props =>
      props.dir === 'ltr' ? GEL_SPACING_DBL : GEL_SPACING};
    padding-top: ${props => (props.dir === 'ltr' ? 0 : '0.25rem')};
  }
  vertical-align: top;
`;

const MediaIndicator = ({ size, dir }) => (
  <Wrapper
    aria-hidden="true"
    size={size}
    dir={dir}
    dangerouslySetInnerHTML={{
      __html: `
      <svg class="rounded-play-button" focusable="false" width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <circle class="rounded-play-button__circle" fill="none" stroke="currentColor" stroke-width="1.765" stroke-miterlimit="10" cx="20" cy="20" r="19.119"/>
        <polygon class="rounded-play-button__triangle" fill="currentColor" points="15.799,26.939 27.062,20.008 15.799,13.078 "/>
      </svg>
      `,
    }}
  />
);

MediaIndicator.propTypes = {
  size: number.isRequired,
  dir: string.isRequired,
};

export default MediaIndicator;
