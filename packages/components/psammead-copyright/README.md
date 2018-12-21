# psammead-copyright &middot; [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://bbc-news.github.io/psammead/?selectedKind=Copyright) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-copyright.svg)](https://www.npmjs.com/package/@bbc/psammead-copyright) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description

Displays a source attribution in block capitals in the bottom-right of the parent element. This implementation is primarily intended for use alongside images.

## Installation

`npm install @bbc/psammead-copyright`

## Props

| Argument  | Type                | Required | Example         |
|-----------|---------------------|----------|-----------------|
| No props. |

## Usage

Commonly used alongside [`psammead-figure`](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-figure) and [`psammead-image`](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-image).

```jsx
const WrapperComponent = ({
  alt,
  src,
  width,
}) => (
  <Figure>
    <Image alt={alt} src={src} width={width} />
    <Copyright>Getty Images</Copyright>
  </Figure>
);
```

### When to use this component

This component is intended to be used alongside images or diagrams contained within a [Figure component](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-figure).

### When not to use this component

This component should not be used arbitrarily to represent source attribution across the page. As above, it is not intended to be used outside the [Figure component](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-figure). The accessibility text would be incorrect and potentially confusing.

Do not use this component if you know the source attribution is already covered by another copyright disclosure on the page, such as in [`psammead-sitewide-links` component](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-sitewide-links).

### Accessibility notes

The default styling of this component is intended to comply with WCAG colour contrast standards.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
