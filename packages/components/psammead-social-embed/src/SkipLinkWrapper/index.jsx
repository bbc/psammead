import React from 'react';
import { node, string } from 'prop-types';
import { detokenise, toProviderName } from '../utilities';

const SkipLinkWrapper = ({ provider, skipToId, text, children, endText }) => {
  const dictionary = {
    '%Provider%': toProviderName(provider),
    '%provider%': provider,
  };
  return (
    <div>
      <a href={`#${detokenise(skipToId, dictionary)}`}>
        {detokenise(text, dictionary)}
      </a>
      {children}
      <p id={skipToId}>{detokenise(endText, dictionary)}</p>
    </div>
  );
};

SkipLinkWrapper.propTypes = {
  provider: string.isRequired,
  skipToId: string.isRequired,
  children: node.isRequired,
  text: string.isRequired,
  endText: string.isRequired,
};

export default SkipLinkWrapper;
