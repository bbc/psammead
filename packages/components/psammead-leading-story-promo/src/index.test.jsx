import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import { Headline, Summary, Link } from '@bbc/psammead-story-promo';
import LeadingStoryPromo from './index';

const Image = <img src="https://foobar.com/image.png" alt="Alt text" />;

// eslint-disable-next-line react/prop-types
const Info = () => (
  <>
    <Headline script={latin} service="news">
      <Link href="https://www.bbc.co.uk/news">The headline of the promo</Link>
    </Headline>
    <Summary script={latin} service="news">
      The summary of the promo
    </Summary>
  </>
);

describe('LeadingStoryPromo', () => {
  shouldMatchSnapshot(
    'should render default leading story promo correctly',
    <LeadingStoryPromo image={Image} info={Info()} />,
  );
});
