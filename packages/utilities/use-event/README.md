# use-event - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fuse-event%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fuse-event%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/use-event)](https://david-dm.org/bbc/psammead?path=packages/components/use-event) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/use-event)](https://david-dm.org/bbc/psammead?path=packages/components/use-event&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/use-event--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/use-event.svg)](https://www.npmjs.com/package/@bbc/use-event) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `useEvent` hook does adds a window-level event listener with a callback, and removes the listener when the component the hook is used in is unmounted.

## Installation

```bash
npm install @bbc/use-event --save
```

## Props

| Argument         | Type     | Required | Default | Example   |
| ---------------- | -------- | -------- | ------- | --------- |
| event            | string   | Yes      | N/A     | 'keydown' |
| callbackFunction | function | Yes      | N/A     | `(event) => { console.log(event.code, 'keydown detected') }` |

## Usage

<!-- Description of the utility usage -->

```jsx
import useEvent from '@bbc/use-event';

const MyComponent = () => {
  const callback = (event) => {
    event.preventDefault();
    /* do something */
  }
  useEvent('pagehide', callback);
  
  /* component code */
}
```

### When to use this utility

<!-- Description of the where the utility can be used -->

### When not to use this utility

<!-- Description of the where the utility shouldn't can be used -->

### Accessibility notes

<!-- Information about accessibility for this utility -->

### Roadmap

<!-- Known future changes of the utility -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new utilities, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
