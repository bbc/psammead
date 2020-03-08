import React from 'react';
import { string } from 'prop-types';

/**
 * withSkipLink is a higher-order component. It wraps a social embed
 * component in the necessary container to make it skippable.
 * @param {function} SocialEmbed A social embed component.
 */

const withSkiplink = SocialEmbed => {
  const SkippableSocialEmbed = props => (
    <div>
      <a href="/">Skip</a>
      <SocialEmbed {...props} />
    </div>
  );

  SkippableSocialEmbed.propTypes = {
    provider: string.isRequired,
  };

  return SkippableSocialEmbed;
};

export default withSkiplink;
