import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Timestamp from '@bbc/psammead-timestamp';
import Image from '@bbc/psammead-image';
import { latin } from '@bbc/gel-foundations/scripts';
import StoryPromo, { Headline, Summary } from '@bbc/psammead-story-promo';
import { StoryPromoLi, StoryPromoUl } from './index';
import storyPromoData from '../testHelpers/fixtureData';
import notes from '../README.md';

// eslint-disable-next-line react/prop-types
const ImageComponent = ({ alt, src }) => (
  <Image alt={alt} src={src} width="640" />
);

// eslint-disable-next-line react/prop-types
const InfoComponent = ({ headlineText, summaryText }) => (
  <Fragment>
    <Headline script={latin}>{headlineText}</Headline>
    <Summary script={latin}>{summaryText}</Summary>
    <Timestamp datetime="2019-03-01T14:00+00:00">12 March 2019</Timestamp>
  </Fragment>
);

storiesOf('StoryPromoList', module).add(
  'default',
  () => (
    <StoryPromoUl>
      {storyPromoData.map(item => {
        const ImagePromo = (
          <ImageComponent src={item.image.src} alt={item.image.alt} />
        );

        const InfoPromo = (
          <InfoComponent
            headlineText={item.info.headline}
            summaryText={item.info.summary}
          />
        );

        return (
          <StoryPromoLi key={item.info.headline}>
            <StoryPromo image={ImagePromo} info={InfoPromo} />
          </StoryPromoLi>
        );
      })}
    </StoryPromoUl>
  ),
  { notes },
);
