import React, { Fragment } from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import MediaIndicator from '@bbc/psammead-media-indicator';
import StoryPromo, { Headline, Summary, Link } from './index';

const Image = <img src="https://foobar.com/image.png" alt="Alt text" />;

const Info = (
  <Fragment>
    <Headline script={latin}>
      <Link href="https://www.bbc.co.uk/news">The headline of the promo</Link>
    </Headline>
    <Summary script={latin}>The summary of the promo</Summary>
    <time>12 March 2019</time>
  </Fragment>
);

const mediaInfo = (
  <MediaIndicator
    duration="2:15"
    datetime="PT2M15S"
    offscreenText="Video 2 minutes 15 seconds"
  />
);

describe('StoryPromo', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info} />,
  );
});

describe('StoryPromo with Media Indicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info} mediaIndicator={mediaInfo} />,
  );
});

describe('StoryPromo - Top Story', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info} topStory={true}/>,
  );
});

describe('StoryPromo - Top Story with Media Indicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo
      image={Image}
      info={Info}
      mediaIndicator={mediaInfo}
      topStory={true}
    />,
  );
});
