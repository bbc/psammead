# psammead-social-embed - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-social-embed%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-social-embed%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-social-embed)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-social-embed) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-social-embed)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-social-embed&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/social-embed--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-social-embed.svg)](https://www.npmjs.com/package/@bbc/psammead-social-embed) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `SocialEmbed` component renders a rich social media embed for a number of supported providers or a fallback with a link to the source content.

### Supported providers

| Name      | Value       |
| --------- | ----------- |
| Instagram | `instagram` |
| Twitter   | `twitter`   |
| YouTube   | `youtube`   |

## Installation

```
npm install @bbc/psammead-social-embed --save
```

## Props

### Canonical

| Argument   | Type   | Required | Default | Example                                                                                                             |
| ---------- | ------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| `provider` | String | Yes      | n/a     | See [supported providers](#Supported%20providers).                                                                  |
| `service`  | String | Yes      | n/a     | `'news'`                                                                                                            |
| `oEmbed`   | Object | Yes      | n/a     | See [@bbc/psammead-oembed](https://github.com/bbc/psammead/tree/latest/packages/components/psammead-oembed#oembed). |
| `fallback` | Object | Yes      | n/a     | See [fallback](#fallback).                                                                                          |
| `skipLink` | Object | Yes      | n/a     | See [skipLink](#skipLink).                                                                                          |

### AMP

| Argument   | Type   | Required | Default | Example                                            |
| ---------- | ------ | -------- | ------- | -------------------------------------------------- |
| `provider` | String | Yes      | n/a     | See [supported providers](#Supported%20providers). |
| `service`  | String | Yes      | n/a     | `'news'`                                           |
| `id`       | String | Yes      | n/a     | `'1237210910835392512'`                            |
| `width`    | String | Yes      | n/a     | `'465'`                                            |
| `height`   | String | Yes      | n/a     | `'279'`                                            |
| `fallback` | Object | Yes      | n/a     | See [fallback](#fallback).                         |
| `skipLink` | Object | Yes      | n/a     | See [skipLink](#skipLink).                         |

### `fallback`

| Argument      | Type   | Required | Default | Example                                                       |
| ------------- | ------ | -------- | ------- | ------------------------------------------------------------- |
| `text`        | String | Yes      | n/a     | `'Sorry but we're having trouble displaying this content'`    |
| `linkText`    | String | Yes      | n/a     | `'View content on %Provider%'`                                |
| `linkHref`    | String | Yes      | n/a     | `'https://twitter.com/MileyCyrus/status/1237210910835392512'` |
| `warningText` | String | No       | `null`  | `Warning: BBC is not responsible for third party content`     |

Note: For your convenience, all instances of `%provider%` and `%Provider%` in the above strings will be replaced with the current provider. E.G. `twitter` and `Twitter` respectively.

### `skipLink`

| Argument   | Type   | Required | Default | Example                       |
| ---------- | ------ | -------- | ------- | ----------------------------- |
| `text`     | String | Yes      | n/a     | `'Skip %Provider% content'`   |
| `skipToId` | String | Yes      | n/a     | `'skip-%provider%-content'`   |
| `endText`  | String | Yes      | n/a     | `'End of %Provider% content'` |

Note: For your convenience, all instances of `%provider%` and `%Provider%` in the above strings will be replaced with the current provider. E.G. `instagram` and `Instagram` respectively.

## Usage

### Canonical

To do:
- Unsupported providers
- fallback in the following scenarios

```jsx
import { CanonicalSocialEmbed } from '@bbc/psammead-social-embed';

<CanonicalSocialEmbed
  provider="instagram"
  service="news"
  oEmbed={{ html: '...' }}
  skipLink={{
    text: 'Skip %Provider% content',
    skipToId: 'skip-%provider%-content',
    endText: 'End of %Provider% content',
  }}
  fallback={{
    text: "Sorry but we're having trouble displaying this content",
    linkText: 'View content on %Provider%',
    linkHref: 'https://www.instagram.com/p/B8FPf4ZphHi/',
    warningText: 'Warning: BBC is not responsible for third party content',
  }}
/>;
```

### AMP

To do:
- Unsupported providers
- Width/Height
- fallback in the following scenarios
- `id` refers to the unique segment of the URL identifying the content. E.G. `1237210910835392512` in `https://twitter.com/MileyCyrus/status/1237210910835392512`.

```jsx
import { AmpSocialEmbed } from '@bbc/psammead-social-embed';

<AmpSocialEmbed
  provider="instagram"
  service="news"
  id="B8FPf4ZphHi"
  skipLink={{
    text: 'Skip %Provider% content',
    skipToId: 'skip-%provider%-content',
    endText: 'End of %Provider% content',
  }}
  fallback={{
    text: "Sorry but we're having trouble displaying this content",
    linkText: 'View content on %Provider%',
    linkHref: 'https://www.instagram.com/p/B8FPf4ZphHi/',
    warningText: 'Warning: BBC is not responsible for third party content',
  }}
  width="400"
  height="400"
/>;
```

### When to use this component

To do.

### When not to use this component

To do.

### Accessibility notes

This component provides a skip-link for non-fallback content, which allows users to identify and skip over social media content in your pages.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
