# (psammead-media-player) &middot; 

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
| `orientation` | string | No   | `Landscape` | `Portrait` |
| `showPlaceholder` | boolean | No   | `true` | `false` |
| `placeholderSrc` | string | No   | `null` | `http://foobar.com/placeholder.png` |

The `src` prop is required, as it tells the component what page it needs to embed.
The `orientation` prop is not required, and defaults to `Landscape`, but also accepts `Portrait`. This is to support portrait video content in the future.
The `showPlaceholder` boolean prop is also not required, and defaults to `true`.
Assuming `showPlaceholder` is `true`, the `placeholderSrc` will be what image to display as the placeholder.

### AmpMediaPlayer

| Argument  | Type                | Required | Default | Example         |
|-----------|---------------------|----------|---------|-----------------|
| `src` | string | Yes   | - | `http://foobar.com/embeddable_endpoint` |
| `orientation` | string | No   | `Landscape` | `Portrait` |
| `placeholderSrc` | string | yes   | - | `http://foobar.com/placeholder.png` |

The `placeholderSrc` prop is required for AMP, as in order to have the component load an `amp-iframe` within 600px or 75% of the viewport from the top, we must have an `amp-img` placeholder. For more information on this, please refer to the [AMP docs for amp-iframe](https://amp.dev/documentation/components/amp-iframe/).

## Usage
### CanonicalMediaPlayer
```js
import { CanonicalMediaPlayer } from '@bbc/psammead-media-player';

const Container = ({ src, orientation, showPlaceholder, placeholderSrc }) => (
  <CanonicalMediaPlayer
    src={src}
    orientation={orientation}
    placeholderSrc={placeholderSrc}
    showPlaceholder={showPlaceholder}
  />
)
```

### AmpMediaPlayer
```js
import { AmpMediaPlayer } from '@bbc/psammead-media-player';

const Container = ({ src, orientation, placeholderSrc }) => (
  <AmpMediaPlayer
    src={src}
    orientation={orientation}
    placeholderSrc={placeholderSrc}
  />
)
```

## Accessibility notes
This component is still in its initial alpha stages, and requires a full and extensive accessibility review.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).