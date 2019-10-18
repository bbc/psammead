/*
  AMP Boilerplate Code https://github.com/ampproject/amphtml/blob/master/spec/amp-boilerplate.md
*/
import React from 'react';

export const AMP_SCRIPT = `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`;
export const AMP_NO_SCRIPT = `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`;

export const AMP_JS = <script async src="https://cdn.ampproject.org/v0.js" />;
export const AMP_GEO_JS = (
  <script
    async
    custom-element="amp-geo"
    src="https://cdn.ampproject.org/v0/amp-geo-0.1.js"
  />
);
export const AMP_CONSENT_JS = (
  <script
    async
    custom-element="amp-consent"
    src="https://cdn.ampproject.org/v0/amp-consent-0.1.js"
  />
);
export const AMP_ANALYTICS_JS = (
  <script
    async
    custom-element="amp-analytics"
    src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
  />
);
