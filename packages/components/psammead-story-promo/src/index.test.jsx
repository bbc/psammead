import React, { Fragment } from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import MediaIndicator from '@bbc/psammead-media-indicator';
import { render } from '@testing-library/react';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import StoryPromo, {
  Headline,
  Summary,
  Link,
  LiveLabel,
  IndexAlsos,
  IndexAlso,
  IndexAlsosUl,
  IndexAlsosLi,
} from './index';
import relatedItems from '../testHelpers/relatedItems';

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

const getIndexAlsosMediaIndicator = (cpsType, service) => {
  const isPGL = cpsType === 'PGL';
  const isMedia = cpsType === 'MAP';

  if (!isPGL && !isMedia) {
    return null;
  }

  // Update this once the ARES feed contains the media type
  const indexAlsosMediaType = isPGL ? 'photogallery' : 'video';

  return <MediaIndicator service={service} type={indexAlsosMediaType} />; // Add indexAlsos prop
};

/* eslint-disable-next-line react/prop-types */
const IndexAlsosComponent = ({ alsoItems, script, service }) => (
  <IndexAlsos offScreenText="Related content">
    {/* eslint-disable-next-line react/prop-types */
    alsoItems.length > 1 ? (
      <IndexAlsosUl>
        {/* eslint-disable-next-line react/prop-types */
        alsoItems.map(item => {
          const key = item.id;
          const { headline } = item.headlines;
          const url = item.locators.assetUri;
          const { cpsType } = item;

          return (
            <IndexAlsosLi
              key={key}
              script={script}
              service={service}
              url={url}
              mediaIndicator={getIndexAlsosMediaIndicator(cpsType, service)}
            >
              {headline}
            </IndexAlsosLi>
          );
        })}
      </IndexAlsosUl>
    ) : (
      // When there is exactly one related item, it should not be contained within a list.
      () => {
        /* eslint-disable-next-line react/prop-types */
        const { headline } = alsoItems.headlines;
        /* eslint-disable-next-line react/prop-types */
        const url = alsoItems.locators.assetUri;
        // eslint-disable-next-line react/prop-types
        const { cpsType } = alsoItems;

        return (
          <IndexAlso
            script={script}
            service={service}
            url={url}
            mediaIndicator={getIndexAlsosMediaIndicator(cpsType, service)}
          >
            {headline}
          </IndexAlso>
        );
      }
    )}
  </IndexAlsos>
);

// eslint-disable-next-line react/prop-types
const Info = ({ topStory, isLive, alsoItems }) => (
  <Fragment>
    <Headline script={latin} topStory={topStory} service="news">
      <Link href="https://www.bbc.co.uk/news">
        {isLive ? (
          <LiveComponent headline="The live promo headline" service="news" />
        ) : (
          'The headline of the promo'
        )}
      </Link>
    </Headline>
    <Summary script={latin} topStory={topStory} service="news">
      The summary of the promo
    </Summary>
    <time>12 March 2019</time>
    {topStory && alsoItems && (
      <IndexAlsosComponent
        alsoItems={alsoItems}
        script={latin}
        service="news"
      />
    )}
  </Fragment>
);

const mediaInfo = (
  <MediaIndicator duration="2:15" datetime="PT2M15S" service="news" />
);

describe('StoryPromo', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info({ topStory: false })} />,
  );
  shouldMatchSnapshot(
    'should render Live promo correctly',
    <StoryPromo image={Image} info={Info({ topStory: false, isLive: true })} />,
  );
});

describe('StoryPromo with Media Indicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo
      image={Image}
      info={Info({ topStory: false })}
      mediaIndicator={mediaInfo}
    />,
  );
});

describe('StoryPromo - Top Story', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo image={Image} info={Info({ topStory: true })} topStory />,
  );

  shouldMatchSnapshot(
    'should render with Media Indicator correctly',
    <StoryPromo
      image={Image}
      info={Info({ topStory: true })}
      mediaIndicator={mediaInfo}
      topStory
    />,
  );

  shouldMatchSnapshot(
    'should render with multiple Index Alsos correctly',
    <StoryPromo
      image={Image}
      info={Info({ topStory: true, alsoItems: relatedItems })}
      topStory
    />,
  );

  shouldMatchSnapshot(
    'should render with one Index Also correctly',
    <StoryPromo
      image={Image}
      info={Info({ topStory: true, alsoItems: relatedItems[0] })}
      topStory
    />,
  );
});

describe('Index Alsos - multiple', () => {
  shouldMatchSnapshot(
    'should render multiple correctly',
    <IndexAlsosComponent
      alsoItems={relatedItems}
      script={latin}
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render one correctly',
    <IndexAlsosComponent
      alsoItems={relatedItems[0]}
      script={latin}
      service="news"
    />,
  );
});

describe('assertions', () => {
  it('should render h3, a, p, time', () => {
    const { container } = render(
      <StoryPromo
        image={Image}
        info={Info({ topStory: true })}
        mediaIndicator={mediaInfo}
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
});
