import React from 'react';
import styled from 'styled-components';
import { oneOf, string } from 'prop-types';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const paddingDir = ({ dir }) => `padding-${dir === 'rtl' ? 'left' : 'right'}`;

const InlineMediaIndicatorWrapper = styled.div`
  display: inline-block;
  ${paddingDir}: ${GEL_SPACING};
`;

const MediaIconsInline = styled.div`
  display: inline-block;
`;

const VisuallyHiddentTextSpan = styled.span.attrs(() => ({
  role: 'text',
}))``;

const InlineMediaIndicator = ({ datetime, duration, type, service, dir }) => (
  <InlineMediaIndicatorWrapper aria-hidden="true" service={service} dir={dir}>
    <MediaIconsInline>{mediaIcons[type]}</MediaIconsInline>
    <VisuallyHiddentTextSpan>
      <VisuallyHiddenText>{type}</VisuallyHiddenText>
      {duration && datetime && <time dateTime={datetime}>{duration}</time>}
    </VisuallyHiddentTextSpan>
  </InlineMediaIndicatorWrapper>
);

InlineMediaIndicator.propTypes = {
  datetime: string,
  duration: string,
  type: oneOf(['video', 'audio', 'photogallery']),
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

InlineMediaIndicator.defaultProps = {
  datetime: null,
  duration: null,
  type: 'video',
  dir: 'ltr',
};

export default InlineMediaIndicator;
