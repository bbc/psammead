import React, { Fragment } from 'react';
import {
  AMP_SCRIPT,
  AMP_NO_SCRIPT,
} from '@bbc/psammead-assets/amp-boilerplate';

import { Helmet } from 'react-helmet';

const ampDecorator = story => (
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

export default ampDecorator;
