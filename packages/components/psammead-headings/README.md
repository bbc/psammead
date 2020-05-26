<!-- prettier-ignore -->
# psammead-headings - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-headings%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-headings%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-headings)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-headings) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-headings)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-headings&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/headline--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-headings.svg)](https://www.npmjs.com/package/@bbc/psammead-headings) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The Headings are a set of three components, `Headline`, `SubHeading` and `PageHeading`.

They `Headline` and `SubHeading` use a `h1` and `h2` HTML element respectively, with the `Headline` being designed for a single use on the page, with `SubHeading` being aimed at repeated use.

On the other hand, the `PageHeading` use a `h1` and is designed to be the title of a page, like for example IDX, FIX and Most Read pages.

## Installation

`npm install @bbc/psammead-headings`

## Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| script    | object | yes | latin | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }|
| service | string | yes | N/A | `'news'` |

## Usage

```jsx
import { Headline, SubHeading } from '@bbc/psammead-headings';
import { latin } from '@bbc/gel-foundations/scripts';

const Wrapper = () => (
  <Fragment>
    <Heading script={latin} service="news">
      Some headline
    </Heading>
    <SubHeading script={latin} service="news">
      Some subheadline
    </SubHeading>
  </Fragment>
);
```

`SubHeading` and `PageHeading` components can be used as page anchors when passed an `id` attribute. To take the above usage as an example:

```jsx
<SubHeading id="some-subheadline" script={latin} service="news">
  Some subheadline
</SubHeading>
```

This usage will allow for the page anchor: `www.bbc.com/news/articles/articleID#some-subheadline`

### When to use this component

These components can be used at any point on the page, however the `Headline` and `PageHeading` are designed to be used once at the top of the page.

The `SubHeading` and `PageHeading` can take an optional `id` attribute to be passed to the `h2` which can be used as an anchor when referencing content.

<!-- ### When not to use this component -->

### Accessibility notes

The `SubHeading` and `PageHeading` component have a tabindex of `-1` so that they work correctly with screen readers when navigated to via a skip link.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
