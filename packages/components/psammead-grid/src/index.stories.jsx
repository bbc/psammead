import React from 'react';
import { storiesOf } from '@storybook/react';
import // GEL_GROUP_0_SCREEN_WIDTH_MIN,
// GEL_GROUP_0_SCREEN_WIDTH_MAX,
// GEL_GROUP_1_SCREEN_WIDTH_MAX,
// GEL_GROUP_2_SCREEN_WIDTH_MIN,
// GEL_GROUP_2_SCREEN_WIDTH_MAX,
// GEL_GROUP_3_SCREEN_WIDTH_MIN,
// GEL_GROUP_3_SCREEN_WIDTH_MAX,
// GEL_GROUP_4_SCREEN_WIDTH_MIN,
// GEL_GROUP_4_SCREEN_WIDTH_MAX,
// GEL_GROUP_5_SCREEN_WIDTH_MIN,
'@bbc/gel-foundations/breakpoints';
import notes from '../README.md';
import {
  // LegacyGrid, SingleGridComponent, PageStyledGrid,
  Grid,
} from '.';
import {
  // FullWidth,
  // Item,
  // ItemWithConfig,
  // ItemMultiConfig,
  // ExampleFigure,
  ExampleImage,
  ExampleParagraph,
} from './helpers';

storiesOf('Components|Grid', module)
  // .add(
  //   'FullWidth',
  //   () => (
  //     <LegacyGrid>
  //       <FullWidth>
  //         <ExampleParagraph />
  //       </FullWidth>
  //     </LegacyGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  // .add(
  //   'Spanning one column',
  //   () => (
  //     <LegacyGrid>
  //       <Item startAtCol={2} span={1}>
  //         <ExampleParagraph />
  //       </Item>
  //       <Item startAtCol={2} span={1}>
  //         <ExampleParagraph />
  //       </Item>
  //       <Item startAtCol={3} span={1}>
  //         <ExampleParagraph />
  //       </Item>
  //       <Item startAtCol={4} span={1}>
  //         <ExampleParagraph />
  //       </Item>
  //       <Item startAtCol={7} span={1}>
  //         <ExampleParagraph />
  //       </Item>
  //     </LegacyGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  // .add(
  //   'Item with config - spanning 6',
  //   () => (
  //     <LegacyGrid>
  //       <ItemWithConfig
  //         start={1}
  //         span={6}
  //         breakpointMin={GEL_GROUP_0_SCREEN_WIDTH_MIN}
  //         breakpointMax={GEL_GROUP_4_SCREEN_WIDTH_MAX}
  //       >
  //         <ExampleParagraph />
  //       </ItemWithConfig>
  //     </LegacyGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  // .add(
  //   'Spanning multiple columns / varying at each breakpoint',
  //   () => (
  //     <LegacyGrid>
  //       <ItemMultiConfig
  //         layouts={[
  //           {
  //             breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
  //             breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
  //             start: 'content-start',
  //             span: 8,
  //           },
  //         ]}
  //       >
  //         <ExampleParagraph />
  //       </ItemMultiConfig>
  //       {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
  //         <ItemMultiConfig
  //           key={`${num}item`}
  //           layouts={[
  //             {
  //               breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
  //               breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
  //               start: 'content-start',
  //               span: 2,
  //             },
  //           ]}
  //         >
  //           <ExampleParagraph identifier={num} />
  //         </ItemMultiConfig>
  //       ))}
  //     </LegacyGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  // .add(
  //   '8 6 2...',
  //   () => (
  //     <LegacyGrid>
  //       <ItemMultiConfig
  //         layouts={[
  //           {
  //             breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
  //             breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
  //             start: 'content-start',
  //             end: 'content-end',
  //           },
  //         ]}
  //       >
  //         <ExampleParagraph identifier="1" />
  //       </ItemMultiConfig>
  //       <ItemMultiConfig
  //         layouts={[
  //           {
  //             breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
  //             breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
  //             start: 'content-start',
  //             span: 6,
  //           },
  //         ]}
  //       >
  //         <ExampleParagraph identifier="2" />
  //       </ItemMultiConfig>
  //       {['3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
  //         <ItemMultiConfig
  //           key={`${num}item`}
  //           layouts={[
  //             {
  //               breakpointMin: GEL_GROUP_0_SCREEN_WIDTH_MIN,
  //               breakpointMax: GEL_GROUP_4_SCREEN_WIDTH_MAX,
  //               start: 'content-start',
  //               span: 2,
  //             },
  //           ]}
  //         >
  //           <ExampleParagraph identifier={num} />
  //         </ItemMultiConfig>
  //       ))}
  //     </LegacyGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  // .add(
  //   'Using single grid for 8[6,2,2,2,2...] layout',
  //   () => (
  //     <PageStyledGrid columns={8} wrapper>
  //       <SingleGridComponent columns={6}>
  //         <ExampleParagraph identifier="1" />
  //       </SingleGridComponent>
  //       <SingleGridComponent columns={2}>
  //         <ExampleParagraph identifier="2" />
  //       </SingleGridComponent>
  //       {['3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
  //         <SingleGridComponent columns={2} key={`${num}item`}>
  //           <ExampleParagraph identifier={num} />
  //         </SingleGridComponent>
  //       ))}
  //     </PageStyledGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  // .add(
  //   'Using single grid for 2 2 2... layout',
  //   () => (
  //     <PageStyledGrid columns={8} wrapper>
  //       {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
  //         <SingleGridComponent columns={2} key={`${num}item`}>
  //           <ExampleParagraph identifier={num} />
  //         </SingleGridComponent>
  //       ))}
  //     </PageStyledGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  // .add(
  //   'Using single grid for 8 with children 6 & 5 on different lines... layout',
  //   () => (
  //     <PageStyledGrid columns={8} wrapper>
  //       <SingleGridComponent columns={6}>
  //         <ExampleParagraph identifier="1" />
  //       </SingleGridComponent>
  //       <SingleGridComponent columns={5}>
  //         <ExampleParagraph identifier="2" />
  //       </SingleGridComponent>
  //     </PageStyledGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  // .add(
  //   'Using single grid for 8 with nesting... layout',
  //   () => (
  //     <PageStyledGrid columns={8} wrapper>
  //       <SingleGridComponent columns={5} wrapper>
  //         <SingleGridComponent columns={2}>
  //           <ExampleParagraph identifier="1" />
  //         </SingleGridComponent>
  //         <SingleGridComponent columns={3}>
  //           <ExampleParagraph identifier="2" />
  //         </SingleGridComponent>
  //       </SingleGridComponent>
  //       <SingleGridComponent columns={3}>
  //         <ExampleParagraph identifier="3" />
  //       </SingleGridComponent>
  //     </PageStyledGrid>
  //   ),
  //   { notes, knobs: { escapeHTML: false } },
  // )
  .add(
    'Slice layout for 6 or 10 items 8[6,2,2,2..]',
    () => (
      <Grid
        wrapper
        columns={{ group4: 8 }}
        enableGelGutters
        enableGelMargins
        enableGelMaxWidths
      >
        <Grid columns={{ group4: 6 }}>
          <ExampleParagraph identifier="1" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="6" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="7" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="8" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="9" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleParagraph identifier="10" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Top story slice layout',
    () => (
      <Grid
        wrapper
        columns={{ group4: 8 }}
        enableGelGutters
        enableGelMargins
        enableGelMaxWidths
      >
        <Grid columns={{ group4: 8 }} wrapper enableGelGutters>
          <Grid columns={{ group4: 4 }}>
            <ExampleImage />
          </Grid>
          <Grid columns={{ group4: 4 }}>
            <ExampleParagraph identifier="1" />
          </Grid>
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="6" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="7" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="8" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="9" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Normal slice layout for 1 or 5 items',
    () => (
      <Grid
        wrapper
        columns={{ group4: 8 }}
        enableGelGutters
        enableGelMargins
        enableGelMaxWidths
      >
        <Grid columns={{ group4: 8 }} wrapper enableGelGutters>
          <Grid columns={{ group4: 4 }}>
            <ExampleImage />
          </Grid>
          <Grid columns={{ group4: 4 }}>
            <ExampleParagraph identifier="1" />
          </Grid>
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="5" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Normal slice layout for 2, 6 or 10 items',
    () => (
      <Grid
        wrapper
        columns={{ group4: 8 }}
        enableGelGutters
        enableGelMargins
        enableGelMaxWidths
      >
        <Grid columns={{ group4: 6 }} wrapper enableGelGutters>
          <Grid columns={{ group4: 2 }}>
            <ExampleParagraph identifier="1" />
          </Grid>
          <Grid columns={{ group4: 4 }}>
            <ExampleImage />
          </Grid>
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="6" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="7" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="8" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="9" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="10" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Normal slice layout for 4 or 8 items',
    () => (
      <Grid
        wrapper
        columns={{ group4: 8 }}
        enableGelGutters
        enableGelMargins
        enableGelMaxWidths
      >
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="1" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="6" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="7" />
        </Grid>
        <Grid columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="8" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Single group - group2',
    () => (
      <Grid
        wrapper
        columns={{ group2: 6 }}
        enableGelMargins
        enableGelGutters
        enableGelMaxWidths
      >
        <Grid columns={{ group2: 2 }} startOffset={{ group2: 2 }}>
          <ExampleParagraph identifier="1" />
        </Grid>
      </Grid>
    ),
    { notes },
    // )
    // .add(
    //   'Grid example',
    //   () => (
    //     <Grid
    //       columns={{ group1: 6, group2: 6, group3: 6, group4: 8, group5: 20 }}
    //       enableGelMargins
    //       enableGelGutters
    //       enableGelMaxWidths
    //       wrapper
    //     >
    //       <Grid
    //         columns={{ group1: 6, group2: 6, group3: 6, group4: 6, group5: 12 }}
    //         columnStart={{
    //           group1: 1,
    //           group2: 1,
    //           group3: 1,
    //           group4: 1,
    //           group5: 5,
    //         }}
    //       >
    //         <ExampleParagraph identifier="1" />
    //       </Grid>
    //       <Grid
    //         columns={{ group1: 6, group2: 6, group3: 6, group4: 6, group5: 12 }}
    //         enableGelGutters
    //         wrapper
    //       >
    //         <Grid
    //           columns={{ group1: 6, group2: 6, group3: 6, group4: 6, group5: 12 }}
    //         >
    //           <ExampleParagraph identifier="Landscape image " />
    //         </Grid>
    //         <Grid
    //           columns={{ group1: 6, group2: 6, group3: 5, group4: 5, group5: 10 }}
    //         >
    //           <ExampleParagraph identifier="Landscape image's caption " />
    //         </Grid>
    //       </Grid>
    //       <Grid
    //         columns={{ group1: 6, group2: 6, group3: 5, group4: 5, group5: 10 }}
    //       >
    //         <ExampleParagraph identifier="Paragraph " />
    //       </Grid>
    //       {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
    //         <Grid
    //           columns={{ group1: 6, group2: 6, group3: 5, group4: 5, group5: 10 }}
    //           key={`${num}item`}
    //         >
    //           <ExampleParagraph identifier={num} />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   ),
    //   { notes },
    // )
    // .add(
    //   'Grid wrapper with Grid using a nested Figure example - e.g. an article',
    //   () => (
    //     <Grid
    //       columns={{ group1: 6, group2: 6, group3: 6, group4: 8, group5: 20 }}
    //       enableGelMargins
    //       enableGelGutters
    //       enableGelMaxWidths
    //       wrapper
    //     >
    //       <Grid
    //         columns={{ group1: 6, group2: 6, group3: 6, group4: 6, group5: 12 }}
    //       >
    //         <ExampleParagraph identifier="1" />
    //       </Grid>
    //       <ExampleFigure>
    //         <Grid
    //           columns={{ group1: 6, group2: 6, group3: 6, group4: 6, group5: 12 }}
    //           wrapper
    //         >
    //           <Grid
    //             columns={{
    //               group1: 6,
    //               group2: 6,
    //               group3: 6,
    //               group4: 6,
    //               group5: 12,
    //             }}
    //           >
    //             <ExampleParagraph identifier="Landscape image " />
    //           </Grid>
    //           <Grid
    //             columns={{
    //               group1: 6,
    //               group2: 6,
    //               group3: 5,
    //               group4: 5,
    //               group5: 10,
    //             }}
    //           >
    //             <ExampleParagraph identifier="Landscape image's caption " />
    //           </Grid>
    //         </Grid>
    //       </ExampleFigure>
    //       <Grid
    //         columns={{ group1: 6, group2: 6, group3: 5, group4: 5, group5: 10 }}
    //       >
    //         <ExampleParagraph identifier="Paragraph " />
    //       </Grid>
    //       {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
    //         <Grid
    //           columns={{ group1: 6, group2: 6, group3: 5, group4: 5, group5: 10 }}
    //           key={`${num}item`}
    //         >
    //           <ExampleParagraph identifier={num} />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   ),
    //   { notes },
  );
