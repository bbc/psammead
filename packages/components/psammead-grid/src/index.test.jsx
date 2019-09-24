import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { Grid, PageGrid, LegacyGrid } from '.';
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
    'should render PageGrid wrapper with Grid',
    <PageGrid wrapper columns={{ group3: 6, group4: 8, group5: 20 }}>
      <Grid
        startOffset={{ group3: 1, group4: 2, group5: 5 }}
        columns={{ group3: 6, group4: 6, group5: 12 }}
      >
        <ExampleParagraph identifier="1" />
      </Grid>
      <Grid
        wrapper
        startOffset={{ group3: 1, group4: 2, group5: 5 }}
        columns={{ group3: 6, group4: 6, group5: 12 }}
      >
        <Grid columns={{ group3: 6, group4: 6, group5: 12 }}>
          <ExampleParagraph identifier="Landscape image " />
        </Grid>
        <Grid columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}>
          <ExampleParagraph identifier="Landscape image's caption " />
        </Grid>
      </Grid>
      <Grid columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}>
        <ExampleParagraph identifier="Paragraph " />
      </Grid>
      {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
        <Grid
          columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
          key={`${num}item`}
        >
          <ExampleParagraph identifier={num} />
        </Grid>
      ))}
    </PageGrid>,
  );
  shouldMatchSnapshot(
    'should render PageGrid wrapper with Grid including nested non-Grid Figure element',
    <PageGrid columns={{ group3: 6, group4: 8, group5: 20 }} wrapper>
      <Grid
        startOffset={{ group3: 1, group4: 2, group5: 5 }}
        columns={{ group3: 6, group4: 6, group5: 12 }}
      >
        <ExampleParagraph identifier="1" />
      </Grid>
      <ExampleFigure>
        <Grid
          wrapper
          startOffset={{ group3: 1, group4: 2, group5: 5 }}
          columns={{ group3: 6, group4: 6, group5: 12 }}
        >
          <Grid columns={{ group3: 6, group4: 6, group5: 12 }}>
            <ExampleParagraph identifier="Landscape image " />
          </Grid>
          <Grid columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}>
            <ExampleParagraph identifier="Landscape image's caption " />
          </Grid>
        </Grid>
      </ExampleFigure>
      <Grid columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}>
        <ExampleParagraph identifier="Paragraph " />
      </Grid>
      {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
        <Grid
          columns={{ group2: 6, group3: 5, group4: 5, group5: 10 }}
          key={`${num}item`}
        >
          <ExampleParagraph identifier={num} />
        </Grid>
      ))}
    </PageGrid>,
  );
});
