# psammead-horizontal-rule &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-horizontal-rule.svg)](https://www.npmjs.com/package/@bbc/psammead-horizontal-rule) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

## Description

The `@bbc/psammead-horizontal-rule` package exports a single HorizontalRule component. It uses a `hr` HTML element.

This component uses `@bbc/psammead-styles` for colours and `@bbc/gel-constants` for spacing.

## Installation

```
npm install @bbc/psammead-horizontal-rule --save
```

## Usage

Example usage with Psammead Paragraph:

```jsx
import HorizontalRule from '@bbc/psammead-horizontal-rule';
import Paragraph from '@bbc/psammead-paragraph';

const WrappingComponent = () => (
  <Paragraph>Text here.</Paragraph>
    <HorizontalRule/>
  <Paragraph>More text here.</Paragraph>
);
```

Example usage with standard paragraph elements:

```jsx
import HorizontalRule from '@bbc/psammead-horizontal-rule';

const WrappingComponent = () => (
  <p>Text here.</p>
    <HorizontalRule/>
  <p>More text here.</p>
);
```

## When to use this component

This component is a styled `<hr>` element. In HTML5 this is recommended to be used for a thematic break between paragraph elements.

## Accessibility notes

This has the same semantic meaning as a regular horizontal rule element.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
