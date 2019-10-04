import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import Grid from '.';
import { ExampleImage, ExampleParagraph } from './testHelpers';

storiesOf('Components|Grid', module)
  .add(
    'Simple example',
    () => (
      <Grid columns={{ group3: 6, group4: 8 }}>
        <Grid item columns={{ group3: 6, group4: 6 }}>
          <p>
            Paragraph - for group 3 spans 6/6 columns, for group 4 spans 6/8
            columns. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid item columns={{ group3: 6, group4: 2 }}>
          <p>
            Paragraph - for group 3 spans 6/6 columns, for group 4 spans 2/8
            columns. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Simple example using gelGutters and gelMargins',
    () => (
      <Grid enableGelGutters enableGelMargins columns={{ group4: 8 }}>
        <Grid item columns={{ group4: 6 }}>
          <ExampleParagraph identifier="1" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="6" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Simple example with using an offset',
    () => (
      <Grid
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 8,
          group5: 20,
        }}
        enableGelGutters
        enableGelMargins
      >
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 4,
            group5: 12,
          }}
          startOffset={{
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 5,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 5,
            group4: 5,
            group5: 10,
          }}
          startOffset={{
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 5,
          }}
        >
          <ExampleParagraph identifier="Paragraph " />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Slice layout for 6 or 10 items',
    () => (
      <Grid columns={{ group4: 8 }} enableGelGutters enableGelMargins>
        <Grid item columns={{ group4: 6 }}>
          <ExampleParagraph identifier="1" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="6" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="7" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="8" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleParagraph identifier="9" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
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
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 8,
          group5: 8,
        }}
        enableGelGutters
        enableGelMargins
      >
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 8,
            group5: 8,
          }}
          enableGelGutters
        >
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 3,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleImage />
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 3,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleParagraph identifier="1" />
          </Grid>
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="6" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="7" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="8" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
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
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 8,
          group5: 8,
        }}
        enableGelGutters
        enableGelMargins
      >
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 8,
            group5: 8,
          }}
          enableGelGutters
        >
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 3,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleImage />
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 3,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleParagraph identifier="1" />
          </Grid>
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="6" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="7" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="8" />
        </Grid>
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleImage />
        </Grid>
        <Grid
          item
          columns={{
            group0: 4,
            group1: 4,
            group2: 4,
            group3: 4,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="9" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Normal slice layout for 2, 6 or 10 items',
    () => (
      <Grid
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 20,
          group5: 20,
        }}
        enableGelGutters
        enableGelMargins
      >
        <Grid
          enableGelGutters
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 4,
            group5: 4,
          }}
        >
          <Grid
            item
            columns={{
              group0: 2,
              group1: 2,
              group2: 2,
              group3: 2,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleImage />
          </Grid>
          <Grid
            item
            columns={{
              group0: 4,
              group1: 4,
              group2: 4,
              group3: 4,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleParagraph identifier="1" />
          </Grid>
          <Grid
            item
            columns={{
              group0: 2,
              group1: 2,
              group2: 2,
              group3: 2,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleImage />
          </Grid>
          <Grid
            item
            columns={{
              group0: 4,
              group1: 4,
              group2: 4,
              group3: 4,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleParagraph identifier="2" />
          </Grid>
          <Grid
            item
            columns={{
              group0: 2,
              group1: 2,
              group2: 2,
              group3: 2,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleImage />
          </Grid>
          <Grid
            item
            columns={{
              group0: 4,
              group1: 4,
              group2: 4,
              group3: 4,
              group4: 4,
              group5: 4,
            }}
          >
            <ExampleParagraph identifier="3" />
          </Grid>
          <Grid
            enableGelGutters
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 4,
              group5: 4,
            }}
          >
            <Grid
              item
              columns={{
                group0: 2,
                group1: 2,
                group2: 2,
                group3: 2,
                group4: 4,
                group5: 4,
              }}
            >
              <ExampleImage />
            </Grid>
            <Grid
              item
              columns={{
                group0: 4,
                group1: 4,
                group2: 4,
                group3: 4,
                group4: 4,
                group5: 4,
              }}
            >
              <ExampleParagraph identifier="4" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Normal slice layout for 4 or 8 items',
    () => (
      <Grid columns={{ group4: 8 }} enableGelGutters enableGelMargins>
        <Grid item columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="1" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="2" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="3" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="4" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="5" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="6" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
          <ExampleImage />
          <ExampleParagraph identifier="7" />
        </Grid>
        <Grid item columns={{ group4: 2 }}>
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
      <Grid columns={{ group2: 6 }} enableGelMargins enableGelGutters>
        <Grid item columns={{ group2: 2 }} startOffset={{ group2: 2 }}>
          <ExampleParagraph identifier="1" />
        </Grid>
      </Grid>
    ),
    { notes },
  )
  .add(
    'Grid Article image example',
    () => (
      <Grid
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 8,
          group5: 20,
        }}
        enableGelMargins
        enableGelGutters
        enableGelMaxWidths
        startOffset={{
          group1: 1,
          group2: 1,
          group3: 1,
          group4: 2,
          group5: 5,
        }}
      >
        <Grid
          item
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 6,
            group5: 12,
          }}
        >
          <ExampleParagraph identifier="1" />
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 6,
            group5: 12,
          }}
          enableGelGutters
        >
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 6,
              group5: 12,
            }}
          >
            <ExampleParagraph identifier="Landscape image " />
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 5,
              group4: 5,
              group5: 10,
            }}
          >
            <ExampleParagraph identifier="Landscape image's caption " />
          </Grid>
        </Grid>
        <Grid
          item
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 5,
            group4: 5,
            group5: 10,
          }}
        >
          <ExampleParagraph identifier="Paragraph " />
        </Grid>
        {['2', '3', '4', '5', '6', '7', '8', '9', '10'].map(num => (
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 5,
              group4: 5,
              group5: 10,
            }}
            key={`${num}item`}
          >
            <ExampleParagraph identifier={num} />
          </Grid>
        ))}
      </Grid>
    ),
    { notes },
  );
