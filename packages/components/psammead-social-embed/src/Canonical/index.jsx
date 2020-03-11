import React from 'react';
import { shape, string } from 'prop-types';
import OEmbed from '@bbc/psammead-oembed';
import withSkipLink from '../withSkipLink';

const CanonicalSocial = ({ oEmbed }) => <OEmbed oEmbed={oEmbed} />;

CanonicalSocial.propTypes = {
  oEmbed: shape({
    html: string.isRequired,
  }).isRequired,
};

export default withSkipLink(CanonicalSocial);
