import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Grid from '.';
import { ExampleParagraph, ExampleFigure } from './testHelpers';

describe('Grid component', () => {
  shouldMatchSnapshot(
    'should render Grid with Grid items',
    <Grid
      columns={{ group3: 6, group4: 8, group5: 20 }}
      startOffset={{ group3: 1, group4: 1, group5: 5 }}
      enableGelMargins
      enableGelGutters
      enableGelMaxWidths
    >
      <Grid item columns={{ group3: 6, group4: 6, group5: 12 }}>
        <ExampleParagraph identifier="1" />
      </Grid>
      <Grid columns={{ group3: 6, group4: 6, group5: 12 }}>
        <Grid item columns={{ group3: 6, group4: 6, group5: 12 }}>
          <ExampleParagraph identifier="Landscape image " />
        </Grid>
        <Grid item columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}>
          <ExampleParagraph identifier="Landscape image's caption " />
        </Grid>
      </Grid>
      <Grid item columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}>
        <ExampleParagraph identifier="Paragraph " />
      </Grid>
      {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
        <Grid
          item
          columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
          key={`${num}item`}
        >
          <ExampleParagraph identifier={num} />
        </Grid>
      ))}
    </Grid>,
  );
  shouldMatchSnapshot(
    'should render Grid with Grid items including nested non-Grid Figure element',
    <Grid
      columns={{ group3: 6, group4: 8, group5: 20 }}
      enableGelMargins
      enableGelGutters
      enableGelMaxWidths
    >
      <Grid
        item
        columns={{ group3: 6, group4: 6, group5: 12 }}
        startOffset={{ group3: 1, group4: 1, group5: 5 }}
      >
        <ExampleParagraph identifier="1" />
      </Grid>
      <ExampleFigure>
        <Grid
          columns={{ group3: 6, group4: 6, group5: 12 }}
          startOffset={{ group3: 1, group4: 1, group5: 5 }}
        >
          <Grid
            item
            columns={{ group3: 6, group4: 6, group5: 12 }}
            startOffset={{ group3: 1, group4: 1, group5: 5 }}
          >
            <ExampleParagraph identifier="Landscape image " />
          </Grid>
          <Grid
            item
            columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
            startOffset={{ group2: 1, group3: 1, group4: 1, group5: 5 }}
          >
            <ExampleParagraph identifier="Landscape image's caption " />
          </Grid>
        </Grid>
      </ExampleFigure>
      <Grid
        item
        columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
        startOffset={{ group2: 1, group3: 1, group4: 1, group5: 5 }}
      >
        <ExampleParagraph identifier="Paragraph " />
      </Grid>
      {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
        <Grid
          item
          columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
          startOffset={{ group2: 1, group3: 1, group4: 1, group5: 5 }}
          key={`${num}item`}
        >
          <ExampleParagraph identifier={num} />
        </Grid>
      ))}
    </Grid>,
  );
});
