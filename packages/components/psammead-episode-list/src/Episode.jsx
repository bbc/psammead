import React from 'react';
import styled from '@emotion/styled';
import { arrayOf, element, string } from 'prop-types';
import { GEL_SPACING_QUIN } from '@bbc/gel-foundations/spacings';
import MediaIndicator from './MediaIndicator';

const Wrapper = styled.div`
  display: inline-block;
  max-width: calc(100% - 64px);
`;

const Episode = ({ children, dir }) => (
  <>
    <MediaIndicator size={GEL_SPACING_QUIN} dir={dir} />
    <Wrapper>{children}</Wrapper>
  </>
);

Episode.propTypes = {
  children: arrayOf(element),
  dir: string.isRequired,
};

Episode.defaultProps = {
  children: [],
};

export default Episode;
