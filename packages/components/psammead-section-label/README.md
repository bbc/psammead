# ⛔️ This is an alpha component  ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-section-label - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-section-label%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-section-label%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/section-label--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-section-label.svg)](https://www.npmjs.com/package/@bbc/psammead-section-label) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `@bbc/psammead-section-label` package exports one component - a Section Label.

For colours and font family it uses `@bbc/psammead-styles` and `@bbc/gel-foundations` for spacing and GEL Typography implemented in Styled Components.

The only provided child should be a *string*, which will be wrapped in an `<h2>` element by the component – (see [the Accessibility notes](#accessibility-notes)).

## Installation

`npm install @bbc/psammead-section-label`

## Props

Both components use the same props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| bar | boolean | no | `true` | `false` |
| children | string | no | N/A | `'Most Read'` |
| dir | string | no | `'ltr'` | `'rtl'` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36' }, groupD: { fontSize: '44', lineHeight: '48' } }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24' }, groupB: { fontSize: '24', lineHeight: '28' }, groupD: { fontSize: '32', lineHeight: '36' } } }` |

## Usage

```jsx
import { SectionLabel } from '@bbc/psammead-section-label';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => <SectionLabel script={latin} dir="ltr">Text here</SectionLabel>;
```

Or, without a section title:

```jsx
import { SectionLabel } from '@bbc/psammead-section-label';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => <SectionLabel />;
```

Or, without a horizontal bar:

```jsx
import { SectionLabelWithoutBar } from '@bbc/psammead-section-label';
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingComponent = () => <SectionLabel script={latin} dir="ltr" bar={false}>Text here</SectionLabel>;
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
