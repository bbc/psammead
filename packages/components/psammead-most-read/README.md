 <!-- prettier-ignore -->
# psammead-most-read - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-most-read%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-most-read%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-most-read)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-most-read) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-most-read)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-most-read&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/most-read--default-ltr) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-most-read.svg)](https://www.npmjs.com/package/@bbc/psammead-most-read) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `MostRead` component is designed to display the most read articles given a designated period of time which is dependent on service. The component comprises of a `MostReadTitle`, a `MostReadList` which is a grid containing `MostReadItems`, a `MostReadItem` comprising of and a link to the article, and a `MostReadRank` which is a numerical counter representing its ranking.

## Installation

`npm install @bbc/psammead-most-read`

## Props

### MostReadItem props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| item | object | yes | N/A | `{ title: 'This is a item', href: 'https://www.bbc.com' }` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `'news'` |
| dir | string | no | `'ltr'` | `'rtl'`  |
| lastUpdated | node | no | null | `<time>12 March 2019</time>` |

## MostReadItem Usage

A typical use-case of this component is as displayed below. It contains an info element. The info element is a link which points to the corresponding article.

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { MostReadItem } from '@bbc/psammead-most-read/esm/item';

const item = {
    title: 'Cranberries singer O'Riordan died by drowning,
    href: 'https://www.bbc.com'
}

<MostReadItem item={item} script={latin} service="news" dir="ltr" />;

```

#### <a name="example with last updated date">Example with last updated date</a>

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import Timestamp from '@bbc/psammead-timestamp-container';
import { MostReadItem } from '@bbc/psammead-most-read/esm/item';

const item = {
    title: 'Cranberries singer O'Riordan died by drowning,
    href: 'https://www.bbc.com'
}

const lastUpdated = (script, service) => (
  <Timestamp
    timestamp={1570031976502}
    dateTimeFormat="YYYY-MM-DD"
    prefix="Last updated: "
    format="LL"
    script={script}
    service={service}
  />
);

<MostReadItem
    lastUpdated={lastUpdated}
    item={item}
    script={latin}
    service="news"
    dir="ltr"
/>;

```

### MostReadRank props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `'news'` |

## MostReadRank Usage

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { MostReadRank } from '@bbc/psammead-most-read/esm/item';

<MostReadRank script={latin} service="news">10</MostReadRank>;

```

### MostReadTitle props
<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `'news'` |
| header | string | yes | N/A | `'Most Read'`  |

## Usage

To be written once component integrates all necessary parts.


### When to use this component

This component is to be used on `article` pages.

### Accessibility notes

Currently this component is in alpha. This is because it has not yet been tested with various assistive technologies. After it has had an accessibility swarm, this will be published under a standard version.

## Roadmap

The `MostRead` component is designed to display the most read articles given a designated period of time which is dependent on service. The component comprises of a `MostReadTitle`, a `MostReadList` which is a grid containing a `MostReadCount/Rank` (name subject to change) and a `MostReadItem`. Finally we will add a wrapper that will export a list of most read components using `@bbc/psammead-grid` to display the most read items on a grid.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
