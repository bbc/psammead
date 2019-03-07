# psammead-image-placeholder - [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?selectedKind=ImagePlaceholder) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-image-placeholder.svg)](https://www.npmjs.com/package/@bbc/psammead-image-placeholder) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `psammead-image-placeholder` component is a `div` with a base-64 encoded SVG background image that depicts the BBC logo. The component accepts a ratio as a prop. In the Psammead component library, Image Placeholder is used within the [psammead-figure](https://github.com/bbc/psammead/tree/latest/packages/components/psammead-figure) component.

## Installation

`npm install @bbc/psammead-image-placeholder`

## Props

| Argument | Type                                   | Required | Default | Example |
| -------- | -------------------------------------- | -------- | ------- | ------- |
| Ratio    | Number, ratio between height and width | Yes      | N/A     | 65.625  |

## Usage

The ImagePlaceholder component is expected to contain an image as a child element.

```jsx
import ImagePlaceholder from '@bbc/psammead-image-placeholder';

const WrapperComponent = ({
  ratio,
}) => (
  <ImagePlaceholder ratio={ratio}>
    <img src="http://some-image.url">
  </ImagePlaceholder>
);
```

### When to use this component

Psammead Image Placeholder is designed to appear as a temporary stand-in to be replaced by an actual image, for example in the case of lazy loading.

<!-- ### When not to use this component -->

### Accessibility notes

As a `div` with a background image, Psammead Image Placeholder is a presentational element without semantic meaning. As such it does not need to meet colour contrast requirements.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
