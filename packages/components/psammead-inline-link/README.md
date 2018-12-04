# psammead-inline-link &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-inline-link.svg)](https://www.npmjs.com/package/@bbc/psammead-inline-link) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

## Description

The `@bbc/psammead-inline-link` package exports a single Inline Link component. It uses an `a` HTML element and colours from `@bbc/psammead-styles`.

## Installation

```
npm install @bbc/psammead-inline-link --save
```

## Usage

```jsx
import InlineLink from '@bbc/psammead-inline-link';

const WrappingComponent = () => (
  <InlineLink href="https://www.bbc.com/news">Text here</InlineLink>
);
```

## When to use this component

This component can be used at any point on a page.

We have not included typography styles in with this component. This is so it is resusable in multiple contexts. You can use our existing `psammead-paragraph` for body copy and `psammead-headings` for headlines and subheadings (`h1`s and `h2`s), in this way:

In a paragraph:

```jsx
import InlineLink from '@bbc/psammead-inline-link';
import Paragraph from '@bbc/psammead-paragraph';

const WrapperComponent = () => (
  <Paragraph>I am a paragraph that has a link to <InlineLink href="https://www.bbc.com/news">the BBC News front page</InlineLink>.<Paragraph>
);
```

In a Headline or SubHeading:

```jsx
import InlineLink from '@bbc/psammead-inline-link';
import { Headline, SubHeading } from '@bbc/psammead-headings';

const HeadlineWithALink = () => (
  <Headline><InlineLink href="https://www.bbc.com/news">Headline</InlineLink>
  <Headline>

  const SubHeadingWithALink = () => (
  <SubHeading><InlineLink href="https://www.bbc.com/news">SubHeading</InlineLink><SubHeading>
);
```

Alternatively, if you want to just extend existing styles with other GEL Typography groups, you can do the following:

```jsx
import InlineLink from '@bbc/psammead-inline-link';
import { GEL_PARAGON } from '@bbc/gel-foundations-styled-components';

const GelParagonLink = styled(InlineLink)`
  ${GEL_PARAGON};
`;

const WrapperComponent = () => (
  <GelParagonLink href="https://www.bbc.com/news">
    Link with GEL Paragon typography
  </GelParagonLink>
);
```

## Accessibility notes

Since this is just a `<a>` tag with associated styles, when you use this component, it has the same semantic meaning as a regular anchor element.

The font and background-color choices for each hover/focused/visited/default states meet WCAG AA colour contrast guidelines.

## Roadmap

Our UX team are considering updating the colours for the hover and focus states of this component. When we implement this change, we will ensure it is a major version increase, since for downstream teams this will be a breaking change.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
