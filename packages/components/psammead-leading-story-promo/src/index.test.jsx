import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { Headline, Summary, Link } from '@bbc/psammead-story-promo';
import LeadingStoryPromo from './index';

const Image = <img src="https://foobar.com/image.png" alt="Alt text" />;

// eslint-disable-next-line react/prop-types
const Info = (script, headlineText, summaryText) => (
  <>
    <Headline script={script} service="news">
      <Link href="https://www.bbc.co.uk/news">{headlineText}</Link>
    </Headline>
    <Summary script={script} service="news">
      {summaryText}
    </Summary>
  </>
);

describe('LeadingStoryPromo', () => {
  shouldMatchSnapshot(
    'should render default leading story promo correctly',
    <LeadingStoryPromo
      image={Image}
      info={Info(
        latin,
        'The headline of the promo',
        'The summary of the promo',
      )}
    />,
  );

  shouldMatchSnapshot(
    'should render RTL leading story promo correctly',
    <LeadingStoryPromo
      image={Image}
      info={Info(arabic, 'هذا هو العنوان الخاص بي', 'هذا عنوان فرعي')}
    />,
  );
});
