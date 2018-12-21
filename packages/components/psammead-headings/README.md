# psammead-headings &middot; [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://bbc-news.github.io/psammead/?selectedKind=Headline) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-headings.svg)](https://www.npmjs.com/package/@bbc/psammead-headings) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description

The Headings are a set of two components, `Headline` and `SubHeading`. They use a `h1` and `h2` HTML element respectively, with the `Headline` being designed for a single use on the page, with `SubHeading` being aimed at repeated use.

## Installation

`npm install @bbc/psammead-headings`

## Props

| Argument  | Type                | Required | Example         |
|-----------|---------------------|----------|-----------------|
| No props. |

## Usage

```jsx
import { Headline, SubHeading } from '@bbc/psammead-headings';

const Wrapper = (src, alt, width, height) => (
    <Fragment>
        <Heading>Some headline</Heading>
        <SubHeading>Some subheadline</SubHeading>
    </Fragment>
);
```

All `SubHeading` components can be used as page anchors, with their ID being generated from their text, with any whitespace replaced with hyphens.

### When to use this component

These components can be used at any point on the page, however the `Headline` is designed to be used once at the top of the page. The `SubHeading` adds an `id` value to the `h2` which can be used as an anchor when referencing content.

<!-- ### When not to use this component -->

### Accessibility notes

The `SubHeading` component has a tabindex of `-1` so that it works correctly with screen readers when navigated to via a skip link.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
