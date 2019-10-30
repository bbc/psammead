import React from 'react';
import styled from 'styled-components';
import { C_EBON, C_WHITE } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';

// `currentColor` has been used to better reflect user colour choices in Firefox.
const MediaIcon = styled.svg`
  vertical-align: middle;
  margin: 0 ${GEL_SPACING_HLF};
  color: ${C_EBON};
  fill: currentColor;
`;

const VideoMediaIcon = styled(MediaIcon)`
  width: 0.75rem;
  height: 0.75rem;
`;

const AudioMediaIcon = styled(MediaIcon)`
  width: 0.8125rem;
  height: 0.75rem;
`;

const PhotoMediaIcon = styled(MediaIcon)`
  width: 1rem;
  height: 0.8125rem;
`;

const GuidanceIcon = styled(MediaIcon)`
  width: ${GEL_SPACING_TRPL};
  height: ${GEL_SPACING_TRPL};
`;

const mediaIcons = {
  video: (
    <VideoMediaIcon
      viewBox="0 0 32 32"
      width="12px"
      height="12px"
      focusable="false"
    >
      <polygon points="3,32 29,16 3,0" />
    </VideoMediaIcon>
  ),
  audio: (
    <AudioMediaIcon
      viewBox="0 0 13 12"
      width="13px"
      height="12px"
      focusable="false"
    >
      <path d="M9.021 1.811l-.525.525c.938.938 1.5 2.25 1.5 3.675s-.563 2.738-1.5 3.675l.525.525c1.05-1.087 1.725-2.55 1.725-4.2s-.675-3.112-1.725-4.2z" />
      <path d="M10.596.199l-.525.562c1.35 1.35 2.175 3.225 2.175 5.25s-.825 3.9-2.175 5.25l.525.525c1.5-1.462 2.4-3.525 2.4-5.775s-.9-4.312-2.4-5.812zM6.996 1.511l-2.25 2.25H.996v4.5h3.75l2.25 2.25z" />
    </AudioMediaIcon>
  ),
  photogallery: (
    <PhotoMediaIcon
      viewBox="0 0 32 26"
      width="16px"
      height="13px"
      focusable="false"
    >
      <path d="M9,2V0H4V2H0V26H32V2ZM6.5,10A2.5,2.5,0,1,1,9,7.52,2.5,2.5,0,0,1,6.5,10ZM20,23a9,9,0,1,1,9-9A9,9,0,0,1,20,23Z" />
      <circle cx="20" cy="14.02" r="5.5" />
    </PhotoMediaIcon>
  ),
  guidance: (
    <GuidanceIcon
      viewBox="0 0 44 44"
      focusable="false"
      height="24px"
      width="24px"
    >
      <circle cx="22" cy="22" r="11" />
      <path
        fill={C_WHITE}
        d="M27.1,27.5h-1.8L25,26.3c-0.8,1.1-2,1.4-3.1,1.4c-3.3,0-5.5-2.5-5.5-5.7c0-3.2,2.2-5.7,5.5-5.7c2.3,0,4.7,1.2,5,4h-2.9c-0.1-0.9-1-1.5-2.2-1.5c-1.8,0-2.6,1.6-2.6,3.3c0,1.6,0.7,3.3,2.6,3.3c1.4,0,2.4-0.7,2.5-1.7h-2v-2.1h4.6V27.5z"
      />
    </GuidanceIcon>
  ),
};

export default mediaIcons;
