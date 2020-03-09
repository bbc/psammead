import React from 'react';
import { string, shape } from 'prop-types';
import Notice from '../Notice';
import providers from './providers.json';
import withSkipLink from '../withSkipLink';

const AmpSocialEmbed = withSkipLink(({ id }) => <h1>{id}</h1>);

const AmpEmbed = ({ provider, fallback, ...props }) => {
  const isSupportedProvider = Object.keys(providers).includes(provider);
  return isSupportedProvider ? (
    <AmpSocialEmbed provider={provider} {...props} />
  ) : (
    <Notice {...fallback} />
  );
};

AmpEmbed.propTypes = {
  provider: string.isRequired,
  fallback: shape({
    text: string.isRequired,
    linkText: string.isRequired,
    linkHref: string.isRequired,
    warningText: string,
  }).isRequired,
};

export default AmpEmbed;
