import React from 'react';
import Helmet from 'react-helmet';
import { shape, string } from 'prop-types';
import loadable from '@loadable/component';

import providers from './providers.json';

const OEmbed = loadable(() => import('@bbc/psammead-oembed'), {
  fallback: <p>Loading&hellip;</p>,
});

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
