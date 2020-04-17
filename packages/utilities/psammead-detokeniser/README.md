# psammead-detokeniser - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-detokeniser%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-detokeniser%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-detokeniser)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-detokeniser) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-detokeniser)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-detokeniser&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/detokeniser--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-detokeniser.svg)](https://www.npmjs.com/package/@bbc/psammead-detokeniser) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `Detokeniser` utility replaces % delimiter with spaces to be fed into a dictionary.

## Installation

```jsx
npm install @bbc/psammead-detokeniser --save
```

## Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| text | string | yes | N/A | `'Foo %token%'` |
| dictionary | object | yes | N/A | { `'%token%': 'Bar'` } |

## Usage

<!-- Description of the utility usage -->

```
import Detokeniser from "@bbc/psammead-detokeniser"
```

### When to use this utility

<!-- Description of the where the utility can be used -->

### When not to use this utility

<!-- Description of the where the utility shouldn't can be used -->

### Accessibility notes

<!-- Information about accessibility for this utility -->

### Roadmap

<!-- Known future changes of the utility -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new utilities, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
