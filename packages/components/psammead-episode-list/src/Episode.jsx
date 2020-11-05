import React from 'react';
import styled from '@emotion/styled';
import { arrayOf, element, string } from 'prop-types';
import { GEL_SPACING_QUIN } from '@bbc/gel-foundations/spacings';
import tail from 'ramda/src/tail';
import is from 'ramda/src/is';
import isEmpty from 'ramda/src/isEmpty';
import pathOr from 'ramda/src/pathOr';
import MediaIndicator from './MediaIndicator';
import Image from './Image';

const Wrapper = styled.div`
  display: inline-block;
  max-width: calc(100% - 64px);
  vertical-align: top;
`;

const Episode = ({ children, dir }) => {
  const firstChildIsImage = pathOr({}, '0', children).type === Image;
  return (
    <>
      {firstChildIsImage ? (
        children[0]
      ) : (
        <MediaIndicator size={GEL_SPACING_QUIN} dir={dir} />
      )}
      <Wrapper>{firstChildIsImage ? tail(children) : children}</Wrapper>
    </>
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
