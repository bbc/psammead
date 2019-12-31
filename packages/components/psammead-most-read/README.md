 <!-- prettier-ignore -->

# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-most-read - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-most-read%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-most-read%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-most-read)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-most-read) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-most-read)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-most-read&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/most-read--default-ltr) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-most-read.svg)](https://www.npmjs.com/package/@bbc/psammead-most-read) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `MostRead` component is designed to display the most read articles given a designated period of time which is dependent on service. The component comprises of a `MostReadTitle`, a `MostReadList` containing an ordered list of `MostReadItems`. A `MostReadItem` is a list item comprised of and a `MostReadLink`, a link to the article, and a `MostReadRank` which is a numerical counter representing the article's ranking.

## Installation

`npm install @bbc/psammead-most-read`

## Components (WIP)

## MostRead

id: string.isRequired,
title: string.isRequired,
href: string.isRequired,
timestamp: node.isRequired,

### Item Prop Values

<!-- prettier-ignore -->
| Argument  | Type   | Required | Default | Example                                |
| --------- | ------ | -------- | ------- | -------------------------------------- |
| id        | string | yes      | N/A     | "89b01387-4f40-8846-a11f-65aeed534da3" |
| title     | string | yes      | N/A     | "People are warned against attending a display in London without a ticket as areas prepare to usher in 2020." |
| href      | string | yes      | N/A     | "/news/uk-50952973" |
| timestamp | string | yes      | N/A     | `<TimestampContainer timestamp={1570031976502} dateTimeFormat="YYYY-MM-DD" prefix="Last updated: " format="LL" script={latin} service='news'/>` |

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| items | array | yes | N/A | `[{ id: "89b01387-4f40-8846-a11f-65aeed534da3", title: 'This is a headline', href: 'https://www.bbc.com', timestamp: <TimestampContainer timestamp={1570031976502} dateTimeFormat="YYYY-MM-DD" prefix="Last updated: " format="LL" script={latin} service='news'/> }]` |
| header | string | yes | N/A | `'Most Read'` |
| service | string | yes | N/A | `'news'` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| dir | string | yes | 'ltr' | `'ltr'`|

### Usage

```jsx
import React from 'react';
import MostRead from '@bbc/psammead-most-read';
import Timestamp from '@bbc/psammead-timestamp-container';
import { latin } from '@bbc/gel-foundations/scripts';

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

const items = [
  {
    id: '89b01387-4f40-8846-a11f-65aeed534da3',
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.co.uk/news/business-43328806',
    timestamp: lastUpdated(latin, 'news'),
  },
  {
    id: '89b01387-4f40-8846-a11f-65aeed534da4',
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.co.uk/news/business-43328806',
    timestamp: null,
  },
];

<MostRead
  items={items}
  service="news"
  header="Most Read"
  script={latin}
  dir="ltr"
/>;
```

## MostReadList

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| items | array | yes | N/A | `[{ id: '89b01387-4f40-8846-a11f-65aeed534da3', title: 'This is a headline', href: 'https://www.bbc.com', timestamp: null }]` |
| service | string | yes | N/A | `'news'` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| dir | string | yes | 'ltr' | `'ltr'`|

### Usage

```jsx
import React from 'react';
import MostReadList from '@bbc/psammead-most-read/List';
import { latin } from '@bbc/gel-foundations/scripts';

const items = [
  {
    id: '89b01387-4f40-8846-a11f-65aeed534da5',
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.co.uk/news/business-43328806',
    timestamp: null,
  },
  {
    id: '89b01387-4f40-8846-a11f-65aeed534da3',
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.co.uk/news/business-43328806',
    timestamp: null,
  },
];

<MostReadList items={items} service="news" script={latin} dir="ltr" />;
```

## MostReadLink

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| item | array | yes | N/A | `{ id: '89b01387-4f40-8846-a11f-65aeed534da3', title: 'This is a headline', href: 'https://www.bbc.com', timestamp: null }` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `'news'` |
| dir | oneOf(['rtl', 'ltr}) | yes | 'ltr' | `'ltr'`|

### Usage

A typical use-case of this component is as displayed below. It contains an info element. The info element is a link which points to the corresponding article.

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { MostReadLink } from '@bbc/psammead-most-read/Item';

const item = {
    id: '89b01387-4f40-8846-a11f-65aeed534da3',
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.co.uk/news/business-43328806',
    timestamp: null,
}

<MostReadLink item={item} script={latin} service="news" dir="ltr" />;

```

#### <a name="example with last updated date">Example with last updated date</a>

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import Timestamp from '@bbc/psammead-timestamp-container';
import { MostReadLink } from '@bbc/psammead-most-read/Item';

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

const item = {
  id: '89b01387-4f40-8846-a11f-65aeed534da3',
  title: 'John Lewis staff bonus cut again as profits fall',
  href: 'https://www.bbc.co.uk/news/business-43328806',
  timestamp: lastUpdated(latin, 'news'),
};

<MostReadLink
  lastUpdated={lastUpdated}
  item={item}
  script={latin}
  service="news"
  dir="ltr"
/>;
```

## MostReadRank

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `'news'` |

### Usage

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { MostReadRank } from '@bbc/psammead-most-read/Item';

<MostReadRank script={latin} service="news">
  10
</MostReadRank>;
```

## MostReadTitle

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `'news'` |
| header | string | yes | N/A | `'Most Read'`  |

### Usage

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { MostReadTitle } from '@bbc/psammead-most-read/Title';

<MostReadTitle header="Most Read" script={latin} service="news" </MostReadTitle>;

```

### When to use this component

This component is to be used on `article` pages.

### Accessibility notes

Currently this component is in alpha. This is because it has not yet been tested with various assistive technologies. After it has had an accessibility swarm, this will be published under a standard version.

## Roadmap

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
