import React from 'react';
import { string, oneOf, func } from 'prop-types';
import styled, { css } from 'styled-components';
import { C_EBON, C_WHITE, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import { GEL_MINION } from '@bbc/gel-foundations/typography';
import { getSansBold } from '@bbc/psammead-styles/font-styles';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const Button = styled.button`
  background-color: ${C_EBON};
  border: none;
  color: ${C_WHITE};
  cursor: pointer;
  display: block;
  ${({ service }) => getSansBold(service)}
  ${GEL_MINION};
  height: 80px;
  padding: 0;
  transition: background-color 300ms;
  width: 80px;

  &:hover,
  &:focus {
    background-color: ${C_POSTBOX};
    transition: background-color 300ms;
  }
`;

const IconWrapper = styled.div`
  > svg {
    fill: ${C_WHITE};
    height: ${GEL_SPACING_TRPL};
    ${({ datetime, duration }) =>
      datetime &&
      duration &&
      css`
        margin-top: ${GEL_SPACING};
      `}
    width: ${GEL_SPACING_TRPL};
  }
`;

const TimeDuration = styled.time`
  display: block;
  margin-top: ${GEL_SPACING};
`;

const PlayButton = ({ datetime, duration, type, service, title, onClick }) => (
  <Button service={service} onClick={onClick}>
    <VisuallyHiddenText>{`Play ${type}, "${title}"`}</VisuallyHiddenText>
    <IconWrapper datetime={datetime} duration={duration} aria-hidden="true">
      {mediaIcons[type]}
    </IconWrapper>
    {datetime && duration && (
      <TimeDuration dateTime={datetime}>{duration}</TimeDuration>
    )}
  </Button>
);

PlayButton.propTypes = {
  datetime: string,
  duration: string,
  type: oneOf(['video', 'audio']),
  title: string.isRequired,
  service: string.isRequired,
  onClick: func.isRequired,
};

PlayButton.defaultProps = {
  datetime: null,
  duration: null,
  type: 'video',
};

export default PlayButton;
