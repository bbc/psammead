import React, { Fragment } from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import StoryPromo, { Headline, Summary } from './index';

const Image = <img src="https://foobar.com/image.png" alt="Alt text" />;

const Info = (
  <Fragment>
    <Headline script={latin}>The headline of the promo</Headline>
    <Summary script={latin}>The summary of the promo</Summary>
    <time>12 March 2019</time>
  </Fragment>
);

const mediaInfo = {
  duration: '2:15',
  datetime: 'PT2M15S',
  offscreenText: 'Video 2 minutes 15 seconds',
};

describe('StoryPromo', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info} />,
  );
});

describe('StoryPromo with Media Indicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info} mediaInfo={mediaInfo} />,
  );
});
