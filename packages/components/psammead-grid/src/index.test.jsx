import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Grid from '.';
import { FullWidth, ExampleParagraph } from './helpers';

describe('Grid component', () => {
  shouldMatchSnapshot(
    'should render Grid with GridItem correctly',
    <Grid>
      <FullWidth>
        <ExampleParagraph />
      </FullWidth>
    </Grid>,
  );
});
