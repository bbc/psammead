import React from 'react';
import Helmet from 'react-helmet';
import { shape, string } from 'prop-types';
import OEmbed from '@bbc/psammead-oembed';

import providers from './providers.json';

const CanonicalEmbed = ({ provider, oEmbed }) => (
  <>
    {providers[provider].script && (
      <Helmet>
        <script async src={providers[provider].script} />
      </Helmet>
    )}
    <OEmbed oEmbed={oEmbed} />
  </>
);

CanonicalEmbed.propTypes = {
  provider: string.isRequired,
  oEmbed: shape({
    html: string.isRequired,
  }).isRequired,
};

export default CanonicalEmbed;
