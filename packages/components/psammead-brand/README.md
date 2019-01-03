# psammead-brand &middot; [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://bbc-news.github.io/psammead/?selectedKind=Brand) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-brand.svg)](https://www.npmjs.com/package/@bbc/psammead-brand) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

## Description	
The `Brand` component provides the BBC News logo (as SVG), nested inside a styled span, link and div. The link is currently hardcoded to "https://www.bbc.co.uk/news". `Brand` takes a `brandName` as a prop. This prop is passed to a [VisuallyHiddenText](../VisuallyHiddenText) component, nested inside Brand. Note that this does not currently affect the branding itself, which always renders as `BBC NEWS`.

## Usage 
```
import Brand from '@bbc/psammead-brand';

const Header = (brandName) => (
  <header role="banner">
    <Brand brandName={brandName} />
  </header>
);
```

## When to use this component	
The `Brand` component is designed to be used where a BBC logo is required as SVG. `Brand` is used in the [BrandContainer](../../containers/Brand), which consumes a service context it passes to the `Brand`. 

## Accessibility notes	
* Visually hidden text is provided (e.g. for screen reader users)
* `Brand` is keyboard-accessible and provides hover and focus styles
* The brand SVG has support for users with css disabled or high conrast mode enabled.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
