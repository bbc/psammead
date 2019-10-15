import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import notes from '../README.md';
import LeadingStoryPromo from './index';
import {
  Headline,
  Summary,
  Link,
} from '@bbc/psammead-story-promo';

const buildImg = () => (
  <Image
    alt={text('Image alt text', 'Robert Downey Junior in Iron Man')}
    src={text(
      'Image src',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg',
    )}
    width="640"
  />
);

const InfoComponent = ({
  headlineText,
  summaryText,
  script,
  service,
}) => (
  <>
    <Headline script={script} service={service}>
      <Link href="https://www.bbc.co.uk/news">
        {headlineText} 
      </Link>
    </Headline>
    <Summary script={script} service={service}>
      {summaryText}
    </Summary>
  </>
);

const generateStory = () =>
  inputProvider({
    slots: [{ name: 'Headline' }, { name: 'Summary' }],
    // eslint-disable-next-line react/prop-types
    componentFunction: ({
      slotTexts: [headlineText, summaryText],
      script,
      service,
      dir,
    }) => {
      const Info = (
        <InfoComponent
          headlineText={headlineText}
          summaryText={summaryText}
          script={script}
          service={service}
          dir={dir}
        />
      );

      const Img = buildImg();

      return (
        <LeadingStoryPromo
          image={Img}
          info={Info}
          mediaIndicator={false}
        />
      );
    },
  });

storiesOf('Components|FeaturedStoryPromo', module)
  .addDecorator(withKnobs)
  .add('default', generateStory(), {
    notes,
    knobs: { escapeHTML: false },
  });
