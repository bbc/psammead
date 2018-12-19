# psammead-figure &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-figure.svg)](https://www.npmjs.com/package/@bbc/psammead-figure) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `psammead-figure` component is a styled `<figure>` element.

## When to use this component

Use this component when a `<figure>` element, which represents self-contained content that frequently has a caption, is required. Figures usually wrap an image.

The following example shows `psammead-figure` wrapping an
* [psammead-image-placeholder](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-image-placeholder), a `<div>` with background image
* [psammead-image](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-image), an `<img>`
* [psammead-caption](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-caption), a `<figcaption>`
* [psammead-visually-hidden-text](https://github.com/BBC-News/psammead/tree/latest/packages/components/psammead-visually-hidden-text), a hidden `<span>` available only to assistive technology

```jsx
import Caption from '@bbc/psammead-caption';
import Figure from '@bbc/psammead-figure';
import Image from '@bbc/psammead-image';
import ImagePlaceholder from '@bbc/psammead-image-placeholder';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const Wrapper = ({ src, alt, ratio, captionText }) => (
  <Figure>
    <ImagePlaceholder ratio={ratio}>
      <Image alt={alt} src={src} />
    </ImagePlaceholder>
    <Caption>
      <VisuallyHiddenText>Image caption, </VisuallyHiddenText>
      {captionText}
    </Caption>
  </Figure>
);

```

## Accessibility notes

The `psammead-figure` is a `<figure>` element with associated styles. When you use this component, it has the same semantic meaning as a regular [figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) element. 

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
