import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import {
  AMP_SCRIPT,
  AMP_NO_SCRIPT,
} from '@bbc/psammead-assets/amp-boilerplate';
import * as fontFaces from '@bbc/psammead-styles/fonts';
import { themes } from '@bbc/psammead-storybook-helpers';
import GlobalStyles from '@bbc/psammead-styles/global-styles';
import './storybook.css';

// New locales
import '@bbc/psammead-locales/moment/am';
import '@bbc/psammead-locales/moment/ha';
import '@bbc/psammead-locales/moment/ig';
import '@bbc/psammead-locales/moment/om';
import '@bbc/psammead-locales/moment/pcm';
import '@bbc/psammead-locales/moment/ps';
import '@bbc/psammead-locales/moment/rw';
import '@bbc/psammead-locales/moment/so';
import '@bbc/psammead-locales/moment/ti';

// Updated locales
import '@bbc/psammead-locales/moment/ar';
import '@bbc/psammead-locales/moment/az';
import '@bbc/psammead-locales/moment/bn';
import '@bbc/psammead-locales/moment/es';
import '@bbc/psammead-locales/moment/gu';
import '@bbc/psammead-locales/moment/hi';
import '@bbc/psammead-locales/moment/ky';
import '@bbc/psammead-locales/moment/mr';
import '@bbc/psammead-locales/moment/ne';
import '@bbc/psammead-locales/moment/pa-in';
import '@bbc/psammead-locales/moment/pt-br';
import '@bbc/psammead-locales/moment/ru';
import '@bbc/psammead-locales/moment/si';
import '@bbc/psammead-locales/moment/sr';
import '@bbc/psammead-locales/moment/sr-cyrl';
import '@bbc/psammead-locales/moment/sw';
import '@bbc/psammead-locales/moment/ta';
import '@bbc/psammead-locales/moment/th';
import '@bbc/psammead-locales/moment/uk';
import '@bbc/psammead-locales/moment/ur';
import '@bbc/psammead-locales/moment/uz';
import '@bbc/psammead-locales/moment/yo';

import { Helmet } from 'react-helmet';

export const parameters = {
  passArgsFirst: false,
  options: {
    panelPosition: 'right',
    sidebarAnimations: true,
    theme: themes.light,
  },
  a11y: {
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
      },
      iframes: true,
    },
  },
  /*
  docs: {
    container: DocsContainer,
    page: DocsPage,
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
  */
};

const fontPathMap = [
  { prefix: 'F_ISKOOLA_POTA_BBC', path: 'fonts/IskoolaPota/' },
  { prefix: 'F_LATHA', path: 'fonts/Latha/' },
  { prefix: 'F_MALLANNA', path: 'fonts/Mallanna/' },
  { prefix: 'F_NOTO_SANS_ETHIOPIC', path: 'fonts/NotoSansEthiopic/' },
  { prefix: 'F_PADAUK', path: 'fonts/Padauk/' },
  { prefix: 'F_REITH_QALAM', path: 'fonts/ReithQalam/' },
  { prefix: 'F_REITH_SANS', path: 'fonts/Reith/' },
  { prefix: 'F_REITH_SERIF', path: 'fonts/Reith/' },
  { prefix: 'F_SHONAR_BANGLA', path: 'fonts/ShonarBangla/' },
];

addDecorator(story => (
  <Fragment>
    <GlobalStyles
      fonts={Object.values(fontFaces).map(fontFace => {
        const fontMap =
          fontPathMap.find(map => fontFace.name.startsWith(map.prefix)) ||
          fontPathMap[0];
        return fontFace(fontMap.path);
      })}
    />
    {story()}
  </Fragment>
));

export const ampDecorator = story => (
  <Fragment>
    <Helmet htmlAttributes={{ amp: '' }}>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,minimum-scale=1" />
      <link rel="canonical" href="https://bbc.com" />
      <style amp-boilerplate="">{AMP_SCRIPT}</style>
      <noscript>{`<style amp-boilerplate="">${AMP_NO_SCRIPT}</style>`}</noscript>
      <script async src="https://cdn.ampproject.org/v0.js" />
    </Helmet>
    {story()}
  </Fragment>
);
