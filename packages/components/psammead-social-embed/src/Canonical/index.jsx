import React, { memo } from 'react';
import Helmet from 'react-helmet';
import { shape, string } from 'prop-types';
import loadable from '@loadable/component';

const OEmbed = loadable(() => import('@bbc/psammead-oembed'), {
  fallback: <p>Loading&hellip;</p>,
});

export const providers = {
  instagram: {
    script: 'https://www.instagram.com/embed.js',
  },
  twitter: {
    script: 'https://platform.twitter.com/widgets.js',
  },
  youtube: {},
};

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

export default memo(CanonicalEmbed);
