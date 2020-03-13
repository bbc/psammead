import React from 'react';
import { string } from 'prop-types';
import { detokenise, toProviderName } from '../utilities';

const Notice = ({ provider, text, linkText, linkHref, warningText }) => {
  const dictionary = {
    '%Provider%': toProviderName(provider),
    '%provider%': provider,
  };
  return (
    <div>
      <p>{detokenise(text, dictionary)}</p>
      <a id="link" href={linkHref}>
        {detokenise(linkText, dictionary)}
      </a>
      <small aria-describedby="link">{warningText}</small>
    </div>
  );
};

Notice.defaultProps = {
  warningText: null,
};

Notice.propTypes = {
  provider: string.isRequired,
  text: string.isRequired,
  linkText: string.isRequired,
  linkHref: string.isRequired,
  warningText: string,
};

export default Notice;
