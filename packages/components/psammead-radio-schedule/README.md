# psammead-radio-schedule - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-radio-schedule%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-radio-schedule%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-radio-schedule)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-radio-schedule) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-radio-schedule)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-radio-schedule&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/radio-schedule--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-radio-schedule.svg)](https://www.npmjs.com/package/@bbc/psammead-radio-schedule) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `RadioSchedule` component does...

## Exports

`/startTime` - Adds a timestamp with a starting time of the program.

## Installation

```jsx
npm install @bbc/psammead-radio-schedule --save
```

## Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| No props. |      |          |         |         |

### StartTime

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| timestamp | number | yes   | N/A | `1530947227000` |
| timezone | string | yes | N/A | `'Europe/London'` |
| locale | string | yes | N/A | `en-gb` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `news` |

## Usage

### StartTime

```jsx
import React from 'react';
import { StartTime } from '@bbc/psammead-radio-schedule/startTime';
import { latin } from '@bbc/gel-foundations/scripts';

<StartTime
      script={latin}
      service="news"
      timestamp={1566914061212}
      timezone="Europe/London"
      locale="en-gb"
    />
```

<!-- Description of the component usage -->

```
import RadioSchedule from "@bbc/psammead-radio-schedule"
```

### When to use this component

<!-- Description of the where the component can be used -->

### When not to use this component

<!-- Description of the where the component shouldn't can be used -->

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
