import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import Timestamp from '@bbc/psammead-timestamp';
import MediaIndicator from '@bbc/psammead-media-indicator';
import notes from '../README.md';
import StoryPromo, {
  Headline,
  Summary,
  Link,
  IndexAlsos,
  IndexAlso,
  IndexAlsosUl,
  IndexAlsosLi,
} from './index';

const relatedItems = [
  {
    headlines: {
      headline: 'APC ba ta isa ta kore ni ba – Buba Galadima',
    },
    locators: {
      assetUri: '/hausa/labarai-48916590',
      cpsUrn: 'urn:bbc:content:assetUri:/hausa/labarai-48916590',
    },
    summary:
      "Buba Galadima ya ce kasancewar yana daya daga cikin mutanen da suka kafa jam'iyya mai mulki ta APC, hakan ya mayar da shi dan jam'iyya na din-din-din.",
    timestamp: 1562665827,
    cpsType: 'MAP',
    id: 'urn:bbc:ares::asset:hausa/labarai-48916590',
    type: 'cps',
  },
  {
    headlines: {
      headline: 'Yaushe Obasanjo ya fara yi wa shugabannin kasa baki?',
    },
    locators: {
      assetUri: '/hausa/labarai-42837051',
      cpsUrn: 'urn:bbc:content:assetUri:/hausa/labarai-42837051',
    },
    summary:
      'Cif Obasanjo ya caccaki kusan daukacin mutanen da suka yi shugabancin Najeriya saboda abin da ya kira rashin iya gudanar da mulkinsu.',
    timestamp: 1563269515,
    cpsType: 'STY',
    id: 'urn:bbc:ares::asset:hausa/labarai-42837051',
    type: 'cps',
  },
];

/* eslint-disable react/prop-types */
const InfoComponent = ({
  headlineText,
  summaryText,
  script,
  topStory,
  service,
}) => (
  <Fragment>
    <Headline script={script} topStory={topStory} service={service}>
      <Link href="https://www.bbc.co.uk/news">{headlineText}</Link>
    </Headline>
    <Summary script={script} topStory={topStory} service={service}>
      {summaryText}
    </Summary>
    <Timestamp
      datetime={text('Timestamp datetime', '2019-03-01T14:00+00:00')}
      script={script}
      padding={false}
      service={service}
    >
      {text('Timestamp', '12 March 2019')}
    </Timestamp>
  </Fragment>
);

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

const MediaIndicatorComponent = (type, service) => {
  return (
    <MediaIndicator
      duration={type !== 'photogallery' && '2:15'}
      datetime="PT2M15S"
      service={service}
      type={type}
    />
  );
};

const generateStory = ({ topStory, alsoItems = null }) =>
  inputProvider(
    [{ name: 'Headline' }, { name: 'Summary' }],
    ({ slotTexts: [headlineText, summaryText], script, service }) => {
      const Info = (
        <InfoComponent
          headlineText={headlineText}
          summaryText={summaryText}
          script={script}
          topStory={topStory}
          service={service}
        />
      );

      const mediaType = select(
        'Media Type',
        ['No media', 'video', 'audio', 'photogallery'],
        'No media',
      );

      const Img = buildImg();

      let indexAlsos;
      if (topStory && alsoItems) {
        indexAlsos = (
          <IndexAlsos offScreenText="Related content">
            {alsoItems.length > 1 ? (
              <IndexAlsosUl>
                {alsoItems.map(item => {
                  const key = item.id;
                  const { headline } = item.headlines;
                  const url = item.locators.assetUri;

                  return (
                    <IndexAlsosLi
                      key={key}
                      script={script}
                      service={service}
                      url={url}
                    >
                      {headline}
                    </IndexAlsosLi>
                  );
                })}
              </IndexAlsosUl>
            ) : (
              // When there is exactly one Index Also, it should not be contained within a list.
              (() => {
                const { headline } = alsoItems.headlines;
                const url = alsoItems.locators.assetUri;

                return (
                  <IndexAlso script={script} service={service} url={url}>
                    {headline}
                  </IndexAlso>
                );
              })()
            )}
          </IndexAlsos>
        );
      }

      return (
        <Fragment>
          <StoryPromo
            image={Img}
            info={Info}
            mediaIndicator={
              mediaType !== 'No media' &&
              MediaIndicatorComponent(mediaType, service)
            }
            topStory={topStory}
          />
          {indexAlsos}
        </Fragment>
      );
    },
  );

storiesOf('Components|StoryPromo/StoryPromo', module)
  .addDecorator(withKnobs)
  .add('default', generateStory({ topStory: false }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add('Top story', generateStory({ topStory: true }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add(
    'Index Alsos - multiple',
    generateStory({ topStory: true, alsoItems: relatedItems }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add(
    'Index Alsos - one',
    generateStory({ topStory: true, alsoItems: relatedItems[0] }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  );
