import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import {
  AMP_SCRIPT,
  AMP_NO_SCRIPT,
} from '@bbc/psammead-assets/amp-boilerplate';
import {
  F_REITH_SERIF_MEDIUM,
  F_REITH_SERIF_MEDIUM_ITALIC,
  F_REITH_SANS_REGULAR,
  F_REITH_SANS_ITALIC,
  F_REITH_SANS_BOLD,
  F_REITH_SERIF_LIGHT
} from '@bbc/psammead-styles/fonts';
import Helmet from 'react-helmet';  

withOptions({
  brandTitle: 'BBC Psammead',
  brandUrl: 'https://github.com/bbc/psammead',
  panelPosition: 'right',
  sidebarAnimations: true,
  sortStoriesByKind: true,
});

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  /* Box Sizing https://bit.ly/1A91I0J */
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${F_REITH_SERIF_MEDIUM}
  ${F_REITH_SERIF_MEDIUM_ITALIC}
  ${F_REITH_SANS_REGULAR}
  ${F_REITH_SANS_ITALIC}
  ${F_REITH_SANS_BOLD}
  ${F_REITH_SERIF_LIGHT}
`;

addDecorator(story => (
  <Fragment>
    <GlobalStyle />
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
}

configure(loadAllStories, module);
