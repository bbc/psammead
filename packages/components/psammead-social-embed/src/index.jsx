import React from 'react';
import { shape, string } from 'prop-types';

import SkipLinkWrapper from './SkipLinkWrapper';
import CaptionWrapper from './CaptionWrapper';
import Notice from './Notice';

import CanonicalEmbed, { providers } from './Canonical';
import AmpElements from './Amp';

/**
 * Returns a social embed or fallback component for use on Canonical pages.
 * @param {Object} props
 */
export const CanonicalSocialEmbed = ({
  provider,
  service,
  skipLink,
  oEmbed,
  caption,
  fallback,
}) => {
  const isSupportedProvider = Object.keys(providers).includes(provider);
  const hasCaption = caption && caption.text;

  const renderCanonicalContent = () => {
    if (isSupportedProvider && oEmbed && hasCaption)
      return (
        <CaptionWrapper service={service} {...caption}>
          <CanonicalEmbed provider={provider} oEmbed={oEmbed} />
        </CaptionWrapper>
      );

    if (isSupportedProvider && oEmbed)
      return <CanonicalEmbed provider={provider} oEmbed={oEmbed} />;

    return <Notice service={service} provider={provider} {...fallback} />;
  };

  return (
    <SkipLinkWrapper service={service} provider={provider} {...skipLink}>
      {renderCanonicalContent()}
    </SkipLinkWrapper>
  );
};

/**
 * Returns a social embed or fallback component for use on AMP pages.
 * @param {Object} props
 */
export const AmpSocialEmbed = ({
  provider,
  service,
  skipLink,
  id,
  caption,
  fallback,
}) => {
  const AmpElement = AmpElements[provider];
  const hasCaption = caption && caption.text;

  const renderAmpContent = () => {
    if (AmpElement && hasCaption)
      return (
        <CaptionWrapper service={service} {...caption}>
          <AmpElement id={id} />
        </CaptionWrapper>
      );

    if (AmpElement) return <AmpElement id={id} />;

    return <Notice service={service} provider={provider} {...fallback} />;
  };

  return (
    <SkipLinkWrapper service={service} provider={provider} {...skipLink}>
      {renderAmpContent()}
    </SkipLinkWrapper>
  );
};

const sharedPropTypes = {
  provider: string.isRequired,
  service: string.isRequired,
  skipLink: shape({
    text: string.isRequired,
    endTextId: string.isRequired,
    endTextVisuallyHidden: string.isRequired,
  }).isRequired,
  caption: shape({
    textPrefixVisuallyHidden: string,
    text: string.isRequired,
  }),
  fallback: shape({
    text: string.isRequired,
    linkText: string.isRequired,
    linkTextSuffixVisuallyHidden: string,
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
};
