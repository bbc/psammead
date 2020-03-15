import React, { memo } from 'react';
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

// 'CanonicalEmbed' renders the same result given the same props, so
// we can wrap it in a call to React.memo for a performance boost in
// some cases by memoizing the result. This means that React will
// skip rendering the component, and reuse the last rendered result.
export default memo(CanonicalEmbed);
