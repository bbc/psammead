# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-leading-story-promo - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-leading-story-promo%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-leading-story-promo%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-leading-story-promo)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-leading-story-promo) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-leading-story-promo)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-leading-story-promo&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/leading-story-promo--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-leading-story-promo.svg)](https://www.npmjs.com/package/@bbc/psammead-leading-story-promo) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `LeadingStoryPromo` componentis designed to be used on 'index' pages for feature - similar to `@bbc/psammead-story-promo`, but for featured stories. It supports having info on the left with an image on the right. This info would be a headline, text summary and timestamp.

## Installation

`npm install @bbc/psammead-leading-story-promo`

## Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| image     | node | Yes      | N/A     | `<img />` |
| info      | node | Yes      | N/A     | `<h2>Title</h2>` |

## Usage

This component relies on `@bbc/psammead-grid` to achieve the positioning on the info and image. 

```jsx
import LeadingStoryPromo from '@bbc/psammead-leading-story-promo';

const WrappingComponent = () => (
  <div>
    <LeadingStoryPromo image={image} info={info} />
  </div>
);
```

### When to use this component

The `LeadingStoryPromo` component is designed to be used within a link element to allow the user to navigate to the featured story on another page.

### When not to use this component

<!-- Description of the where the component shouldn't be used -->

### Accessibility notes
This component is still in its initial alpha stages, and requires a full and extensive accessibility review.

### Roadmap

<!-- Known future changes of the component -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
