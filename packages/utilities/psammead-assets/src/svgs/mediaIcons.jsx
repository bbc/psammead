import React from 'react';
import styled from 'styled-components';
import { C_EBON } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
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
  width: ${GEL_SPACING_DBL};
  height: ${GEL_SPACING_DBL};
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
      viewBox="0 0 24 24"
      focusable="false"
      height="24px"
      width="24px"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#fefefe"
          d="M24,12 C24,18.627 18.627,24 12,24 C5.3715,24 0,18.627 0,12 C0,5.373 5.3715,0 12,0 C18.627,0 24,5.373 24,12"
        />
        <path
          fill="#3F3F42"
          d="M17.515275,17.99265 L15.500775,17.99265 L15.316275,16.6839 C14.493525,17.8419 13.084275,18.24465 11.975025,18.24465 C8.349525,18.24465 5.999775,15.4749 5.999775,12.00015 C5.999775,8.5254 8.349525,5.75565 11.975025,5.75565 C14.459775,5.75565 17.112525,7.08165 17.398275,10.08615 L14.275275,10.08615 C14.174025,9.06315 13.167525,8.44215 11.907525,8.44215 C9.893775,8.44215 9.122025,10.2204 9.122025,12.00015 C9.122025,13.7799 9.893775,15.55965 11.907525,15.55965 C13.453275,15.55965 14.493525,14.8374 14.661525,13.74615 L12.479025,13.74615 L12.479025,11.4294 L17.515275,11.4294 L17.515275,17.99265 Z"
        />
      </g>
    </GuidanceIcon>
  ),
};

export default mediaIcons;
