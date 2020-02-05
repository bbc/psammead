import React from 'react';
import styled, { css } from 'styled-components';
import { string, oneOf, bool, node } from 'prop-types';
import { C_WHITE, C_EBON } from '@bbc/psammead-styles/colours';
import { getMinion } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { mediaIcons } from '@bbc/psammead-assets/svgs';

const MediaIndicatorWrapper = styled.div`
  color: ${C_EBON};
  background-color: ${C_WHITE};
  display: block;
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getMinion(script)};

  ${({ isInline }) =>
    isInline &&
    css`
      display: inline-block;
      vertical-align: middle;
    `}
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const MediaIndicator = ({ type, service, isInline, children }) => (
  <MediaIndicatorWrapper
    aria-hidden="true"
    service={service}
    isInline={isInline}
  >
    <FlexWrapper>
      {mediaIcons[type]}
      {children}
    </FlexWrapper>
  </MediaIndicatorWrapper>
);

MediaIndicator.propTypes = {
  type: oneOf(['video', 'audio', 'photogallery']),
  service: string.isRequired,
  isInline: bool,
  children: node,
};

MediaIndicator.defaultProps = {
  type: 'video',
  isInline: false,
  children: null,
};

export default MediaIndicator;
