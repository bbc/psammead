# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-social-embed - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-social-embed%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-social-embed%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-social-embed)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-social-embed) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-social-embed)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-social-embed&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/social-embed--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-social-embed.svg)](https://www.npmjs.com/package/@bbc/psammead-social-embed) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `SocialEmbed` component renders a rich social media embed for a number of supported providers or a fallback containing a link to the source content.

Note: This component delcares `@loadable/component` as a peer dependency. It is used to dynamically import `@bbc/psammead-oembed` if and when it's needed.

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
| `provider` | String | Yes      | n/a     | See [supported providers](#supported-providers).                                                                    |
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
| `width`    | String | Yes      | n/a     | `'16'`                                             |
| `height`   | String | Yes      | n/a     | `'9'`                                              |
| `fallback` | Object | Yes      | n/a     | See [fallback](#fallback).                         |
| `skipLink` | Object | Yes      | n/a     | See [skipLink](#skipLink).                         |

### `fallback`

| Argument      | Type   | Required | Default | Example                                                       |
| ------------- | ------ | -------- | ------- | ------------------------------------------------------------- |
| `text`        | String | Yes      | n/a     | `"Sorry but we're having trouble displaying this content"`    |
| `linkText`    | String | Yes      | n/a     | `'View content on %Provider%'`                                |
| `linkHref`    | String | Yes      | n/a     | `'https://twitter.com/MileyCyrus/status/1237210910835392512'` |
| `warningText` | String | No       | `null`  | `Warning: BBC is not responsible for third party content`     |

Note: For your convenience, all instances of `%provider%` and `%Provider%` in the above strings will be replaced with the current provider. E.G. `twitter` and `Twitter` respectively.

### `skipLink`

| Argument    | Type   | Required | Default | Example                       |
| ----------- | ------ | -------- | ------- | ----------------------------- |
| `text`      | String | Yes      | n/a     | `'Skip %Provider% content'`   |
| `endTextId` | String | Yes      | n/a     | `'skip-%provider%-content'`   |
| `endText`   | String | Yes      | n/a     | `'End of %Provider% content'` |

See [accessibility notes](#accessibility-notes) for more information.

Note: For your convenience, all instances of `%provider%` and `%Provider%` in the above strings will be replaced with the current provider. E.G. `instagram` and `Instagram` respectively.

## Usage

### Canonical

Pass a [supported provider](#supported-providers) and valid oEmbed response. If neither of these cases can be met, a fallback will be rendered containing a link to the source content.

#### Example

```jsx
import { CanonicalSocialEmbed } from '@bbc/psammead-social-embed';

<CanonicalSocialEmbed
  provider="instagram"
  service="news"
  oEmbed={{ html: '...' }}
  skipLink={{
    text: 'Skip %Provider% content',
    endTextId: 'skip-%provider%-content',
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

Pass a [supported provider](#supported-providers). If this case cannot be met, a fallback will be rendered containing a link to the source content.

Pass a valid `id`. This refers to the unique segment of the URL, which identifies the source content. E.G. `1237210910835392512` in `https://twitter.com/MileyCyrus/status/1237210910835392512`.

The component will fill its parent container and resize its height automatically to the given _aspect ratio_ supplied by `width` and `height`. E.G. `width="16"` by `height="9"`.

```jsx
import { AmpSocialEmbed } from '@bbc/psammead-social-embed';

<AmpSocialEmbed
  provider="instagram"
  service="news"
  id="B8FPf4ZphHi"
  skipLink={{
    text: 'Skip %Provider% content',
    endTextId: 'skip-%provider%-content',
    endText: 'End of %Provider% content',
  }}
  fallback={{
    text: "Sorry but we're having trouble displaying this content",
    linkText: 'View content on %Provider%',
    linkHref: 'https://www.instagram.com/p/B8FPf4ZphHi/',
    warningText: 'Warning: BBC is not responsible for third party content',
  }}
  width="1"
  height="1"
/>;
```

### When to use this component

This component is designed to embed rich social media content from a number of [supported providers](#supported-providers) in primary content, such as an article.

### When not to use this component

This component will not provide a rich social media embed for providers outside of the [supported providers](#supported-providers) – these will use fallback content instead.

### Accessibility notes

This component provides a [Skip Link](https://webaim.org/techniques/skipnav/), which allows users to identify and skip over social media content in your pages. `skipLink.endTextId` should be set to a value that uniquely identifies `skipLink.endText`. This is especially important when there is more than one social media embed from the same provider on the page.

## Roadmap

OEmbed is a dynamic import found within CanonicalSocialEmbed. While it is being loaded, `<p>Loading&hellip;</p>` is rendered. This could be updated to inherit the width and height of the oEmbed content and thus prevent reflows when it is replaced.

## Miscellaneous
`SocialEmbed` renders the same result given the same props and is memoized using [React.memo](https://reactjs.org/docs/react-api.html#reactmemo), which helps prevent unnecessary re-renders.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
