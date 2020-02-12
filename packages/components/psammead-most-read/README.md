# psammead-most-read - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-most-read%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-most-read%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-most-read)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-most-read) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-most-read)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-most-read&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/most-read--default-ltr) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-most-read.svg)](https://www.npmjs.com/package/@bbc/psammead-most-read) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `MostRead` component is designed to display the most read articles given a designated period of time which is dependent on service. The component comprises of a `MostReadTitle`, a `MostReadList` containing an ordered list of `MostReadItems`. A `MostReadItem` is a list item comprised of and a `MostReadLink`, a link to the article, and a `MostReadRank` which is a numerical counter representing the article's ranking.

## Installation

`npm install @bbc/psammead-most-read`

## Components

## MostRead

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| items | array | yes | N/A | `[{ id: "89b01387-4f40-8846-a11f-65aeed534da3", title: 'This is a headline', href: 'https://www.bbc.com', timestamp: <TimestampContainer timestamp={1570031976502} dateTimeFormat="YYYY-MM-DD" prefix="Last updated: " format="LL" script={latin} service='news'/> }]` |
| header | string | yes | N/A | `'Most Read'`  |
| service | string | yes | N/A | `'news'` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| dir | string | no | `"ltr"` | `"rtl"` |
| labelId | string | no | `'Most-Read'` | `'Most-Read'`|
| className | string | no | `null` | `'additional-class'` |

### Usage

This component combines all the MostRead Components (MostReadList, MostReadTitle, MostReadItemWrapper, MostReadLink, MostReadRank) and renders the full component.

```jsx
import React from 'react';
import { MostRead } from '@bbc/psammead-most-read';
import Timestamp from '@bbc/psammead-timestamp-container';
import { arabic } from '@bbc/gel-foundations/scripts';

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
    timestamp: lastUpdated(arabic, 'arabic'),
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
  script={script}
  service="arabic"
  header="الأكثر قراءة"
  dir="rtl"
/>;
```

## MostReadList

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| numberOfItems | number | yes | N/A | `10` |
| children | node | yes | N/A | `<MostReadItemWrapper dir='ltr' key={1}><MostReadRank service='news' script=latin listIndex={1} numberOfItems={10} dir='ltr'/> <MostReadLink dir='ltr href='/bbc.co.uk/news/articles/27051997' service='news' script={latin} title='This is a news article headline'/></MostReadItemWrapper>,` |
| dir | string | yes | 'ltr' | `'ltr'`|

### Usage

This component is to be used in conjunction with the other MostRead components, example can be seen below.

```jsx
import React from 'react';
import {
  MostReadList,
  MostReadLink,
  MostReadRank,
  MostReadItemWrapper,
} from '@bbc/psammead-most-read';
import { latin } from '@bbc/gel-foundations/scripts';

<MostReadList
  items={items}
  service="news"
  script={latin}
  dir="ltr"
>
  <MostReadItemWrapper dir='ltr' key={1}>
    <MostReadRank service='news' script=latin listIndex={1} numberOfItems={10} dir='ltr'/>
    <MostReadLink dir='ltr href='/bbc.co.uk/news/articles/27051997' service='news' script={latin} title='This is a news article headline'/>
  </MostReadItemWrapper>
</MostReadList>;
```

## MostReadLink

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| dir | string | yes | 'ltr' | `'ltr'`|
| service | string | yes | N/A | `'news'` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| title | string | yes | N/A | `"This is a article headline"` |
| href | string | yes | N/A | `"/bbc.co.uk/news/00000027051997"` |
| children | node | no | null | `<Timestamp datetime="2019-03-01T14:00+00:00" script={script} padding={false} service={service}>Last updated: 5th November 2016</Timestamp>` |

### Usage

A typical use-case of this component is as displayed below. It contains an info element. The info element is a link which points to the corresponding article.

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { MostReadLink } from '@bbc/psammead-most-read';
import Timestamp from '@bbc/psammead-timestamp';

<MostReadLink
  dir="ltr"
  script={latin}
  service="news"
  title="This is a article headline"
  href="/bbc.co.uk/news/00000027051997"
>
  <Timestamp
    datetime="2019-03-01T14:00+00:00"
    script={script}
    padding={false}
    service={service}
  >
    Last updated: 5th November 2016
  </Timestamp>
</MostReadLink>;
```

## MostReadItemWrapper

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| dir | string | yes | 'ltr' | `'ltr'`|
| children | node | yes | N/A | `<MostReadRank service='news' script=latin listIndex={1} numberOfItems={10} dir='ltr'/> <MostReadLink dir='ltr href='/bbc.co.uk/news/articles/27051997' service='news' script={latin} title='This is a news article headline'/>` |

### Usage

This component is used to wrap `MostReadLink` and `MostReadRank` together, as seen below.

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  MostReadLink,
  MostReadRank,
  MostReadItemWrapper,
} from '@bbc/psammead-most-read';
<MostReadItemWrapper>
  <MostReadRank service='news' script=latin listIndex={1} numberOfItems={10} dir='ltr'/>
  <MostReadLink
    dir="ltr"
    script={latin}
    service="news"
    title="This is a article headline"
    href="/bbc.co.uk/news/00000027051997"
  />
</MostReadItemWrapper>;
```

## MostReadRank

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| service | string | yes | N/A | `'news'` |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| listIndex | number | yes | N/A | `1` |
| numberOfItems | number | yes | N/A | `10` |
| dir | string | no | `"ltr"` | `"ltr"` |

### Usage

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { MostReadRank } from '@bbc/psammead-most-read';

<MostReadRank
  service="news"
  script={latin}
  listIndex={1}
  numberOfItems={5}
  dir="ltr"
/>;
```

## MostReadSection

### Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | ------- |
| script | object | yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| service | string | yes | N/A | `'news'` |
| header | string | yes | N/A | `'Most Read'`  |
| labelId | string | no | `'most-read'` | `'most-read'`  |
| children | node | yes | N/A | `<MostReadList numberOfItems={10} dir='ltr'><MostReadItemWrapper dir='ltr'><MostReadRank service='news' script={script} listIndex={1} numberOfItems={10} dir='ltr'/><MostReadLink dir='ltr' service='news' script={script} title='article headline' href='/bbc.co.uk/articles/000027051997'>{timestamp}</MostReadLink></MostReadItemWrapper></MostReadList>`  |
| dir | string | no | `"ltr"` | `"ltr"` |
| className | string | no | `null` | `'additional-class'` |

### Usage

```jsx
import React from 'react';
import { latin } from '@bbc/gel-foundations/scripts';
import { MostReadSection } from '@bbc/psammead-most-read';

<MostReadSection
  labelId={labelId}
  script={script}
  service={service}
  header={header}
  dir={dir}
>
  <p>Most Read content</p>
</MostReadSection>;
```

### When to use this component

This component is to be used on `article` pages.

### Accessibility notes

This component is expected to provide information about the Most Read articles in an ordered list when using a screenreader by announcing the region landmark, reading out the title 'Most Read', and read out each headline link in the correct order.
Due to the faux block link code, it is not expected to read out the rank as well.

## Roadmap

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
