import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import Grid from '../../psammead-grid';
import notes from '../README.md';
import { MostReadRank, MostReadItem } from './item';

const STORY_KIND = 'Components|MostRead/List';
const items = [
  {
    item: {
      title: 'John Lewis staff bonus cut again as profits fall',
      href: 'https://www.bbc.com/vietnamese/institutional-49283563',
    },
    dir: 'ltr',
  },
  {
    item: {
      title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
      href: 'https://www.bbc.com/vietnamese/institutional-49283563',
    },
    dir: 'rtl',
  },
];

const stories = storiesOf(STORY_KIND, module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());
items.forEach(({ item, dir }) => {
  stories.add(`With item ${dir}`, ({ script, service }) => (
    <Grid
      as="ol"
      enableGelGutters
      enableGelMargins
      columns={{
        group0: 10,
        group1: 10,
        group2: 20,
        group3: 20,
        group4: 20,
        group5: 50,
      }}
    >
      <Grid
        as="li"
        item
        columns={{
          group0: 1,
          group1: 1,
          group2: 1,
          group3: 1,
          group4: 1,
          group5: 1,
        }}
      >
        <MostReadRank dir="ltr" service={service} script={script}>
          1
        </MostReadRank>
      </Grid>

      <Grid
        item
        columns={{
          group0: 9,
          group1: 9,
          group2: 9,
          group3: 9,
          group4: 9,
          group5: 9,
        }}
      >
        <MostReadItem dir={dir} item={item} service={service} script={script} />
      </Grid>
      <Grid
        item
        columns={{
          group0: 1,
          group1: 1,
          group2: 1,
          group3: 1,
          group4: 1,
          group5: 1,
        }}
      >
        <MostReadRank dir="ltr" service={service} script={script}>
          2
        </MostReadRank>
      </Grid>

      <Grid
        item
        columns={{
          group0: 9,
          group1: 9,
          group2: 9,
          group3: 9,
          group4: 9,
          group5: 9,
        }}
      >
        <MostReadItem dir={dir} item={item} service={service} script={script} />
      </Grid>
      <Grid
        item
        columns={{
          group0: 1,
          group1: 1,
          group2: 1,
          group3: 1,
          group4: 1,
          group5: 1,
        }}
      >
        <MostReadRank dir="ltr" service={service} script={script}>
          10
        </MostReadRank>
      </Grid>

      <Grid
        item
        columns={{
          group0: 9,
          group1: 9,
          group2: 9,
          group3: 9,
          group4: 9,
          group5: 9,
        }}
      >
        <MostReadItem dir={dir} item={item} service={service} script={script} />
      </Grid>
    </Grid>
  ));
});
stories
  .add(
    'Column size 6',
    () => (
      <Grid
        enableGelGutters
        enableGelMargins
        columns={{
          group0: 6,
          group1: 6,
          group2: 12,
          group3: 12,
          group4: 12,
          group5: 30,
        }}
      >
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>1</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>2</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>3</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>4</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>5</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>6</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>7</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>8</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>9</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>10</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 5,
            group1: 5,
            group2: 5,
            group3: 5,
            group4: 5,
            group5: 5,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Column size 8',
    () => (
      <Grid
        enableGelGutters
        enableGelMargins
        columns={{
          group0: 8,
          group1: 8,
          group2: 16,
          group3: 16,
          group4: 16,
          group5: 40,
        }}
      >
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>1</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>2</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>3</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>4</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>5</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>6</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>7</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>8</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>9</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>10</h1>
        </Grid>

        <Grid
          enableGelGutters
          enableGelMargins
          item
          columns={{
            group0: 7,
            group1: 7,
            group2: 7,
            group3: 7,
            group4: 7,
            group5: 7,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Column size zeplin',
    () => (
      <Grid
        enableGelGutters
        enableGelMargins
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 8,
          group5: 20,
        }}
      >
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>1</h1>
        </Grid>

        <Grid
          item
          columns={{
            group0: 5,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 3,
            group5: 3,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>1</h1>
        </Grid>

        <Grid
          item
          columns={{
            group0: 5,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 3,
            group5: 3,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>1</h1>
        </Grid>

        <Grid
          item
          columns={{
            group0: 5,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 3,
            group5: 3,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>1</h1>
        </Grid>

        <Grid
          item
          columns={{
            group0: 5,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 3,
            group5: 3,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>1</h1>
        </Grid>

        <Grid
          item
          columns={{
            group0: 5,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 3,
            group5: 3,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 1,
            group1: 1,
            group2: 1,
            group3: 1,
            group4: 1,
            group5: 1,
          }}
        >
          <h1>1</h1>
        </Grid>

        <Grid
          item
          columns={{
            group0: 5,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 3,
            group5: 3,
          }}
        >
          <p>
            Paragraph - groups 11111 columns, groups 4+ span 2/8 columns. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
