import React from 'react';
import { render } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { CanonicalSocialEmbed, AmpSocialEmbed } from './index';
import fixtures from './fixtures';

describe('CanonicalSocialEmbed', () => {
  it('should render correctly for Twitter', async () => {
    const { container, unmount } = render(
      <CanonicalSocialEmbed
        provider={fixtures.twitter.source}
        oEmbed={fixtures.twitter.embed.oembed}
        skipLink={{
          text: 'Skip %provider_name% content',
          endTextId: 'skip-%provider%-content',
          endTextVisuallyHidden: 'End of %provider_name% content',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this content",
          linkText: 'View content on %provider_name%',
          linkTextSuffixVisuallyHidden: ', external',
          linkHref: 'embed-url',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
        service="news"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(
      document.querySelector(
        'head script[src="https://platform.twitter.com/widgets.js"]',
      ),
    ).toBeTruthy();
    unmount();
    expect(
      document.querySelector(
        'head script[src="https://platform.twitter.com/widgets.js"]',
      ),
    ).toBeFalsy();
  });

  it('should render correctly for Instagram', async () => {
    const { container, unmount } = render(
      <CanonicalSocialEmbed
        provider={fixtures.instagram.source}
        oEmbed={fixtures.instagram.embed.oembed}
        skipLink={{
          text: 'Skip %provider_name% content',
          endTextId: 'skip-%provider%-content',
          endTextVisuallyHidden: 'End of %provider_name% content',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this content",
          linkText: 'View content on %provider_name%',
          linkTextSuffixVisuallyHidden: ', external',
          linkHref: 'embed-url',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
        service="news"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(
      document.querySelector(
        'head script[src="https://www.instagram.com/embed.js"]',
      ),
    ).toBeTruthy();
    unmount();
    expect(
      document.querySelector(
        'head script[src="https://www.instagram.com/embed.js"]',
      ),
    ).toBeFalsy();
  });

  it('should render correctly for YouTube', async () => {
    const { container } = render(
      <CanonicalSocialEmbed
        provider={fixtures.youtube.source}
        oEmbed={fixtures.youtube.embed.oembed}
        skipLink={{
          text: 'Skip %provider_name% content',
          endTextId: 'skip-%provider%-content',
          endTextVisuallyHidden: 'End of %provider_name% content',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this content",
          linkText: 'View content on %provider_name%',
          linkTextSuffixVisuallyHidden: ', external',
          linkHref: 'embed-url',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
        service="news"
        caption={{
          textPrefixVisuallyHidden: 'Video caption, ',
          text: 'Warning: Third party content may contain adverts',
        }}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  shouldMatchSnapshot(
    'should render a notice when the provider is unsupported',
    <CanonicalSocialEmbed
      provider="unknown"
      oEmbed={fixtures.twitter.embed.oembed}
      skipLink={{
        text: 'Skip %provider_name% content',
        endTextId: 'skip-%provider%-content',
        endTextVisuallyHidden: 'End of %provider_name% content',
      }}
      fallback={{
        text: "Sorry but we're having trouble displaying this content",
        linkText: 'View content on %provider_name%',
        linkTextSuffixVisuallyHidden: ', external',
        linkHref: 'embed-url',
        warningText: 'Warning: BBC is not responsible for third party content',
      }}
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render a notice when there is no oEmbed response',
    <CanonicalSocialEmbed
      provider={fixtures.twitter.source}
      skipLink={{
        text: 'Skip %provider_name% content',
        endTextId: 'skip-%provider%-content',
        endTextVisuallyHidden: 'End of %provider_name% content',
      }}
      fallback={{
        text: "Sorry but we're having trouble displaying this content",
        linkText: 'View content on %provider_name%',
        linkTextSuffixVisuallyHidden: ', external',
        linkHref: 'embed-url',
        warningText: 'Warning: BBC is not responsible for third party content',
      }}
      service="news"
    />,
  );
});

describe('AmpSocialEmbed', () => {
  Object.values(fixtures).forEach(fixture => {
    const { source: provider, id, embed } = fixture;
    const caption =
      provider === 'youtube'
        ? {
            text: 'Warning: Third party content may contain adverts',
          }
        : null;

    shouldMatchSnapshot(
      `should render correctly for ${embed.oembed.provider_name}`,
      <AmpSocialEmbed
        provider={provider}
        id={id}
        skipLink={{
          text: 'Skip %provider_name% content',
          endTextId: 'skip-%provider%-content',
          endTextVisuallyHidden: 'End of %provider_name% content',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this content",
          linkText: 'View content on %provider_name%',
          linkHref: 'embed-url',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
        service="news"
        caption={caption}
      />,
    );
  });

  shouldMatchSnapshot(
    'should render a notice when the provider is unsupported',
    <AmpSocialEmbed
      provider="unknown"
      id={fixtures.twitter.id}
      skipLink={{
        text: 'Skip %provider_name% content',
        endTextId: 'skip-%provider%-content',
        endTextVisuallyHidden: 'End of %provider_name% content',
      }}
      fallback={{
        text: "Sorry but we're having trouble displaying this content",
        linkText: 'View content on %provider_name%',
        linkHref: 'embed-url',
        warningText: 'Warning: BBC is not responsible for third party content',
      }}
      service="news"
    />,
  );
});
