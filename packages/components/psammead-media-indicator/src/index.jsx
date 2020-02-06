import React from 'react';
import styled, { css } from 'styled-components';
import { string, oneOf, bool, node } from 'prop-types';
import { C_WHITE, C_EBON } from '@bbc/psammead-styles/colours';
import { getMinion } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { mediaIcons } from '@bbc/psammead-assets/svgs';

const paddingDir = ({ dir }) => `padding-${dir === 'rtl' ? 'left' : 'right'}`;

const StyledMediaIndicator = styled.div`
  color: ${C_EBON};
  background-color: ${C_WHITE};
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getMinion(script)};

  ${({ isInline }) =>
    isInline
      ? css`
          display: inline-block;
          vertical-align: middle;
          ${paddingDir}: ${GEL_SPACING};
          /* This is to add spacing between the media indicator and the element sitting next to it*/
        `
      : css`
          display: block;
        `}
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const MediaIndicator = ({ type, service, isInline, children }) => (
  <StyledMediaIndicator
    aria-hidden="true"
    service={service}
    isInline={isInline}
  >
    <FlexWrapper>
      {mediaIcons[type]}
      {children}
    </FlexWrapper>
  </StyledMediaIndicator>
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
