# psammead-topic-tags - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-topic-tags%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-topic-tags%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-topic-tags)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-topic-tags) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-topic-tags)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-topic-tags&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/topic-tags--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-topic-tags.svg)](https://www.npmjs.com/package/@bbc/psammead-topic-tags) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `TopicTags` component does...

## Installation

```jsx
npm install @bbc/psammead-topic-tags --save
```

## Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| script | string | Yes | N/A | `'news'` |
| service | object | Yes | N/A | `{ canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }` |
| dir | string | No | `'ltr'` | One of `'ltr'` or `'rtl'` |

## Usage

<!-- Description of the component usage -->

```jsx
import { TopicTags, TopicTag } from "@bbc/psammead-topic-tags"
import { latin } from '@bbc/gel-foundations/scripts';

const Wrapper = () => (
    <TopicTags script={latin} service="news" dir="ltr" >
        <TopicTag topicName="Retailing" topicLink="/url/to/topic" />
        <TopicTag topicName="Business" topicLink="/url/to/topic" />
        <TopicTag topicName="Viruses" topicLink="/url/to/topic" />
    </TopicTags>
);
```

### When to use this component

The `TopicTag` component should only be used inside of a `TopicTags` component, and a `TopicTags` component should only be used to contain `TopicTag` components.

### Accessibility notes

The `TopicTags` component is fundamentally a `<ul>`, and so the `TopicsTags` component is announced as a list when using a screen reader, using the ARIA `role="text"` attribute.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
