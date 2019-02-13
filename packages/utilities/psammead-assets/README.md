# psammead-assets &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-assets.svg)](https://www.npmjs.com/package/@bbc/psammead-assets) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

This package provides a collection of common assets that are likely to be required by many Psammead components or users, such as SVGs or small scripts.

## Exports

`/amp-boilerplate` - A helper, allowing projects using Psammead to easily pull in a versioned copy of [AMP's required boilerplate scripts](https://github.com/ampproject/amphtml/blob/master/spec/amp-boilerplate.md).
`/svgs` - SVG icons commonly required by projects using Psammead.

## Installation

```jsx
npm install @bbc/psammead-assets --save
```

## Usage

```jsx
import { BBC_BLOCKS } from '@bbc/psammead-assets/svgs';

import { AMP_SCRIPT } from '@bbc/psammead-assets/amp-boilerplate';
```

## Contributing

When **adding** a new export to this utility package the [export tests](https://github.com/bbc/psammead/blob/5d7395fd60bd8d73796d5a23775b4b5b36db1445/packages/utilities/psammead-assets/index.test.jsx#L11-L18) also need to be updated. When **removing** an exisiting export from this utility package the [export tests](https://github.com/bbc/psammead/blob/5d7395fd60bd8d73796d5a23775b4b5b36db1445/packages/utilities/psammead-assets/index.test.jsx#L11-L18) need to be updated and the package version requires a major change (EG: 1.2.1 -> 2.0.0) as this would be considered a breaking change due to functionality being removed.

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
