# psammead-media-player &middot; [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-brand%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-brand%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-media-player)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-media-player) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-media-player)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-media-player&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/brand--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-media-player.svg)](https://www.npmjs.com/package/@bbc/psammead-media-player) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md) 

## Description
The `psammead-media-player` component exports two versions of our media player: an AMP version, and an Canonical version.

At it's core, this component returns an `iframe` that is designed to frame a media asset. 
The AMP variant will render an `amp-iframe` with a nested `amp-img` to use as a placeholder.
The Canonical variant will render a placeholder, that when clicked will load the `iframe` into view.

## When to use this component
This component to be used at any point on the page, specifically when a media player is needed.

## Installation
`npm install @bbc/psammead-media-player`

## Props
### CanonicalMediaPlayer

| Argument  | Type                | Required | Default | Example         |
|-----------|---------------------|----------|---------|-----------------|
| `src` | string | Yes   | - | `http://foobar.com/embeddable_endpoint` |
| `title` | string | Yes | - | `Video player` |
| `showPlaceholder` | boolean | No   | `true` | `false` |
| `placeholderSrc` | string | No   | `null` | `http://foobar.com/placeholder.png` |
| `portrait` | boolean | No   | `false` | `true` |

The `src` prop is required, as it tells the component what page it needs to embed.
The `title` prop is required for accessibility of the embedded iframe.
The `portrait` prop is not required, and defaults to `false`. This is to support portrait video content in the future.
The `showPlaceholder` boolean prop is also not required, and defaults to `true`.
Assuming `showPlaceholder` is `true`, the `placeholderSrc` will be what image to display as the placeholder.

### AmpMediaPlayer

| Argument  | Type                | Required | Default | Example         |
|-----------|---------------------|----------|---------|-----------------|
| `src` | string | Yes   | - | `http://foobar.com/embeddable_endpoint` |
| `title` | string | Yes | - | `Video player` |
| `portrait` | boolean | No   | `false` | `true` |
| `placeholderSrc` | string | yes   | - | `http://foobar.com/placeholder.png` |

The `placeholderSrc` prop is required for AMP, as in order to have the component load an `amp-iframe` within 600px or 75% of the viewport from the top, we must have an `amp-img` placeholder. For more information on this, please refer to the [AMP docs for amp-iframe](https://amp.dev/documentation/components/amp-iframe/).

## Usage
### CanonicalMediaPlayer
```js
import { CanonicalMediaPlayer } from '@bbc/psammead-media-player';

const Container = ({ src, title, portrait, showPlaceholder, placeholderSrc }) => (
  <CanonicalMediaPlayer
    src={src}
    title={title}
    portrait={portrait}
    placeholderSrc={placeholderSrc}
    showPlaceholder={showPlaceholder}
  />
)
```

### AmpMediaPlayer
```js
import { AmpMediaPlayer } from '@bbc/psammead-media-player';

const Container = ({ src, title, portrait, placeholderSrc }) => (
  <AmpMediaPlayer
    src={src}
    title={title}
    portrait={portrait}
    placeholderSrc={placeholderSrc}
  />
)
```

## Accessibility notes
The `title` prop is important for [accessibility](https://www.w3.org/TR/WCAG20-TECHS/H64.html). It is meant for the user and should be translated to match the user's language.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
