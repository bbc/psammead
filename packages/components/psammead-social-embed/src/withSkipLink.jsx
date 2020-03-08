import React from 'react';
import { string, shape } from 'prop-types';

/**
 * withSkipLink is a higher-order component. It wraps a social embed
 * component in the necessary container to make it skippable.
 * @param {function} SocialEmbed A social embed component.
 */

const withSkipLink = SocialEmbed => {
  const SkippableSocialEmbed = ({ skipLink, ...props }) => {
    const { text, endText } = skipLink;
    const id = text
      .trim()
      .toLowerCase()
      .replace(/ /g, '-');
    return (
      <div>
        <a href={`#${id}`}>{text}</a>
        <SocialEmbed {...props} />
        <p id={id}>{endText}</p>
      </div>
    );
  };

  SkippableSocialEmbed.propTypes = {
    skipLink: shape({
      text: string.isRequired,
      endText: string.isRequired,
    }).isRequired,
  };

  return SkippableSocialEmbed;
};

export default withSkipLink;
