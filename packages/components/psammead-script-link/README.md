# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-script-link - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-script-link%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-script-link%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-script-link)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-script-link) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-script-link)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-script-link&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/script-link--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-script-link.svg)](https://www.npmjs.com/package/@bbc/psammead-script-link) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `ScriptLink` component is designed to be used where a service has multiple variants and there is a need to switch between them.

## Installation

```jsx
npm install @bbc/psammead-script-link --save
```

## Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| service | string | yes | N/A | `'serbian'` |
| variant | string | no | `null` | `'lat'` |
| href | string | yes | N/A | `'https://www.bbc.com/serbian/lat'` |
| children | node | yes | N/A | `'Lat'` |
| script | object | yes | N/A | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, } |

## Usage

```jsx
import ScriptLink from '@bbc/psammead-script-link';
import { latin } from '@bbc/gel-foundations/scripts';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

const WrappingComponent = () => (
  <div>
    <ScriptLink
      script={latin}
      service="serbian"
      href="https://www.bbc.com/serbian/lat"
      variant="lat"
    >
      <span aria-hidden>Lat</span>
      <VisuallyHiddenText> Latin </VisuallyHiddenText>
    </ScriptLink>
  </div>
);
```

### When to use this component

The `ScriptLink` component is to be used on the `Brand` component.

### Accessibility notes

When navigating to the `ScriptLink` using a screen reader, it is identified as a link and the text is announced as `Simplified, Traditional, Latin or Cyrillic`.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
