# psammead-numbered-list - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-numbered-list%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-numbered-list%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-numbered-list)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-numbered-list) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-numbered-list)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-numbered-list&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/numbered-list--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-numbered-list.svg)](https://www.npmjs.com/package/@bbc/psammead-numbered-list) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

## Description

The `NumberedList` component is a styled numbered (ordered) list that works for right-to-left and left-to-right languages.


## Installation

```jsx
npm install @bbc/psammead-numbered-list
```

## Props


| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| dir | string | No | `'ltr'` | One of `'rtl'` `'ltr'` |
| script | script | Yes | N/A | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, } |
| service | string | Yes | N/A | `'news'` |

## Usage

Use `NumberedList` in place of a `ol` element with required props and a `NumberedListItem` in place of an `li`.

```
import NumberedList from "@bbc/psammead-numbered-list"
```

### When to use this component

`NumberedList`s can be used wherever you need a standard GEL ordered list.

### When not to use this component

It does not support translated numerals

### Accessibility notes

<!-- Information about accessibility for this component -->

### Roadmap

<!-- Known future changes of the component -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
