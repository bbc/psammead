import React from 'react';
import { shape, string } from 'prop-types';
import OEmbed from '@bbc/psammead-oembed';

const Canonical = ({ oEmbed }) => {
  return <OEmbed oEmbed={oEmbed} />;
};

Canonical.propTypes = {
  oEmbed: shape({
    html: string.isRequired,
  }).isRequired,
};

export default Canonical;
