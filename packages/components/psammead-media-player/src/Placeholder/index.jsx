import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import Image from '@bbc/psammead-image';

const StyledPlaceholder = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Placeholder = ({ onClick, srcset }) => (
  <StyledPlaceholder onClick={onClick}>
    <Image alt="Image Alt" srcset={srcset} />
  </StyledPlaceholder>
);

Placeholder.propTypes = {
  onClick: func.isRequired,
  srcset: string.isRequired,
};

export default Placeholder;
