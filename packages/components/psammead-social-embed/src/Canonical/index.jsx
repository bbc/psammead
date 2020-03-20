import React, { memo } from 'react';
import Helmet from 'react-helmet';
import { shape, string } from 'prop-types';
import loadable from '@loadable/component';
import styled, { css } from 'styled-components';

const OEmbed = loadable(() => import('@bbc/psammead-oembed'), {
  fallback: <p>Loading&hellip;</p>,
});

const LANDSCAPE_RATIO = '56.25%';

/**
 * Apply provider-specific styles.
 */
const StyledOEmbed = styled(OEmbed)`
  ${({ styles }) => styles}
`;

/**
 * The following object declares a list of supported Canonical providers and
 * their attributes. They don't all require an external script to be loaded.
 */
export const providers = {
  instagram: {
    script: 'https://www.instagram.com/embed.js',
    styles: null,
  },
  twitter: {
    script: 'https://platform.twitter.com/widgets.js',
    styles: null,
  },
  youtube: {
    script: null,
    styles: css`
      padding-top: ${LANDSCAPE_RATIO};
      position: relative;
      overflow: hidden;

      > iframe {
        border: none;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    `,
  },
};

const CanonicalEmbed = ({ provider, oEmbed }) => (
  <>
    {providers[provider].script && (
      <Helmet>
        <script async src={providers[provider].script} />
      </Helmet>
    )}
    <StyledOEmbed styles={providers[provider].styles} oEmbed={oEmbed} />
  </>
);

CanonicalEmbed.propTypes = {
  provider: string.isRequired,
  oEmbed: shape({
    html: string.isRequired,
  }).isRequired,
};

export default memo(CanonicalEmbed);
