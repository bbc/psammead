import React, { Fragment } from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import StoryPromo, { Heading } from './index';

const image = <img src="https://foobar.com/image.png" alt="Alt text" />;

const text = (
  <Fragment>
    <Heading script={latin}>The headline of the promo</Heading>
    <time>12 March 2019</time>
  </Fragment>
);

describe('StoryPromo', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={image} text={text} />,
  );
});
