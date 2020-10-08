import React, { useContext } from 'react';
import styled from 'styled-components';

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

export default () => {
  return (
    <div>
      <PlayerButtonWrapper>
        <PlayerButton>
          <PlayIcon />
        </PlayerButton>
      </PlayerButtonWrapper>
    </div>
  );
};
