import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import * as numerals from '../src/numerals';

const numeralSystems = Object.keys(numerals);
const stories = storiesOf('Utilities|Psammead Locales', module);

const Container = styled.div`
  padding: ${GEL_SPACING};
`;

const Row = styled.div``;

const Value = styled.div`
  display: inline-block;
  margin: ${GEL_SPACING};
`;

stories.add('Numerals', () => {
  return (
    <Container>
      {numeralSystems.map(numeralSystem => (
        <Row>
          <Value>{numeralSystem}</Value>
          <Value>{numerals[numeralSystem].join(', ')}</Value>
        </Row>
      ))}
    </Container>
  );
});
