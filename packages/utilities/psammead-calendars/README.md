# psammead-calendars - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-calendars%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-calendars%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-calendars)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-calendars) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-calendars)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-calendars&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/moment-calendars--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-calendars.svg)](https://www.npmjs.com/package/@bbc/psammead-calendars) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

This package provides a utility to convert calendar dates provided in a `Moment` object to other non-gregorian calendars. For now Jalaali is the only calendar which is being converted, more may be added in the future.

## Installation

```jsx
npm install @bbc/psammead-calendars --save
```

## Calendars

### Jalaali

The functionality of this helper is to to convert a `Gregorian` calendar moment into it's `Jalaali` equivelant and outputting it as a string to be used by other components. This helper relies on `jalaali-js` which contains the logic to carry out the conversions from `Gregorian` to `Jalaali`. Documentation of this dependency can be found [here](https://www.npmjs.com/package/jalaali-js).

## Usage

<!-- Description of the component usage -->

```
import Calendars from "@bbc/psammead-calendars"
```

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
