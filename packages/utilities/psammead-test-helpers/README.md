# psammead-test-helpers &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-test-helpers.svg)](https://www.npmjs.com/package/@bbc/psammead-test-helpers) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md)

This package is a collection helper methods used for snapshot testing, with support for styled components.

## Installation

```jsx
npm install react react-dom @bbc/psammead-test-helpers --save-dev
```

## Usage

```jsx
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';

shouldMatchSnapshot(
  'should render correctly',
  <h1>Hello World</h1>,
);
```

## Functions

| Name                       | Arguments        | Description  |
|:---------------------------|:-----------------|:-------------|
| shouldMatchSnapshot        | title, component | Renders the component using react-test-renderer, converts it to JSON and asserts that it matches the given snapshot, which will be saved in the `__snapshots__` directory. The first argument `title` is the title for the test. |
| shallowRender              | component        |  Shallow renders the component using react-test-renderer and returns the render output |
| shouldShallowMatchSnapshot | title, component | Shallow renders the component using react-test-renderer and asserts that it matches the given snapshot, which will be saved in the `__snapshots__` directory. The first argument `title` is the title for the test. |
| isNull                     | title, component    | Renders the component using react-test-renderer, converts it to JSON and asserts that it is null. The first argument `title` is the title for the test. |
| testUtilityPackages                     | actualExports, expectedExports, utilityName | Compares an imported utility package and compares the exported values against a keyed object which validates that all the utilities exports are explicit. |

## Roadmap

There is currently a plan to migrate from `react-test-renderer` to `enzyme` as it provides a nicer higher-level API over the same functionality, as well as having support for more granular unit tests.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
