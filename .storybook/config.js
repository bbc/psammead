import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import {
  AMP_SCRIPT,
  AMP_NO_SCRIPT,
} from '@bbc/psammead-assets/amp-boilerplate';
import * as fontFaces from '@bbc/psammead-styles/fonts';
import GlobalStyles from '@bbc/psammead-styles/global-styles';

import { Helmet } from 'react-helmet';

const theme = create({
  base: 'light',
  brandTitle: 'BBC Psammead',
  brandUrl: 'https://github.com/bbc/psammead',
  brandImage:
    'https://user-images.githubusercontent.com/11341355/54079666-af202780-42d8-11e9-9108-e47ea27fddc5.png',
});

addParameters({
  options: {
    panelPosition: 'right',
    sidebarAnimations: true,
    theme,
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
});

const fontPathMap = [
  { prefix: 'F_REITH', path: 'fonts/Reith/' },
  { prefix: 'F_NASSIM_ARABIC', path: 'fonts/Nassim/Arabic/' },
  { prefix: 'F_NASSIM_PASHTO', path: 'fonts/Nassim/Pashto/' },
  { prefix: 'F_NASSIM_PERSIAN', path: 'fonts/Nassim/Persian/' },
  { prefix: 'F_NASSIM_URDU', path: 'fonts/Nassim/Urdu/' },
  { prefix: 'F_ISKOOLA_POTA_BBC', path: 'fonts/IskoolaPota/' },
  { prefix: 'F_LATHA', path: 'fonts/Latha/' },
  { prefix: 'F_MALLANNA', path: 'fonts/Mallanna/' },
  { prefix: 'F_NOTO_SANS_ETHIOPIC', path: 'fonts/NotoSansEthiopic/' },
  { prefix: 'F_PADAUK', path: 'fonts/Padauk/' },
  { prefix: 'F_SHONAR_BANGLA', path: 'fonts/ShonarBangla/' },
];

addDecorator(story => (
  <Fragment>
    <GlobalStyles
      fonts={Object.values(fontFaces).map(fontFace => {
        const fontMap =
          fontPathMap.find(map => fontFace.name.includes(map.prefix)) ||
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

function loadAllStories() {
  require('glob-loader!./stories.pattern');
  addDecorator(withA11y);
}

configure(loadAllStories, module);
