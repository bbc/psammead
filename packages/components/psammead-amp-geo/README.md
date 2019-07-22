# psammead-amp-geo - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-amp-geo%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-amp-geo%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/figure--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-amp-geo.svg)](https://www.npmjs.com/package/@bbc/psammead-amp-geo) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `psammead-amp-geo` component is an `<amp-geo>` element to be used for AMP pages. It has a defined set of ISO country groups and we set for our privacy and cookie banners on AMP pages. 

## Installation

`npm install @bbc/psammead-amp-geo`

## Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| No props. |      |          |         |         |

## Usage

When using `psammead-amp-geo`, you should firstly include this script in the head of the page:

```jsx
<script
  async
  custom-element="amp-geo"
  src="https://cdn.ampproject.org/v0/amp-geo-0.1.js"
/>
```
Then you can import the AmpGeo component & use it in conjunction with `<amp-consent>` 

```jsx
import AmpGeo from '@bbc/psammead-amp-geo';


const Wrapper = () => (
  <>
    <AmpGeo />
      <amp-consent id="uniqueId" layout="nodisplay">
      <script
        type="application/json"
        >
        {
        consents: {
          'user-consent': {
            promptIfUnknownForGeoGroup: 'eea',
            promptUI: 'promptId',
          },
        },
      }
      </script>
      </amp-consent>
  </>
);
```

### When to use this component

Use this component only on AMP pages when you need to have geo-location constrained to a specific list of countries in the EEA, also including Channel Islands and overseas territories.

<!-- ### When not to use this component -->

### Accessibility notes

The `psammead-amp-geo` is an `<amp-geo>` element.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
