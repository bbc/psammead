import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import styled from 'styled-components';
import notes from '../README.md';
import ScriptSwitch from './index';

const Container = styled.div`
  background-color: black;
  padding: 1rem;
  height: 100vh;
`;

storiesOf('Components|ScriptSwitch', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'default',
    ({ script, service }) => {
      const label = text('Link Label', 'Lat');
      const variant = text('Variant', 'lat');

      return (
        <Container>
          <ScriptSwitch
            script={script}
            service={service}
            href="https://www.bbc.com/serbian/lat"
            variant={variant}
          >
            {label}
          </ScriptSwitch>
        </Container>
      );
    },
    {
      notes,
    },
  );
