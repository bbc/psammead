import React from 'react';
import { render } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { CanonicalSocialEmbed, AmpSocialEmbed } from './index';
import fixtures from './fixtures';

describe('CanonicalSocialEmbed', () => {
  Object.values(fixtures).forEach(fixture => {
    const { source: provider, embed } = fixture;
    const caption =
      provider === 'youtube'
        ? {
            textPrefixVisuallyHidden: 'Video caption, ',
            text: 'Warning: Third party content may contain adverts',
          }
        : null;

    it(`should render correctly for ${embed.oembed.provider_name}`, () => {
      const { container } = render(
        <CanonicalSocialEmbed
          provider={provider}
          oEmbed={embed.oembed}
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
          caption={caption}
        />,
      );
      expect(container).toMatchSnapshot();
    });
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
