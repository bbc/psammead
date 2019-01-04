# psammead-image &middot; [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badges/storybook.svg?sanitize=true)](https://bbc-news.github.io/psammead/?selectedKind=Image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-image.svg)](https://www.npmjs.com/package/@bbc/psammead-image) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `psammead-image` component is a styled `img` element.

## Installation

## Props

| Argument  | Type          | Required | Default | Example                      |
|-----------|---------------|----------|---------|------------------------------|
| alt       | String        | Yes      | N/A     | "A description of the image" |
| height    | Number/String | No*      | None    | 400                          |
| src       | String        | Yes      | N/A     | "https://ichef.bbci.co.uk/news/640/cpsprodpb/A933/production/_101651334_bouquet_pa.jpg" |
| width     | Number/String | Yes      | N/A     | 600                          |

*The `height` prop is optional, since in some cases to preserve the image ratio we only want to specify the width and let the browser scale the image accordingly. However, in other cases the height might need to be specified.

## Usage

```jsx
import Image from '@bbc/psammead-image';

const Wrapper = (src, alt, width, height) => (
  <Image src={src} alt={alt} width={width} height={height} />
);
```

### When to use this component

This component can be used at any point on a page.

<!-- ### When not to use this component -->

### Accessibility notes

This component requires an `alt` property to describe the image. This `alt` text is crucial for users of Assistive Technology, and by any user whose internet connection is so slow the browser decides to render the text instead of the image.

Some images are purely presentational - in these cases, an `alt` attribute must still be passed, but the value would be an empty string: `""`.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
