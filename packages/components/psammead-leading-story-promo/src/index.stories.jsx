import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import { Headline, Summary, Link } from '@bbc/psammead-story-promo';
import notes from '../README.md';
import LeadingStoryPromo from './index';

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

/* eslint-disable-next-line react/prop-types */
const InfoComponent = ({ headlineText, summaryText, script, service }) => (
  <>
    <Headline script={script} service={service}>
      <Link href="https://www.bbc.co.uk/news">{headlineText}</Link>
    </Headline>
    <Summary script={script} service={service}>
      {summaryText}
    </Summary>
  </>
);

/* eslint-disable react/prop-types */
const generateStory = () =>
  inputProvider({
    slots: [{ name: 'Headline' }, { name: 'Summary' }],
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
      const leadingStoryPromo = {
        image: Img,
        info: Info,
        mediaIndicator: null,
      };
      const secondaryStoryPromo = {
        image: Img,
        info: Info,
        mediaIndicator: null,
      };

      return (
        <LeadingStoryPromo
          leadingPromo={leadingStoryPromo}
          secondaryPromo={secondaryStoryPromo}
        />
      );
    },
  });
/* eslint-enable react/prop-types */

storiesOf('Components|LeadingStoryPromo', module)
  .addDecorator(withKnobs)
  .add('default', generateStory(), {
    notes,
    knobs: { escapeHTML: false },
  });
