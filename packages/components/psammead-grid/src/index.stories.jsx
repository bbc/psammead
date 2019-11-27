import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  withServicesKnob,
  buildRTLSubstories,
} from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import MediaIndicator from '@bbc/psammead-media-indicator';
import StoryPromo, { Headline, Summary, Link } from '@bbc/psammead-story-promo';
import IndexAlsosContainer from '../../psammead-story-promo/testHelpers/IndexAlsosContainer';
import relatedItems from '../../psammead-story-promo/testHelpers/relatedItems';
import Grid from '.';
import { ExampleImage, ExampleParagraph } from './testHelpers';
import notes from '../README.md';

const STORY_KIND = 'Components|Grid';

storiesOf(STORY_KIND, module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Example with layout change at group4+',
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
      >
        <Grid
          item
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 6,
            group5: 6,
          }}
        >
          <p>
            Paragraph - groups 0-3 span 6/6 columns, groups 4+ span 6/8 columns.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid
          item
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
        >
          <p>
            Paragraph - groups 0-3 span 6/6 columns, groups 4+ span 2/8 columns.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Slice layout for 6 or 10 items',
    () => (
      <Grid
        enableGelGutters
        columns={{
          group0: 8,
          group1: 8,
          group2: 8,
          group3: 8,
          group4: 8,
          group5: 8,
        }}
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
          group4: true,
          group5: true,
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
            group5: 6,
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
          <ExampleParagraph identifier="9" />
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
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
          group4: true,
          group5: true,
        }}
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
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
          group4: true,
          group5: true,
        }}
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
            <ExampleParagraph identifier="2" />
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
          <ExampleParagraph identifier="4" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Normal slice layout for 1 or 5 items - Nested parent grids',
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
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
          group4: true,
          group5: true,
        }}
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
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
          group4: 8,
          group5: 8,
        }}
        enableGelGutters
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
          group4: true,
          group5: true,
        }}
      >
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 6,
            group5: 6,
          }}
          enableGelGutters
        >
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
            <ExampleParagraph identifier="1" />
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
            <ExampleImage />
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
          <ExampleParagraph identifier="9" />
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
        enableGelGutters
        columns={{
          group0: 8,
          group1: 8,
          group2: 8,
          group3: 8,
          group4: 8,
          group5: 8,
        }}
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
          group4: true,
          group5: true,
        }}
      >
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
          <ExampleParagraph identifier="1" />
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
          <ExampleParagraph identifier="8" />
        </Grid>
      </Grid>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'Example with Top story and regular promos',
    ({ service, script, dir, text }) => {
      // eslint-disable-next-line react/prop-types
      const generateStory = ({ topStory, alsoItems = null, mediaType }) => {
        const MediaIndicatorComponent = type => (
          <MediaIndicator
            duration={type !== 'photogallery' && '2:15'}
            datetime="PT2M15S"
            service={service}
            type={type}
          />
        );

        const Info = (
          <>
            <Headline script={script} topStory={topStory} service={service}>
              <Link href="https://www.bbc.co.uk/news">{text}</Link>
            </Headline>
            <Summary script={script} topStory={topStory} service={service}>
              {service === 'news'
                ? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                : text}
            </Summary>
            {topStory && alsoItems && (
              <IndexAlsosContainer
                alsoItems={alsoItems}
                script={script}
                service={service}
                dir={dir}
              />
            )}
          </>
        );

        const Img = (
          <Image
            alt="Robert Downey Junior in Iron Man"
            src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
            width="640"
          />
        );

        return (
          <StoryPromo
            image={Img}
            info={Info}
            mediaIndicator={
              mediaType && MediaIndicatorComponent(mediaType, service)
            }
            topStory={topStory}
          />
        );
      };

      return (
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
          margins={{
            group0: true,
            group1: true,
            group2: true,
            group3: true,
            group4: true,
            group5: true,
          }}
        >
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 8,
              group5: 8,
            }}
          >
            {generateStory({
              topStory: true,
              alsoItems: relatedItems.map(item => ({
                ...item,
                headlines: { headline: text },
              })),
            })}
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 2,
              group5: 2,
            }}
          >
            {generateStory({ topStory: false, mediaType: 'audio' })}
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 2,
              group5: 2,
            }}
          >
            {generateStory({ topStory: false, mediaType: 'video' })}
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 2,
              group5: 2,
            }}
          >
            {generateStory({ topStory: false, mediaType: 'photogallery' })}
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 2,
              group5: 2,
            }}
          >
            {generateStory({ topStory: false })}
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 2,
              group5: 2,
            }}
          >
            {generateStory({ topStory: false })}
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 2,
              group5: 2,
            }}
          >
            {generateStory({ topStory: false })}
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 2,
              group5: 2,
            }}
          >
            {generateStory({ topStory: false })}
          </Grid>
          <Grid
            item
            columns={{
              group0: 6,
              group1: 6,
              group2: 6,
              group3: 6,
              group4: 2,
              group5: 2,
            }}
          >
            {generateStory({ topStory: false })}
          </Grid>
        </Grid>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  )
  .add('Example with only margins on the paragraph Grid item', () => (
    <Grid
      columns={{
        group0: 6,
        group1: 6,
        group2: 6,
        group3: 6,
        group4: 8,
        group5: 8,
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
          group5: 6,
        }}
      >
        <Image
          alt="Robert Downey Junior in Iron Man"
          src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
          width="640"
        />
      </Grid>
      <Grid
        item
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 2,
          group5: 2,
        }}
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
        }}
      >
        <p>
          Image & Paragraph - groups 0-3 Image is fullscreen (no margin) but
          paragraph has GEL margins. For groups 4+, image & paragraph are
          side-by-side & there are no margins.
        </p>
      </Grid>
    </Grid>
  ))
  .add('Example with gutters & only margins on the paragraph Grid item', () => (
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
          group3: 6,
          group4: 6,
          group5: 6,
        }}
      >
        <Image
          alt="Robert Downey Junior in Iron Man"
          src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
          width="640"
        />
      </Grid>
      <Grid
        item
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 2,
          group5: 2,
        }}
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
        }}
      >
        <p>
          Image & Paragraph - groups 0-3 Image is fullscreen (no margin) but
          paragraph has GEL margins. For groups 4+, image & paragraph are
          side-by-side & there are no margins.
        </p>
      </Grid>
    </Grid>
  ))
  .add('Example with gutters only', () => (
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
          group3: 6,
          group4: 6,
          group5: 6,
        }}
      >
        <Image
          alt="Robert Downey Junior in Iron Man"
          src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
          width="640"
        />
      </Grid>
      <Grid
        item
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 2,
          group5: 2,
        }}
      >
        <Image
          alt="Robert Downey Junior in Iron Man"
          src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
          width="640"
        />
      </Grid>
      <Grid
        item
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 2,
          group5: 2,
        }}
      >
        <Image
          alt="Robert Downey Junior in Iron Man"
          src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
          width="640"
        />
      </Grid>
    </Grid>
  ));

