# gel-foundations-styled-components &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/gel-foundations-styled-components.svg)](https://www.npmjs.com/package/@bbc/gel-foundations-styled-components) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

This package provides a collection of styled component implementations based on BBC GEL guidelines which can be imported into your application.

[More details on the type sizes defined in this package are available here.](./typography_sizes_web.md)

## Installation

```jsx
npm install @bbc/gel-foundations-styled-components --save
```

## Usage

```jsx
import { GEL_BREVIER } from '@bbc/gel-foundations-styled-components/typography';
```

These values can then be used directly within CSS declarations in code:
```jsx
import { css } from 'styled-components';

const SomeStyledComponent = css`
   ${GEL_BREVIER};
`;
```

To allow the typography to be fully accessible and responsive, please note that you should apply a default font-size to the document root (e.g. `html { font-size: 100% }`).

Our typography uses `em` for font-size and `rem` for line-height. `em` allows modularity of components: you can change the component font-size by changing the font-size of its container. `rem` is relative to the document root, so we use that for line-height and spacing for a consistent look-and-feel across the document. You can read our [detailed analysis of "REMs vs EMs for spacing"](https://github.com/BBC-News/simorgh/blob/latest/docs/Spacing-Units.md) for more information.

## Exports

`/typography` - GEL typography. These are based on the gel typography standard which can be found in the [GEL guidelines](https://www.bbc.co.uk/gel/guidelines/typography).

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
