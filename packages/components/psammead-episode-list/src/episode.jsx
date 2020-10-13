import React from 'react';
import styled from 'styled-components';

import { arrayOf, element } from 'prop-types';

import MediaIndicator from './MediaIndicator';

const Wrapper = styled.div`
  display: inline-block;
`;

const Episode = ({ children }) => {
  return (
    <div>
      <MediaIndicator size="40px" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

Episode.propTypes = {
  children: arrayOf(element),
};

Episode.defaultProps = {
  children: [],
};

export default Episode;
