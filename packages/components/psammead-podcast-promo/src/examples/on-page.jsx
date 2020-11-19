import React from 'react';
import styled from '@emotion/styled';

import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

import { C_STORM, C_CLOUD_DARK } from '@bbc/psammead-styles/colours';

import BasicExample from './basic';

const Wrapper = styled.div`
  margin: 10px auto;
  max-width: 1008px;
`;

const Left = styled.div`
  vertical-align: top;
  display: inline-block;
  max-width: 1000px;
  padding: 0 10px;
  width: 100%;
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    width: 66%;
  }
`;

const Right = styled.div`
  display: inline-block;
  max-width: 1000px;
  padding: 0 10px;
  width: 100%;
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    width: 33%;
  }
`;

const ContentArea = styled.div`
  height: ${({ height }) => height}px;
  margin: 20px 0;
  background-color: ${C_STORM};
  font-family: sans-serif;
  color: ${C_CLOUD_DARK};
  font-size: 20px;
  line-height: 1;
  text-align: center;
  padding-top: ${({ height }) => height / 2 - 10}px;
`;

const OnPageExample = props => {
  return (
    <Wrapper>
      <Left>
        <ContentArea height={1000}>Main Content</ContentArea>
      </Left>
      <Right>
        <ContentArea height={200}>Content Above</ContentArea>
        <BasicExample {...props} />
        <ContentArea height={200}>Content Below</ContentArea>
      </Right>
    </Wrapper>
  );
};

export default OnPageExample;
