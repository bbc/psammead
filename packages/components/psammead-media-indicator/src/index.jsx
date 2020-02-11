import React from 'react';
import styled, { css } from 'styled-components';
import { node, bool, string, oneOf, shape } from 'prop-types';
import { C_WHITE, C_EBON } from '@bbc/psammead-styles/colours';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { getMinion } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
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

const MediaIndicator = ({ type, script, service, dir, isInline, children }) => (
  <StyledMediaIndicator
    aria-hidden="true"
    script={script}
    service={service}
    dir={dir}
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
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
  isInline: bool,
  children: node,
};

MediaIndicator.defaultProps = {
  type: 'video',
  dir: 'ltr',
  isInline: false,
  children: null,
};

export default MediaIndicator;
