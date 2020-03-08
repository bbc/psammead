import React from 'react';
import { string, shape } from 'prop-types';

import Notice from './Notice';

/**
 * withFallback is a higher-order component. It returns SocialEmbed
 * if the social media provider is supported or Notice if it's not.
 * @param {function} SocialEmbed A social embed component.
 * @param {object} providers An object containing supported providers.
 */

const withFallback = (SocialEmbed, providers) => {
  const Embed = ({ provider, fallback, ...props }) => {
    const isSupportedProvider = Object.keys(providers).includes(provider);
    return isSupportedProvider ? (
      <SocialEmbed {...props} />
    ) : (
      <Notice {...fallback} {...props} />
    );
  };

  Embed.defaultProps = {};

  Embed.propTypes = {
    provider: string.isRequired,
    fallback: shape({
      text: string.isRequired,
      linkText: string.isRequired,
      linkHref: string.isRequired,
      warningText: string,
    }).isRequired,
  };

  return Embed;
};

export default withFallback;
