# psammead-storybook-helpers - [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-assets.svg)](https://www.npmjs.com/package/@bbc/psammead-assets) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

This package provides a collection of common values that are used in storybook by the Psammead components.

## Exports

`text-variants` - A list of text samples in different languages.

## Installation

```jsx
npm install @bbc/psammead-storybook-helpers --save-dev
```

## Usage

```jsx
import { LANGUAGE_VARIANTS } from '@bbc/psammead-storybook-helpers/text-variants';
```

## Contributing

When **adding** a new export to this utility package the [export tests](https://github.com/bbc/psammead/blob/0ddf2a24089b9544c82c39be4db9f2151b39cc0d/packages/utilities/psammead-storybook-helpers/index.test.jsx#L5-L7) also need to be updated. When **removing** an exisiting export from this utility package the [export tests](https://github.com/bbc/psammead/blob/0ddf2a24089b9544c82c39be4db9f2151b39cc0d/packages/utilities/psammead-storybook-helpers/index.test.jsx#L5-L7) need to be updated and the package version requires a major change (EG: 1.2.1 -> 2.0.0) as this would be considered a breaking change due to functionality being removed.

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).

