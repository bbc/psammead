# @BBC/Psammead-Paragraph [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://simorghstorybook.now.sh/?selectedKind=Paragraph)

## Description

The `@bbc/psammead-paragraph` package exports a single Paragraph component. It uses a `p` HTML element.

It uses `@bbc/psammead-styles` for colours and font family, `@bbc/gel-constants` for spacing and `@bbc/gel-foundations-styled-components` for GEL Typography implemented in Styled Components.

## Installation

```
npm install @bbc/psammead-paragraph --save
```

## Usage

```jsx
import Paragraph from '@bbc/psammead-paragraph';

const WrappingComponent = () => (
    <Paragraph>Text here</Paragraph>
  );
```

## When to use this component

This component can be used at any point on a page.

## Accessibility notes

Since this is just a `<p>` tag with associated styles, when you use this component, it has the same semantic meaning as a regular paragraph element.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
