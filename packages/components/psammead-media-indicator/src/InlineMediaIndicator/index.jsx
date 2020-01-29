import React from 'react';
// import styled from 'styled-components';
import { oneOf, string } from 'prop-types';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const MediaIndicator = ({ datetime, duration, type, service }) => (
  <span aria-hidden="true" service={service}>
    <div>
      {mediaIcons[type]}
      {duration && datetime && <time dateTime={datetime}>{duration}</time>}
      <VisuallyHiddenText>{type}</VisuallyHiddenText>
    </div>
  </span>
);

MediaIndicator.propTypes = {
  datetime: string,
  duration: string,
  type: oneOf(['video', 'audio', 'photogallery']),
  service: string.isRequired,
};

MediaIndicator.defaultProps = {
  datetime: null,
  duration: null,
  type: 'video',
};

export default MediaIndicator;
