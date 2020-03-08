import React from 'react';
import { string } from 'prop-types';
import OEmbed from '@bbc/psammead-oembed';

const Canonical = ({ id }) => {
  const oEmbed = {
    html: `<p>${id}</p>`,
  };
  return <OEmbed oEmbed={oEmbed} />;
};

Canonical.propTypes = {
  id: string.isRequired,
};

export default Canonical;
