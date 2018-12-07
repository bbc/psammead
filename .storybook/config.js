import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

// Option defaults:
setOptions({
  name: 'Psammead',
  url: 'https:github.com/bbc/carl',
  addonPanelInRight: true,
  sidebarAnimations: true,
});

function loadStories() {
  require('glob-loader!./stories.pattern');
}

const GlobalStyle = reateGlobalStyle`
  ${styledNormalize}

  /* Box Sizing https://bit.ly/1A91I0J */
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  @font-face {
    font-display: optional;
    font-family: ReithSansNewsRegular;
    font-style: normal;
    font-weight: 400;
    src: url('https://gel.files.bbci.co.uk/r2.302/BBCReithSans_W_Rg.woff2') format('woff2'), url('https://gel.files.bbci.co.uk/r2.302/BBCReithSans_W_Rg.woff') format('woff');
  }
  @font-face {
    font-display: optional;
    font-family: ReithSerifNewsMedium;
    font-style: normal;
    font-weight: 600;
    src: url('https://gel.files.bbci.co.uk/r2.302/BBCReithSerif_W_Md.woff2') format('woff2'), url('https://gel.files.bbci.co.uk/r2.302/BBCReithSerif_W_Md.woff') format('woff');
  }
`;

addDecorator(story => (
  <Fragment>
    <GlobalStyle />
    {story()}
  </Fragment>
));

configure(loadStories, module);
