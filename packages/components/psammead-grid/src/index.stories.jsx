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
import Grid, { SingleGridComponent, PageStyledGrid } from '.';
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
            <ExampleParagraph identifier={num} />
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
          <ExampleParagraph identifier="1" />
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
          <ExampleParagraph identifier="2" />
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
            <ExampleParagraph identifier={num} />
          </ItemMultiConfig>
        ))}
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Using single grid for 8[6,2,2,2,2...] layout',
    () => (
      <PageStyledGrid columns={8} wrapper>
        <SingleGridComponent columns={6}>
          <ExampleParagraph identifier="1" />
        </SingleGridComponent>
        <SingleGridComponent columns={2}>
          <ExampleParagraph identifier="2" />
        </SingleGridComponent>
        {['3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
          <SingleGridComponent columns={2} key={`${num}item`}>
            <ExampleParagraph identifier={num} />
          </SingleGridComponent>
        ))}
      </PageStyledGrid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Using single grid for 2 2 2... layout',
    () => (
      <PageStyledGrid columns={8} wrapper>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
          <SingleGridComponent columns={2} key={`${num}item`}>
            <ExampleParagraph identifier={num} />
          </SingleGridComponent>
        ))}
      </PageStyledGrid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Using single grid for 8 with children 6 & 5 on different lines... layout',
    () => (
      <PageStyledGrid columns={8} wrapper>
        <SingleGridComponent columns={6}>
          <ExampleParagraph identifier="1" />
        </SingleGridComponent>
        <SingleGridComponent columns={5}>
          <ExampleParagraph identifier="2" />
        </SingleGridComponent>
      </PageStyledGrid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Using single grid for 8 with nesting... layout',
    () => (
      <PageStyledGrid columns={8} wrapper>
        <SingleGridComponent columns={5} wrapper>
          <SingleGridComponent columns={2}>
            <ExampleParagraph identifier="1" />
          </SingleGridComponent>
          <SingleGridComponent columns={3}>
            <ExampleParagraph identifier="2" />
          </SingleGridComponent>
        </SingleGridComponent>
        <SingleGridComponent columns={3}>
          <ExampleParagraph identifier="3" />
        </SingleGridComponent>
      </PageStyledGrid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Using single grid forlsdfjlk',
    () => (
      <PageStyledGrid columns={8} wrapper>
        <SingleGridComponent columns={6}>
          <ExampleParagraph identifier="1" />
        </SingleGridComponent>
        {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
          <SingleGridComponent columns={2} key={`${num}item`}>
            <ExampleParagraph identifier={num} />
          </SingleGridComponent>
        ))}
      </PageStyledGrid>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
