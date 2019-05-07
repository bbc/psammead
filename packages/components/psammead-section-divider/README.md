# psammead-section-divider - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-section-divider%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-section-divider%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/section-divider--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-section-divider.svg)](https://www.npmjs.com/package/@bbc/psammead-section-divider) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `@bbc/psammead-section-divider` package exports a single Section Divider component.

It uses `@bbc/psammead-styles` for colours and font family and `@bbc/gel-foundations` for spacing and for GEL Typography implemented in Styled Components.

The only provided child should be a *string*, which will be wrapped in an `<h2>` element.

## Installation

`npm install @bbc/psammead-section-divider`

## Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| children | string | no | N/A | 'Most Read' |
| dir | string | no | 'ltr' | 'rtl' |
| script    | object | yes | N/A | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }|

## Usage

```jsx
import SectionDivider from '@bbc/psammead-section-divider';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => <SectionDivider script={latin} dir="ltr">Text here</SectionDivider>;
```

Or, without a section title:

```jsx
import SectionDivider from '@bbc/psammead-section-divider';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => <SectionDivider />;
```

### When to use this component

This component should be used to divide the content in a page into logical elements.

<!-- ### When not to use this component -->

### Accessibility notes

Although this component has the appearance of a horizontal rule, it does not use an `<hr>` tag, and therefore does not have the associated semantic meaning.

This component wraps the provided child string in an `<h2>` element.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
