<!-- prettier-ignore -->
# psammead-grid - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-grid%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-grid%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-grid)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-grid) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-grid)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-grid&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/grid--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-grid.svg)](https://www.npmjs.com/package/@bbc/psammead-grid) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description


## Installation

`npm install @bbc/psammead-grid`

## Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
|  |  |  | | |

## Usage

### When to use this component

**FAQs**
- When should I use the `wrapper` prop?
  - On an outer Grid item. It defines the grid, using the `columns` prop values to define how many columns to have.
  - It should be used in any case where you're defining a new nested grid. 
- When should I use the `columns` prop?
  - This should always be defined. For a Grid element that is not a `wrapper`, it's the number of columns it should span.
- When should I use the `startOffset` prop?
  - This is `grid-column-start` attribute. If you don't pass it in, the value defaults to 1, the start of the grid.

<!-- ### When not to use this component -->

### Accessibility notes

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
