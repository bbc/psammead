# psammead-styles &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-styles.svg)](https://www.npmjs.com/package/@bbc/psammead-styles) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

This package provides a collection of string constants for use in CSS, containing non-GEL styling details that are bespoke to specific BBC services and products

## Exports

`/colours` - Project-defined colours that will be required by multiple Psammead components or themes. These colours are not defined by GEL.
`/fonts` - Project-defined browser behaviours for the Reith font. The primary reason these are not considered GEL-defined (and not part of [`@bbc/gel-foundations`](https://www.npmjs.com/package/@bbc/gel-foundations)) is due to the custom weighting and loading definitions. [More details on the font-faces defined in this package are available here.](./font-faces.md)

## Installation

```jsx
npm install @bbc/psammead-styles --save
```

## Usage

```jsx
import { C_POSTBOX } from '@bbc/psammead-styles/colours';

import { F_REITH_SANS_REGULAR, F_REITH_SANS_ITALIC } from '@bbc/psammead-styles/fonts';
```

By importing a subset of the font-face definitions defined in this package, you can prioritise only the most commonly needed fonts for your project, with browser styling stepping in for less common scenarios. For example, in these examples, which import custom fonts for only Reith Sans Regular and Italic, any bold styling would be "faked" by the browser.

You will likely want to use these font-face definitions in tandem with the GEL-defined font stack definitions, which are available in [`@bbc/gel-foundations`](https://www.npmjs.com/package/@bbc/gel-foundations):

```jsx
import { GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
```

These values can then be used directly within CSS declarations in code. Note that font-faces should only be declared once on a page:

```jsx
import { css } from 'styled-components';

// These should only be included on your page once.
const someGlobalCSS = css`
  ${F_REITH_SANS_REGULAR};
  ${F_REITH_SANS_ITALIC};
`;

const SomeStyledComponent = css`
  background-color: ${C_POSTBOX};
  font-family: ${GEL_FF_REITH_SANS};
`;
```

## Contributing

When **adding** a new export to this utility package the [export tests](https://github.com/bbc/psammead/blob/5d7395fd60bd8d73796d5a23775b4b5b36db1445/packages/utilities/psammead-styles/index.test.jsx#L11-L35) also need to be updated. When **removing** an exisiting export from this utility package the [export tests](https://github.com/bbc/psammead/blob/5d7395fd60bd8d73796d5a23775b4b5b36db1445/packages/utilities/psammead-styles/index.test.jsx#L11-L35) need to be updated and the package version requires a major change (EG: 1.2.1 -> 2.0.0) as this would be considered a breaking change due to functionality being removed.

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
