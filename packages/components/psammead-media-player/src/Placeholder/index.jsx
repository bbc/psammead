import React from 'react';
import styled from 'styled-components';
import { string, func, shape, oneOf } from 'prop-types';
import Image from '@bbc/psammead-image';
import PlayButton from '@bbc/psammead-play-button';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import Guidance from '../Guidance';

const StyledPlaceholder = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  bottom: 0;

  /* stylelint-disable */
  /* https://www.styled-components.com/docs/advanced#referring-to-other-components */
  ${StyledPlaceholder}:hover &,
  ${StyledPlaceholder}:focus & {
    background-color: ${C_POSTBOX};
  }
  /* stylelint-enable */
`;

const Placeholder = ({ onClick, service, src, mediaInfo }) => {
  const { title, datetime, duration, durationSpoken, type } = mediaInfo;
  const guidance =
    'May contain strong language, sexual or violent content that may offend.';
  return (
    <StyledPlaceholder onClick={onClick}>
      <Guidance service={service} type={type} message={guidance}>
        <StyledPlayButton
          title={title}
          service={service}
          onClick={() => {}}
          datetime={datetime}
          duration={duration}
          durationSpoken={durationSpoken}
          type={type}
        />
      </Guidance>
      <Image alt="Image Alt" src={src} />
    </StyledPlaceholder>
  );
};

Placeholder.propTypes = {
  onClick: func.isRequired,
  service: string.isRequired,
  src: string.isRequired,
  mediaInfo: shape({
    title: string.isRequired,
    datetime: string,
    duration: string,
    durationSpoken: string,
    type: oneOf(['audio', 'video']),
  }),
};
Placeholder.defaultProps = {
  mediaInfo: shape({
    datetime: null,
    duration: null,
    durationSpoken: null,
    type: 'video',
  }),
};

export default Placeholder;
