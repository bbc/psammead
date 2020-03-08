import React from 'react';
import { string } from 'prop-types';

import Notice from './Notice';

/**
 * withFallback is a higher-order component. It returns SocialEmbed
 * if the social media provider is supported or Notice if it's not.
 * @param {function} SocialEmbed A social embed component.
 * @param {object} providers An object containing supported providers.
 */

const withFallback = (SocialEmbed, providers) => {
  const Embed = ({ provider, ...props }) => {
    const isSupportedProvider = Object.keys(providers).includes(provider);
    return isSupportedProvider ? (
      <SocialEmbed {...props} />
    ) : (
      <Notice {...props} />
    );
  };

  Embed.propTypes = {
    provider: string.isRequired,
  };

  return Embed;
};

export default withFallback;
