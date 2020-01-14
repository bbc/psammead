import React from 'react';
import { arrayOf, bool, shape, string } from 'prop-types';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import MediaIndicator from '@bbc/psammead-media-indicator';
import { render } from '@testing-library/react';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import StoryPromo, { Headline, Summary, Link, LiveLabel } from './index';
import relatedItems from '../testHelpers/relatedItems';
import IndexAlsosContainer from '../testHelpers/IndexAlsosContainer';

const Image = <img src="https://foobar.com/image.png" alt="Alt text" />;

/* eslint-disable-next-line react/prop-types */
const LiveComponent = ({ headline, service }) => (
  /* eslint-disable-next-line jsx-a11y/aria-role */
  <span role="text">
    <LiveLabel service={service}>LIVE</LiveLabel>
    <VisuallyHiddenText lang="en-GB">Live, </VisuallyHiddenText>
    {headline}
  </span>
);

const Info = ({ promoType, isLive, alsoItems, promoHasImage }) => (
  <>
    <Headline
      script={latin}
      promoType={promoType}
      service="news"
      promoHasImage={promoHasImage}
    >
      <Link href="https://www.bbc.co.uk/news">
        {isLive ? (
          <LiveComponent headline="The live promo headline" service="news" />
        ) : (
          'The headline of the promo'
        )}
      </Link>
    </Headline>
    <Summary
      script={latin}
      promoType={promoType}
      service="news"
      promoHasImage={promoHasImage}
    >
      The summary of the promo
    </Summary>
    <time>12 March 2019</time>
    {promoType === 'top' && alsoItems && (
      <IndexAlsosContainer
        alsoItems={alsoItems}
        script={latin}
        service="news"
      />
    )}
  </>
);
Info.propTypes = {
  promoType: string,
  isLive: bool.isRequired,
  alsoItems: arrayOf(shape()).isRequired,
  promoHasImage: bool,
};
Info.defaultProps = {
  promoType: 'regular',
  promoHasImage: true,
};

const mediaInfo = (
  <MediaIndicator duration="2:15" datetime="PT2M15S" service="news" />
);

describe('StoryPromo', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info({})} />,
  );
  shouldMatchSnapshot(
    'should render Live promo correctly',
    <StoryPromo image={Image} info={Info({ isLive: true })} />,
  );
});

describe('StoryPromo with Media Indicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info({})} mediaIndicator={mediaInfo} />,
  );
});

describe('StoryPromo - Top Story', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo
      image={Image}
      info={Info({ promoType: 'top' })}
      promoType="top"
    />,
  );

  shouldMatchSnapshot(
    'should render with Media Indicator correctly',
    <StoryPromo
      image={Image}
      info={Info({ promoType: 'top' })}
      mediaIndicator={mediaInfo}
      promoType="top"
    />,
  );

  shouldMatchSnapshot(
    'should render with multiple Index Alsos correctly',
    <StoryPromo
      image={Image}
      info={Info({ promoType: 'top', alsoItems: relatedItems })}
      promoType="top"
    />,
  );

  shouldMatchSnapshot(
    'should render with one Index Also correctly',
    <StoryPromo
      image={Image}
      info={Info({ promoType: 'top', alsoItems: [relatedItems[0]] })}
      promoType="top"
    />,
  );
});

describe('assertions', () => {
  it('should render h3, a, p, time', () => {
    const { container } = render(
      <StoryPromo
        image={Image}
        info={Info({ promoType: 'top' })}
        mediaIndicator={mediaInfo}
        promoType="top"
      />,
    );

    expect(container.querySelector('h3 a').textContent).toEqual(
      'The headline of the promo',
    );
    expect(container.querySelector('p').textContent).toEqual(
      'The summary of the promo',
    );

    const time = container.querySelector('time');
    expect(time.textContent).toEqual('2:15');

    const image = container.querySelector('img');

    expect(image.getAttribute('src')).toEqual('https://foobar.com/image.png');
    expect(image.getAttribute('alt')).toEqual('Alt text');
  });

  it('should add extra props passed to the component', () => {
    const { container } = render(
      <StoryPromo
        image={Image}
        info={Info({ promoType: 'top' })}
        mediaIndicator={mediaInfo}
        promoType="top"
        data-story-promo="story_promo"
      />,
    );

    expect(
      container.querySelector('div').getAttribute('data-story-promo'),
    ).toEqual('story_promo');
  });
});
