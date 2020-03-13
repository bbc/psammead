import React from 'react';
import Helmet from 'react-helmet';
import { shape, string } from 'prop-types';
import OEmbed from '@bbc/psammead-oembed';

import SkipLinkWrapper from '../SkipLinkWrapper';
import Notice from '../Notice';

const providers = {
  instagram: { script: 'https://www.instagram.com/embed.js' },
  twitter: { script: 'https://platform.twitter.com/widgets.js' },
  youtube: {},
};

const CanonicalEmbed = ({ provider, skipLink, oEmbed, fallback }) => {
  const isSupportedProvider = Object.keys(providers).includes(provider);
  return isSupportedProvider && oEmbed ? (
    <SkipLinkWrapper provider={provider} {...skipLink}>
      {providers[provider].script && (
        <Helmet>
          <script async src={providers[provider].script} />
        </Helmet>
      )}
      <OEmbed oEmbed={oEmbed} />
    </SkipLinkWrapper>
  ) : (
    <Notice provider={provider} {...fallback} />
  );
};

CanonicalEmbed.defaultProps = {
  oEmbed: null,
};

CanonicalEmbed.propTypes = {
  provider: string.isRequired,
  skipLink: shape({
    text: string.isRequired,
    skipToId: string.isRequired,
    endText: string.isRequired,
  }).isRequired,
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
