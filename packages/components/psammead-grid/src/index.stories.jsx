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
import Grid, { SingleGridComponent } from '.';
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
  )
  .add(
    '8 6 2...',
    () => (
      <Grid>
        <ItemMultiConfig
          layouts={[
            {
              breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
              breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
              start: 'content-start',
              end: 'content-end',
            },
          ]}
        >
          <ExampleParagraph number="1" />
        </ItemMultiConfig>
        <ItemMultiConfig
          layouts={[
            {
              breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
              breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
              start: 'content-start',
              span: 6,
            },
          ]}
        >
          <ExampleParagraph number="2" />
        </ItemMultiConfig>
        {['3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
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
  )
  .add(
    'Using single grid for 8 6 2... layout',
    () => (
      <SingleGridComponent columns={8} center wrapper>
        <SingleGridComponent columns={8}>
          <ExampleParagraph number="1" />
        </SingleGridComponent>
        <SingleGridComponent columns={6}>
          <ExampleParagraph number="2" />
        </SingleGridComponent>
        {['3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
          <SingleGridComponent columns={2} startOffset={7} key={`${num}item`}>
            <ExampleParagraph number={num} />
          </SingleGridComponent>
        ))}
      </SingleGridComponent>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
