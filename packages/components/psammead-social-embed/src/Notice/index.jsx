import React from 'react';
import { string } from 'prop-types';

const Notice = ({ text, linkText, linkHref, warningText }) => (
  <div>
    <p>{text}</p>
    <a id="link" href={linkHref}>
      {linkText}
    </a>
    <small aria-describedby="link">{warningText}</small>
  </div>
);

Notice.defaultProps = {
  warningText: null,
};

Notice.propTypes = {
  text: string.isRequired,
  linkText: string.isRequired,
  linkHref: string.isRequired,
  warningText: string,
};

export default Notice;
