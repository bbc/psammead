import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { Grid, LegacyGrid } from '.';
import { FullWidth, ExampleParagraph, ExampleFigure } from './helpers';

describe('Grid component', () => {
  shouldMatchSnapshot(
    'should render LegacyGrid with nested FullWidth item correctly',
    <LegacyGrid>
      <FullWidth>
        <ExampleParagraph />
      </FullWidth>
    </LegacyGrid>,
  );
  shouldMatchSnapshot(
    'should render Grid wrapper with Grid',
    <Grid
      columns={{ group3: 6, group4: 8, group5: 20 }}
      enableGelMargins
      enableGelGutters
      enableGelMaxWidths
      wrapper
    >
      <Grid
        columns={{ group3: 6, group4: 6, group5: 12 }}
        startOffset={{ group3: 1, group4: 2, group5: 5 }}
      >
        <ExampleParagraph identifier="1" />
      </Grid>
      <Grid
        wrapper
        columns={{ group3: 6, group4: 6, group5: 12 }}
        startOffset={{ group3: 1, group4: 2, group5: 5 }}
      >
        <Grid columns={{ group3: 6, group4: 6, group5: 12 }}>
          <ExampleParagraph identifier="Landscape image " />
        </Grid>
        <Grid
          columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
          startOffset={{ group3: 1, group4: 2, group5: 5 }}
        >
          <ExampleParagraph identifier="Landscape image's caption " />
        </Grid>
      </Grid>
      <Grid
        columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
        startOffset={{ group3: 1, group4: 2, group5: 5 }}
      >
        <ExampleParagraph identifier="Paragraph " />
      </Grid>
      {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
        <Grid
          columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
          startOffset={{ group2: 1, group3: 1, group4: 2, group5: 5 }}
          key={`${num}item`}
        >
          <ExampleParagraph identifier={num} />
        </Grid>
      ))}
    </Grid>,
  );
  shouldMatchSnapshot(
    'should render Grid wrapper with Grid including nested non-Grid Figure element',
    <Grid
      columns={{ group3: 6, group4: 8, group5: 20 }}
      enableGelMargins
      enableGelGutters
      enableGelMaxWidths
      wrapper
    >
      <Grid
        columns={{ group3: 6, group4: 6, group5: 12 }}
        startOffset={{ group3: 1, group4: 2, group5: 5 }}
      >
        <ExampleParagraph identifier="1" />
      </Grid>
      <ExampleFigure>
        <Grid
          columns={{ group3: 6, group4: 6, group5: 12 }}
          startOffset={{ group3: 1, group4: 2, group5: 5 }}
          wrapper
        >
          <Grid
            columns={{ group3: 6, group4: 6, group5: 12 }}
            startOffset={{ group3: 1, group4: 2, group5: 5 }}
          >
            <ExampleParagraph identifier="Landscape image " />
          </Grid>
          <Grid
            columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
            startOffset={{ group2: 1, group3: 1, group4: 2, group5: 5 }}
          >
            <ExampleParagraph identifier="Landscape image's caption " />
          </Grid>
        </Grid>
      </ExampleFigure>
      <Grid
        columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
        startOffset={{ group2: 1, group3: 1, group4: 2, group5: 5 }}
      >
        <ExampleParagraph identifier="Paragraph " />
      </Grid>
      {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
        <Grid
          columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
          startOffset={{ group2: 1, group3: 1, group4: 2, group5: 5 }}
          key={`${num}item`}
        >
          <ExampleParagraph identifier={num} />
        </Grid>
      ))}
    </Grid>,
  );
});
