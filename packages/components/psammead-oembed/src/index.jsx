import React from 'react';
import { string, shape } from 'prop-types';
import DOMPurify from 'dompurify';

const DOMPURIFY_CONFIG = {
  ADD_TAGS: ['iframe'],
};

const OEmbed = ({ oEmbed }) => {
  const { html } = oEmbed;
  const sanitizedHtml = DOMPurify.sanitize(html, DOMPURIFY_CONFIG);

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

OEmbed.propTypes = {
  oEmbed: shape({
    html: string.isRequired,
  }).isRequired,
};

export default OEmbed;
