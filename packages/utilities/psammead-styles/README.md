# psammead-styles &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-styles.svg)](https://www.npmjs.com/package/@bbc/psammead-styles) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

This package provides a collection of string constants for use in CSS, containing non-GEL styling details that are bespoke to specific BBC services and products

## Exports

`/colours` - Project-defined colours that will be required by multiple Psammead components or themes. These colours are not defined by GEL.
`/fonts` - Project-defined font families. These fallbacks are not defined by GEL.

## Installation

```jsx
npm install @bbc/psammead-styles --save
```

## Usage

```jsx
import { C_POSTBOX } from '@bbc/psammead-styles/colours';

import { FF_NEWS_SANS_REG } from '@bbc/psammead-styles/fonts';
```

These values can then be used directly within CSS declarations in code:
```jsx
import { css } from 'styled-components';

const SomeStyledComponent = css`
    background-color: ${C_POSTBOX};
    font-family: ${FF_NEWS_SANS_REG};
`;
```

## Contributing

When **adding** a new export to this utility package the [export tests](https://github.com/BBC-News/psammead/blob/5d7395fd60bd8d73796d5a23775b4b5b36db1445/packages/utilities/psammead-styles/index.test.jsx#L11-L35) also need to be updated. When **removing** an exisiting export from this utility package the [export tests](https://github.com/BBC-News/psammead/blob/5d7395fd60bd8d73796d5a23775b4b5b36db1445/packages/utilities/psammead-styles/index.test.jsx#L11-L35) need to be updated and the package version requires a major change (EG: 1.2.1 -> 2.0.0) as this would be considered a breaking change due to functionality being removed.

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
