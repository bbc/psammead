import React from 'react';
import styled from 'styled-components';

import { arrayOf, element } from 'prop-types';

import PlayButton from './playButton';

const Wrapper = styled.div`
  display: inline-block;
`;

const Episode = ({ children }) => {
  return (
    <div>
      <PlayButton />
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
