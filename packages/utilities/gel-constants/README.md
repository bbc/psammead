# gel-constants &middot; [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/BBC-News/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/gel-constants.svg)](https://www.npmjs.com/package/@bbc/gel-constants) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

This package is a collection of variable constants which can be imported into your application.

## Installation

```jsx
npm install @bbc/gel-constants --save
```

## Usage

```jsx
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from 'gel-constants/breakpoints';

import { GEL_GUTTER_BELOW_600PX } from 'gel-constants/spacings';

import { GEL_BREVIER } from 'gel-constants/typography';
```

## Exports

`/breakpoints` - GEL breakpoints, as well as typography breakpoints. These use the GEL grid sizes which can be found in their [documentation](https://www.bbc.co.uk/gel/guidelines/grid#grid-sizes).  
`/spacings` - GEL spacings and GEL Grid margins and gutters. These use the GEL grid spacing sizes which can be found in their [documentation](https://www.bbc.co.uk/gel/guidelines/grid#spacing-layout).

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/BBC-News/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/BBC-News/psammead/blob/latest/LICENSE).
