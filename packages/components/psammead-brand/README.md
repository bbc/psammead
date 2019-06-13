# psammead-brand - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-brand%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-brand%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/brand--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-brand.svg)](https://www.npmjs.com/package/@bbc/psammead-brand) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `Brand` component provides the BBC service logo (as SVG), nested inside a styled link and div. The link is currently hardcoded to "https://www.bbc.co.uk/news".

`Brand` takes a `product`, `svgHeight`, `minWidth`, `maxWidth`, `url`, `serviceLocalisedName` and `svg` as props.

The `product` is passed to a [VisuallyHiddenText](https://github.com/bbc/psammead/tree/latest/packages/components/VisuallyHiddenText) component, nested inside Brand.

The `serviceLocalisedName` is an optional prop referring to the local name of a service eg `Yoruba`. It is also passed to [VisuallyHiddenText](https://github.com/bbc/psammead/tree/latest/packages/components/VisuallyHiddenText) inside the Brand component.

The `svg` prop must contain a `group`, `viewbox` values and a `ratio`, which is used within an `svg` element. Examples of the `svg` object can be found in [@bbc/psammead-assets](https://github.com/bbc/psammead/blob/latest/packages/utilities/psammead-assets/README.md#service-svgs).

The `minWidth` and `maxWidth` values are required to allow the ability for the `svg` element to dynamically scale as the viewport becomes a very small size EG: feature phones.

The `svgHeight` value acts as a placeholder for the `svg` element meaning the overall banner height does not change with the dynamic scaling, also the `height` allows the contents of the `svg` element to remain vertically centred within the banner at all times.

The `url` value is the link that points to the frontpage of the service associated with the `svg`.

## Installation

`npm install @bbc/psammead-brand`

## Props

<!-- prettier-ignore -->
| Argument  | Type   | Required | Default | Example      |
| --------- | ------ | -------- | ------- | ------------ |
| product | String | yes | N/A | `'BBC News'` |
| svgHeight | Number | yes | N/A | `24` |
| minWidth | Number | yes | N/A | `240` |
| maxWidth | Number | yes | N/A | `380` |
| svg | Object | yes | N/A | { group: `(<g fillrule="evenodd"><path d="M84.32" /></g>)`, viewbox: { height: 24, width: 167.95 }, ratio: 6.9979 } |
| url | String | no | N/A | `https://www.bbc.co.uk/news` |
| serviceLocalisedName | String | no | N/A | `'Yoruba'` |

## Usage

The typical use-case of this component is at the top of pages in a [`header` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header). When this is done it is recommend that the component is wrapped in a [`banner` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Banner_role). However, a `header` with a `banner` role should only appear once on a page.

```jsx
import Brand from '@bbc/psammead-brand';
import { igbo } from '@bbc/psammead-assets/svgs';

const Header = (product, serviceName) => (
  <header role="banner">
    <Brand
      product={product}
      serviceLocalisedName={serviceName}
      svgHeight={24}
      maxWidth={280}
      minWidth={180}
      svg={igbo}
      url="https://www.bbc.co.uk/news"
    />
  </header>
);
```

### When to use this component

The `Brand` component is designed to be used where a BBC logo is required as SVG. `Brand` is used in the [BrandContainer](https://github.com/bbc/simorgh/tree/latest/src/app/containers/Brand), which consumes a service context it passes to the `Brand`.

<!-- ### When not to use this component -->

### Accessibility notes

- Visually hidden text is provided (e.g. for screen reader users)
- `Brand` is keyboard-accessible and provides hover and focus styles
- The brand SVG has support for users with css disabled or high contrast mode enabled.

<!-- ## Roadmap -->

### Additional notes

- `width: 100%` is needed on both `<a>` and the `<svg>` to allow the brand to dynamically scale on the Firefox browser

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
