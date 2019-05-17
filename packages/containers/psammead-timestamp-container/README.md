# psammead-timestamp-container - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcontainers%2Fpsammead-timestamp-container%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcontainers%2Fpsammead-timestamp-container%2Fpackage.json) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-timestamp-container.svg)](https://www.npmjs.com/package/@bbc/psammead-timestamp-container) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/timestampcontainer--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description
`psammead-timestamp-container` is a container with generic time functions, that returns a single time element.

## When to use this component
`psammead-timestamp-container` is intended to be used when a single time DOM element that has the possibility of having varying time formats and timezones is required.

## Installation
`npm install @bbc/psammead-timestamp-container`

## Props

| Argument  | Type                | Required | Default | Example         |
|-----------|---------------------|----------|---------|-----------------|
| timestamp | number | Yes   | N/A | `1530947227000` |
| dateTimeFormat | string | Yes | N/A | `YYYY-MM-DD` |
| isRelative | boolean | No | `false` | `true` |
| format | string | No | `null` | `D MMMM YYYY, HH:mm z` |
| timezone | string | No | `'Europe/London'` | `'Europe/London'` |
| prefix | string | No | `null` | `Updated` |
| suffix | string | No | `null` | `This is a suffix` |
| script | object | Yes | N/A | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, } |

## Usage
```jsx
import { latin } from '@bbc/gel-foundations/scripts';

const WrappingContainer = () => (
  <Timestamp
    timestamp={1530947227000}
    dateTimeFormat="YYYY-MM-DD"
    isRelative={false}
    format="D MMMM YYYY"
    timezone="Europe/London"
    prefix="Updated"
    suffix="."
    script={latin}
  />
);
```

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
