import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import { CanonicalSocialEmbed, AmpSocialEmbed } from './index';

storiesOf('Components|SocialEmbed', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Default',
    () => (
      <CanonicalSocialEmbed
        provider="instagram"
        oEmbed={{ html: '<h1>Content.</h1>' }}
        skipLink={{
          text: 'Skip %p post by %u',
          endText: 'End of %p post by %u',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this post",
          linkText: 'View original post',
          linkHref: 'embed-url',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
      />
    ),
    {
      notes,
    },
  )
  .add(
    'AMP',
    () => (
      <AmpSocialEmbed
        provider="instagram"
        id="01234"
        skipLink={{
          text: 'Skip %p post by %u',
          endText: 'End of %p post by %u',
        }}
        fallback={{
          text: "Sorry but we're having trouble displaying this post",
          linkText: 'View original post',
          linkHref: 'embed-url',
          warningText:
            'Warning: BBC is not responsible for third party content',
        }}
      />
    ),
    {
      notes,
    },
  );
