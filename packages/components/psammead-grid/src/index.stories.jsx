import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  GEL_GROUP_0_SCREEN_WIDTH_MIN,
  // GEL_GROUP_0_SCREEN_WIDTH_MAX,
  // GEL_GROUP_1_SCREEN_WIDTH_MAX,
  // GEL_GROUP_2_SCREEN_WIDTH_MIN,
  // GEL_GROUP_2_SCREEN_WIDTH_MAX,
  // GEL_GROUP_3_SCREEN_WIDTH_MIN,
  // GEL_GROUP_3_SCREEN_WIDTH_MAX,
  // GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  // GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import notes from '../README.md';
import Grid from '.';
import {
  FullWidth,
  Item,
  ItemWithConfig,
  ItemMultiConfig,
  ExampleParagraph,
} from './helpers';

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
        <Item startAtCol={2} span={1}>
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
  )
  .add(
    'Item with config - spanning 6',
    () => (
      <Grid>
        <ItemWithConfig
          start={1}
          span={6}
          breakpointMin={GEL_GROUP_0_SCREEN_WIDTH_MIN}
          breakpointMax={GEL_GROUP_4_SCREEN_WIDTH_MAX}
        >
          <ExampleParagraph />
        </ItemWithConfig>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Spanning multiple columns / varying at each breakpoint',
    () => (
      <Grid>
        <ItemMultiConfig
          layouts={[
            {
              breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
              breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
              start: 'content-start',
              span: 8,
            },
          ]}
        >
          <ExampleParagraph />
        </ItemMultiConfig>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
          <ItemMultiConfig
            key={`${num}item`}
            layouts={[
              {
                breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
                breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
                start: 'content-start',
                span: 2,
              },
            ]}
          >
            <ExampleParagraph number={num} />
          </ItemMultiConfig>
        ))}
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
