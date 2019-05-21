import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import * as colours from './colours';

const ColourContainer = styled.div`
  padding: 10px;
  font-size: 14px;
  font-family: 'Nunito Sans', -apple-system, Helvetica, Arial, sans-serif;
`;

const ColourRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ColourBox = styled.div`
  background: ${props => props.colour};
  color: #000;
  mix-blend-mode: difference;
  padding: 10px 5px;
  border-radius: 5px;
  display: inline-block;
`;

const ColourValue = styled.div`
  padding-left: 10px;
  display: inline-block;
`;

storiesOf('Psammead Styles', module).add(
  'colours',
  () => (
    <ColourContainer>
      {Object.keys(colours).map(colour => (
        <ColourRow key={colours[colour]}>
          <ColourBox colour={colours[colour]}>{colours[colour]}</ColourBox>
          <ColourValue>{colour}</ColourValue>
        </ColourRow>
      ))}
    </ColourContainer>
  ),
  {
    notes,
  },
);
