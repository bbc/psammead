import React, { Fragment } from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import StoryPromo, { Headline, Summary } from '@bbc/psammead-story-promo';
import { StoryPromoLi, StoryPromoUl } from './index';

const Image = <img src="https://foobar.com/image.png" alt="Alt text" />;

const Info = (
  <Fragment>
    <Headline script={latin}>The headline of the promo</Headline>
    <Summary script={latin}>The summary of the promo</Summary>
    <time>12 March 2019</time>
  </Fragment>
);

describe('StoryPromo', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromoUl role="list">
      <StoryPromoLi role="listitem">
        <StoryPromo image={Image} info={Info} />
      </StoryPromoLi>
    </StoryPromoUl>,
  );
});
