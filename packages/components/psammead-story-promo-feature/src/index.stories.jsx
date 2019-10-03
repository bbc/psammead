import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import notes from '../README.md';
import FeaturedStoryPromo from './index';

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
  topStory,
  service,
  dir,
  type,
}) => (
  <>
    <Headline script={script} topStory={topStory} service={service}>
      <Link href="https://www.bbc.co.uk/news">
        {/* {isLive ? (
          <LiveComponent service={service} dir={dir} headline={headlineText} />
        ) : (
          <HiddenText headline={headlineText} type={type} />
        )} */}
        {headlineText} 
      </Link>
    </Headline>
    <Summary script={script} topStory={topStory} service={service}>
      {summaryText}
    </Summary>
    {topStory && (
      <IndexAlsosContainer
        script={script}
        service={service}
        dir={dir}
      />
    )}
  </>
);

const generateStory = ({ topStory }) =>
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
          topStory={topStory}
          service={service}
          dir={dir}
        />
      );

      const Img = buildImg();

      return (
        <FeaturedStoryPromo
          image={Img}
          info={Info}
          mediaIndicator={false}
          topStory={topStory}
        />
      );
    },
  });

storiesOf('Components|FeaturedStoryPromo', module)
  .addDecorator(withKnobs)
  .add('default', generateStory({ topStory: false }), {
    notes,
    knobs: { escapeHTML: false },
  });
