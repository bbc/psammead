import React from 'react';
import styled from '@emotion/styled';
import { arrayOf, element } from 'prop-types';
import { GEL_SPACING_QUIN } from '@bbc/gel-foundations/spacings';
import MediaIndicator from './MediaIndicator';

const Wrapper = styled.div`
  display: inline-block;
`;

const Episode = ({ children }) => (
  <>
    <MediaIndicator size={GEL_SPACING_QUIN} />
    <Wrapper>{children}</Wrapper>
  </>
);

Episode.propTypes = {
  children: arrayOf(element),
};

Episode.defaultProps = {
  children: [],
};

export default Episode;