storiesOf('Components|Grid/startOffset', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Example on the first nested Grid',
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
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
        }}
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
          startOffset={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
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
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
      </Grid>
    ),
    { notes },
  )
  .add(
    'Example on the second nested Grid',
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
        margins={{
          group0: true,
          group1: true,
          group2: true,
          group3: true,
        }}
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
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
          startOffset={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
          enableGelGutters
        >
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
        </Grid>
      </Grid>
    ),
    { notes },
  )
  .add(
    'Example on the Grid Item',
    () => (
      <Grid
        columns={{
          group0: 6,
          group1: 6,
          group2: 6,
          group3: 6,
          group4: 6,
          group5: 6,
        }}
      >
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
          startOffset={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          <ExampleParagraph identifier="1" />
        </Grid>
      </Grid>
    ),
    { notes },
  )
  .add(
    'Article example',
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
      >
        <Grid
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 8,
            group5: 20,
          }}
          startOffset={{
            group0: 1,
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
            margins={{
              group0: true,
              group1: true,
              group2: true,
              group3: true,
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
              margins={{
                group0: true,
                group1: true,
                group2: true,
                group3: true,
              }}
            >
              <ExampleParagraph identifier={num} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    ),
    { notes },
  );
buildRTLSubstories(STORY_KIND, {
  include: ['Example with Top story and regular promos'],
});
