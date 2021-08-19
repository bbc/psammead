import React, { memo, useEffect } from 'react';
import { func, shape, string } from 'prop-types';
import styled from '@emotion/styled';
import useScript from './useScript';

const LANDSCAPE_RATIO = '56.25%';

/**
 * Apply provider-specific styles.
 */
const OEmbed = styled.div`
  ${({ styles }) => styles}
  display: flex;
  justify-content: center;
`;

/**
 * The following object declares a list of supported Canonical providers
 * and their attributes. Not all providers have the same attributes.
 */
export const providers = {
  instagram: {
    script: 'https://www.instagram.com/embed.js',
    styles: `
      .instagram-media {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        min-width: auto !important;
      }
    `,
    enrich: () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    },
  },
  twitter: {
    script: 'https://platform.twitter.com/widgets.js',
    styles: `
      .twitter-tweet {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }
    `,
    enrich: () => {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    },
    onLibraryLoad: onRender => {
      window.twttr.ready(twttr => {
        twttr.events.bind('rendered', onRender);
      });
    },
  },
  youtube: {
    styles: `
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
    enrich: () => {},
  },
};

const CanonicalEmbed = ({ provider, oEmbed, onRender }) => {
  const hasLibraryLoaded = useScript(providers[provider].script);
  useEffect(providers[provider].enrich);

  useEffect(() => {
    if (provider === 'twitter' && hasLibraryLoaded && onRender) {
      providers.twitter.onLibraryLoad(onRender);
    }
  }, [hasLibraryLoaded]);

  return (
    <OEmbed
      styles={providers[provider].styles}
      dangerouslySetInnerHTML={{ __html: oEmbed.html }}
    />
  );
};

CanonicalEmbed.propTypes = {
  provider: string.isRequired,
  oEmbed: shape({
    html: string.isRequired,
  }).isRequired,
  onRender: func,
};

CanonicalEmbed.defaultProps = {
  onRender: null,
};

export default memo(CanonicalEmbed);
