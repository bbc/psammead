import React from 'react';
import { string, shape } from 'prop-types';

import CanonicalSocial from './Canonical';
import AmpSocial from './Amp';
import Notice from './Notice';
import isSupportedProvider from './utils';

import canonicalProviders from './Canonical/providers.json';
import ampProviders from './Amp/providers.json';

/**
 * Returns a valid Social Embed component for Canonical pages.
 * @param {Object} props
 */
export const CanonicalSocialEmbed = props => {
  const { provider, oEmbed, fallback } = props;
  return isSupportedProvider(provider, canonicalProviders) && oEmbed ? (
    <CanonicalSocial {...props} />
  ) : (
    <Notice provider={provider} {...fallback} />
  );
};

/**
 * Returns a valid Social Embed component for AMP pages.
 * @param {Object} props
 */
export const AmpSocialEmbed = props => {
  const { provider, fallback } = props;
  return isSupportedProvider(provider, ampProviders) ? (
    <AmpSocial {...props} />
  ) : (
    <Notice provider={provider} {...fallback} />
  );
};

const sharedPropTypes = {
  provider: string.isRequired,
  fallback: shape({
    text: string.isRequired,
    linkText: string.isRequired,
    linkHref: string.isRequired,
    warningText: string,
  }).isRequired,
};

CanonicalSocialEmbed.defaultProps = {
  oEmbed: null,
};

CanonicalSocialEmbed.propTypes = {
  oEmbed: shape({}),
  ...sharedPropTypes,
};

AmpSocialEmbed.propTypes = {
  ...sharedPropTypes,
};
