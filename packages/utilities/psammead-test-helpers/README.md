# psammead-test-helpers &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-test-helpers.svg)](https://www.npmjs.com/package/@bbc/psammead-test-helpers) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

This package is a collection helper methods used for snapshot testing, with support for styled components.

## Installation

```jsx
npm install @bbc/psammead-test-helpers --save
```

## Usage

```jsx
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';

shouldMatchSnapshot(
  'should render correctly',
  <h1>Hello World</h1>,
);
```

## Roadmap

There is currently a plan to migrate from `react-test-renderer` to `enzyme` as it provides a nicer higher-level API over the same functionality, as well as having support for more granular unit tests.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
