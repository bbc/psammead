# psammead-paragraph &middot; [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://bbc-news.github.io/psammead/?selectedKind=Paragraph) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-paragraph.svg)](https://www.npmjs.com/package/@bbc/psammead-paragraph) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `@bbc/psammead-paragraph` package exports a single Paragraph component. It uses a `p` HTML element.

It uses `@bbc/psammead-styles` for colours and font family and `@bbc/gel-foundations` for spacing and for GEL Typography implemented in Styled Components.

## Installation

`npm install @bbc/psammead-paragraph`

## Props

| Argument  | Type                | Required | Example         |
|-----------|---------------------|----------|-----------------|
| No props. |

## Usage

```jsx
import Paragraph from '@bbc/psammead-paragraph';

const WrappingComponent = () => (
  <Paragraph>Text here</Paragraph>
);
```

### When to use this component

This component can be used at any point on a page.

<!-- ### When not to use this component -->

### Accessibility notes

Since this is just a `<p>` tag with associated styles, when you use this component, it has the same semantic meaning as a regular paragraph element.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
