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
        <path class="rounded-play-button__inner" fill="transparent" d="M20,0C8.971,0,0,8.972,0,20c0,11.028,8.972,20,20,20c11.029,0,20.002-8.972,20.002-20C40.002,8.972,31.028,0,20,0z
        M15.799,26.939V13.078l11.264,6.93L15.799,26.939z"/>
        <path class="rounded-play-button__ring" fill="currentColor" d="M20,40C8.971,40,0,31.028,0,20C0,8.972,8.971,0,20,0c11.029,0,20.002,8.972,20.002,20C40.002,31.028,31.028,40,20,40z
        M20,1.765C9.945,1.765,1.764,9.945,1.764,20S9.945,38.234,20,38.234c10.056,0,18.237-8.18,18.237-18.234S30.056,1.765,20,1.765z"/>
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
