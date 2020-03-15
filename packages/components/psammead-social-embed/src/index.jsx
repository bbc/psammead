import React from 'react';
import { shape, string } from 'prop-types';

import SkipLinkWrapper from './SkipLinkWrapper';
import Notice from './Notice';

import CanonicalEmbed, { providers } from './Canonical';

import AmpEmbed from './Amp';
import { scripts, Elements } from './Amp/Framework';

/**
 * Returns a Social Embed component for use on Canonical pages.
 * @param {Object} props
 */
export const CanonicalSocialEmbed = ({
  provider,
  service,
  skipLink,
  oEmbed,
  fallback,
}) => {
  const isSupportedProvider = Object.keys(providers).includes(provider);
  return isSupportedProvider && oEmbed ? (
    <SkipLinkWrapper service={service} provider={provider} {...skipLink}>
      <CanonicalEmbed provider={provider} oEmbed={oEmbed} />
    </SkipLinkWrapper>
  ) : (
    <Notice service={service} provider={provider} {...fallback} />
  );
};

/**
 * Returns a Social Embed component for use on AMP pages.
 * @param {Object} props
 */
export const AmpSocialEmbed = ({
  provider,
  service,
  skipLink,
  id,
  width,
  height,
  fallback,
}) => {
  const script = scripts[provider];
  const Element = Elements[provider];
  return script && Element ? (
    <SkipLinkWrapper service={service} provider={provider} {...skipLink}>
      <AmpEmbed
        script={script}
        render={() => <Element id={id} height={height} width={width} />}
      />
    </SkipLinkWrapper>
  ) : (
    <Notice service={service} provider={provider} {...fallback} />
  );
};

const sharedPropTypes = {
  provider: string.isRequired,
  service: string.isRequired,
  skipLink: shape({
    text: string.isRequired,
    skipToId: string.isRequired,
    endText: string.isRequired,
  }).isRequired,
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
  ...sharedPropTypes,
  oEmbed: shape({
    html: string.isRequired,
  }),
};

AmpSocialEmbed.propTypes = {
  ...sharedPropTypes,
  id: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};
