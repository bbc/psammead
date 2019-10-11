import React from 'react';
import Timestamp from '@bbc/psammead-timestamp';
import Image from '@bbc/psammead-image';
import { latin } from '@bbc/gel-foundations/scripts';
import StoryPromo, { Headline, Summary, Link } from '@bbc/psammead-story-promo';
import { StoryPromoLi, StoryPromoUl } from './index';
import storyPromoData from '../testHelpers/fixtureData';
import notes from '../README.md';

// eslint-disable-next-line react/prop-types
const ImageComponent = ({ alt, src }) => (
  <Image alt={alt} src={src} width="640" />
);

// eslint-disable-next-line react/prop-types
const InfoComponent = ({ headlineText, summaryText, datetime, dateformat }) => (
  <>
    <Headline script={latin} service="news">
      <Link href="https://www.bbc.co.uk/news">{headlineText}</Link>
    </Headline>
    <Summary script={latin} service="news">
      {summaryText}
    </Summary>
    <Timestamp
      datetime={datetime}
      script={latin}
      padding={false}
      service="news"
    >
      {dateformat}
    </Timestamp>
  </>
);

export default {
  title: 'Components|StoryPromo/StoryPromoList',
};

export const defaultStory = () => (
  <StoryPromoUl>
    {storyPromoData.map(item => {
      const ImagePromo = (
        <ImageComponent src={item.image.src} alt={item.image.alt} />
      );

      const InfoPromo = (
        <InfoComponent
          headlineText={item.info.headline}
          summaryText={item.info.summary}
          datetime={item.info.datetime}
          dateformat={item.info.dateformat}
        />
      );

      return (
        <StoryPromoLi key={item.info.headline}>
          <StoryPromo image={ImagePromo} info={InfoPromo} />
        </StoryPromoLi>
      );
    })}
  </StoryPromoUl>
);

defaultStory.story = {
  name: 'default',
  parameters: { notes },
};
