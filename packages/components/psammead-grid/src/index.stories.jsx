import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import Grid from '.';
import { FullWidth, Item, ExampleParagraph } from './helpers';

storiesOf('Components|Grid', module)
  .add(
    'FullWidth',
    () => (
      <Grid>
        <FullWidth>
          <ExampleParagraph />
        </FullWidth>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Spanning one column',
    () => (
      <Grid>
        <Item startAtCol={1} span={1}>
          <ExampleParagraph />
        </Item>
        <Item startAtCol={2} span={1}>
          <ExampleParagraph />
        </Item>
        <Item startAtCol={3} span={1}>
          <ExampleParagraph />
        </Item>
        <Item startAtCol={4} span={1}>
          <ExampleParagraph />
        </Item>
        <Item startAtCol={7} span={1}>
          <ExampleParagraph />
        </Item>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
