import React from 'react';
import styled from '@emotion/styled';
import { arrayOf, element, string } from 'prop-types';
import {
  GEL_SPACING_DBL,
  GEL_SPACING_QUIN,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import tail from 'ramda/src/tail';
import pathOr from 'ramda/src/pathOr';
import MediaIndicator from './MediaIndicator';
import Image from './Image';

const Wrapper = styled.div`
  position: relative;
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
        <MediaIndicator size={GEL_SPACING_QUIN} dir={dir} />
      )}
      <TextWrapper narrow={firstChildIsImage}>
        {firstChildIsImage ? tail(children) : children}
      </TextWrapper>
    </Wrapper>
  );
};

Episode.propTypes = {
  children: arrayOf(element),
  dir: string.isRequired,
};

Episode.defaultProps = {
  children: [],
};

export default Episode;
