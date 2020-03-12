import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { CanonicalSocialEmbed, AmpSocialEmbed } from './index';

describe('CanonicalSocialEmbed', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <CanonicalSocialEmbed
      provider="instagram"
      oEmbed={{ html: '<h1>Content.</h1>' }}
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
  shouldMatchSnapshot(
    'should render correctly',
    <AmpSocialEmbed
      provider="instagram"
      id="01234"
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
