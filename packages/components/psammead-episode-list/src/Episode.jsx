import React from 'react';
import styled from '@emotion/styled';
import { node, string } from 'prop-types';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import tail from 'ramda/src/tail';
import pathOr from 'ramda/src/pathOr';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import MediaIndicator from './MediaIndicator';
import Image from './Image';

const Wrapper = styled.div`
  position: relative;
  &:focus,
  &:hover {
    [class*='--hover'] {
      text-decoration: underline;
    }
    .rounded-play-button__ring,
    .rounded-play-button__inner {
      fill: currentColor;
      color: ${C_POSTBOX};
    }
    .rounded-play-button__triangle {
      fill: transparent;
    }
  }
`;

const TextWrapper = styled.div`
  display: inline-block;
  max-width: calc(
    100% - ${({ narrow }) => (narrow ? 70 : 50)}px - ${GEL_SPACING_DBL}
  );
  vertical-align: top;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    max-width: calc(
      100% - ${({ narrow }) => (narrow ? 120 : 50)}px - ${GEL_SPACING_DBL}
    );
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    max-width: calc(
      100% - ${({ narrow }) => (narrow ? 230 : 50)}px - ${GEL_SPACING_DBL}
    );
  }
`;

const Episode = ({ children, dir }) => {
  const firstChildIsImage = pathOr({}, '0', children).type === Image;
  return (
    <Wrapper>
      {firstChildIsImage ? (
        children[0]
      ) : (
        <MediaIndicator size="2.5rem" dir={dir} />
      )}
      <TextWrapper narrow={firstChildIsImage}>
        {firstChildIsImage ? tail(children) : children}
      </TextWrapper>
    </Wrapper>
  );
};

Episode.propTypes = {
  children: node.isRequired,
  dir: string.isRequired,
};

export default Episode;
