import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { CanonicalSocialEmbed, AmpSocialEmbed } from './index';
import fixtures from './fixtures';

describe('CanonicalSocialEmbed', () => {
  Object.values(fixtures).forEach(fixture => {
    const { source: provider, embed } = fixture;
    shouldMatchSnapshot(
      `should render correctly for ${embed.oembed.provider_name}`,
      <CanonicalSocialEmbed
        provider={provider}
        oEmbed={embed.oembed}
        skipLink={{
          text: 'Skip %provider% post by %author%',
          skipToId: 'skip-%provider%-post-by-%author%',
          endText: 'End of %provider% post by %author%',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this post",
          linkText: 'View original post',
          linkHref: 'embed-url',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
      />,
    );
  });

  shouldMatchSnapshot(
    'should render a notice when the provider is unsupported',
    <CanonicalSocialEmbed
      provider="unknown"
      oEmbed={fixtures.twitter.embed.oembed}
      skipLink={{
        text: 'Skip %provider% post by %author%',
        skipToId: 'skip-%provider%-post-by-%author%',
        endText: 'End of %provider% post by %author%',
      }}
      fallback={{
        text: "Sorry but we're having trouble displaying this post",
        linkText: 'View original post',
        linkHref: 'embed-url',
        warningText: 'Warning: BBC is not responsible for third party content',
      }}
    />,
  );

  shouldMatchSnapshot(
    'should render a notice when there is no oEmbed response',
    <CanonicalSocialEmbed
      provider={fixtures.twitter.source}
      skipLink={{
        text: 'Skip %provider% post by %author%',
        skipToId: 'skip-%provider%-post-by-%author%',
        endText: 'End of %provider% post by %author%',
      }}
      fallback={{
        text: "Sorry but we're having trouble displaying this post",
        linkText: 'View original post',
        linkHref: 'embed-url',
        warningText: 'Warning: BBC is not responsible for third party content',
      }}
    />,
  );
});

describe('AmpSocialEmbed', () => {
  Object.values(fixtures).forEach(fixture => {
    const { source: provider, id, embed } = fixture;
    shouldMatchSnapshot(
      `should render correctly for ${embed.oembed.provider_name}`,
      <AmpSocialEmbed
        provider={provider}
        id={id}
        skipLink={{
          text: 'Skip %provider% post by %author%',
          skipToId: 'skip-%provider%-post-by-%author%',
          endText: 'End of %provider% post by %author%',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this post",
          linkText: 'View original post',
          linkHref: 'embed-url',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
        width="400"
        height="400"
      />,
    );
  });

  shouldMatchSnapshot(
    'should render a notice when the provider is unsupported',
    <AmpSocialEmbed
      provider="unknown"
      id={fixtures.twitter.id}
      skipLink={{
        text: 'Skip %provider% post by %author%',
        skipToId: 'skip-%provider%-post-by-%author%',
        endText: 'End of %provider% post by %author%',
      }}
      fallback={{
        text: "Sorry but we're having trouble displaying this post",
        linkText: 'View original post',
        linkHref: 'embed-url',
        warningText: 'Warning: BBC is not responsible for third party content',
      }}
      width="400"
      height="400"
    />,
  );
});
