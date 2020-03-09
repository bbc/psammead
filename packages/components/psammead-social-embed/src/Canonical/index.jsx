import React from 'react';
import { shape, string } from 'prop-types';
import OEmbed from '@bbc/psammead-oembed';

import providers from './providers.json';
import Notice from '../Notice';
import withSkipLink from '../withSkipLink';

const CanonicalSocialEmbed = withSkipLink(({ oEmbed }) => (
  <OEmbed oEmbed={oEmbed} />
));

const CanonicalEmbed = ({ provider, oEmbed, fallback, ...props }) => {
  const isSupportedProvider = Object.keys(providers).includes(provider);
  return isSupportedProvider && oEmbed ? (
    <CanonicalSocialEmbed provider={provider} oEmbed={oEmbed} {...props} />
  ) : (
    <Notice {...fallback} />
  );
};

CanonicalEmbed.defaultProps = {
  oEmbed: null,
};

CanonicalEmbed.propTypes = {
  provider: string.isRequired,
  oEmbed: shape({
    html: string.isRequired,
  }),
  fallback: shape({
    text: string.isRequired,
    linkText: string.isRequired,
    linkHref: string.isRequired,
    warningText: string,
  }).isRequired,
};

export default CanonicalEmbed;
