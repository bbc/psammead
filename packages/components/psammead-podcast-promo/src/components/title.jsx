import React from 'react';
import styled from '@emotion/styled';

const Heading = styled.h2``;

const Title = ({ children, ...props }) => {
  return (
    <span>
      [Icon]
      <Heading {...props}>{children}</Heading>
    </span>
  );
};

export default Title;
