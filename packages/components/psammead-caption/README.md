# psammead-caption &middot; [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://bbc-news.github.io/psammead/?selectedKind=Caption) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-caption.svg)](https://www.npmjs.com/package/@bbc/psammead-caption) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `psammead-caption` component is a styled `figcaption` element.

## Installation

`npm install @bbc/psammead-caption`

## Props

| Argument  | Type                | Required | Example         |
|-----------|---------------------|----------|-----------------|
| No props. |

## Usage

`psammead-caption` can be used together with the [`psammead-figure`](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-figure) and [`psammead-visually-hidden-text`](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-visually-hidden-text) in this way. This visually hidden text is to give context to users of Assistive Technology.

```jsx
import Caption from '@bbc/psammead-caption';
import Figure from '@bbc/psammead-figure';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const Wrapper = (captionText) => (
  <Figure>
    ...
    <Caption>
      <VisuallyHiddenText>Image caption, </VisuallyHiddenText>
      {captionText}
    </Caption>
  <Figure>
);
```

### When to use this component

The `Caption` component should be used only within a `figure` element. It is designed to be placed after an image or video component.

<!-- ### When not to use this component -->

### Accessibility notes

Since this is just a `<figcaption>` tag with associated styles, when you use this component, it has the same semantic meaning as a regular figcaption element.

The font and background-color choices meet WCAG AA colour contrast guidelines.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
