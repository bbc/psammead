# psammead-promo-separator - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-promo-separator%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-promo-separator%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/promo-separator/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/promo-separator--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-promo-separator.svg)](https://www.npmjs.com/package/@bbc/psammead-promo-separator) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `@bbc/psammead-promo-separator` package exports a single separator line component.

It uses `@bbc/psammead-styles` for colours and `@bbc/gel-foundations` for spacing implemented in Styled Components.

## Installation

`npm install @bbc/psammead-promo-separator`

## Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| No props. |      |          |         |         |

## Usage

```jsx
import PromoSeparator from '@bbc/psammead-promo-separator';

const WrappingComponent = () => <PromoSeparator />;
```

### When to use this component

The `PromoSeparator` component's intended use is to separate content, such as in-between story promos on index pages.

<!-- ### When not to use this component -->

### Accessibility notes

Although this component has the appearance of a horizontal rule, it does not use an `<hr>` tag, and therefore does not have the associated semantic meaning.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
