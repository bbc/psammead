import React from 'react';
import styled from 'styled-components';

import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

const OuterWrapper = styled.div`
  padding-top: 2px;
  display: inline-block;
  vertical-align: top;
  &:dir(ltr) {
    padding-right: 16px;
  }
  &:dir(rtl) {
    padding-left: 16px;
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 8px;
  }
`;

const PlayerButtonWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border: solid 2px #000;
  border-radius: 50%;
`;

const PlayerButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 12px solid #000;
  position: relative;
  left: 2px;
`;

export default () => (
  <OuterWrapper>
    <PlayerButtonWrapper className="play-button-wrapper">
      <PlayerButton>
        <PlayIcon className="play-icon" />
      </PlayerButton>
    </PlayerButtonWrapper>
  </OuterWrapper>
);
