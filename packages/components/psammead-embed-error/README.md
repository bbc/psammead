# ⛔️ This is an alpha component ⛔️

This component is currently tagged as alpha and is not suitable for production use. Following the passing of an accessibility review this component will be marked as ready for production and the alpha tag removed.

# psammead-embed-error - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-embed-error%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-embed-error%2Fpackage.json) [![Dependency Status](https://david-dm.org/bbc/psammead.svg?path=packages/components/psammead-embed-error)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-embed-error) [![peerDependencies Status](https://david-dm.org/bbc/psammead/peer-status.svg?path=packages/components/psammead-embed-error)](https://david-dm.org/bbc/psammead?path=packages/components/psammead-embed-error&type=peer) [![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/embed-error--containing-image) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-embed-error.svg)](https://www.npmjs.com/package/@bbc/psammead-embed-error) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `EmbedError` component provides a lean error page for embedded content, such as that in an iframe. This component's content will fill the viewport and position itself accordingly - it is therefore designed to be used in isolation.

## Installation

```jsx
npm install @bbc/psammead-embed-error --save
```

## Props

| Argument  | Type   | Required | Default | Example                        |
| --------- | ------ | -------- | ------- | ------------------------------ |
| `service` | String | No       | `news`  | `arabic`                       |
| `message` | String | Yes      | -       | `Sorry, the server's on fire.` |

## Usage

This component is particularly useful if you serve content from an iframe and want users to have a seamless error experience. Consider the following example:

```
// https://www.bbc.co.uk/news/av-embed/a-video-about-cats

import EmbedError from "@bbc/psammead-embed-error"

const Page = () => {
  if (error) {
    return <EmbedError message="Sorry, the server's on fire." />;
  }
};
```

```
// https://www.bbc.co.uk/news/articles/the-truth-about-cats

<iframe src="https://www.bbc.co.uk/news/av-embed/a-video-about-cats"></iframe>
```

### When to use this component

This component should be used when you want an error message to fill the viewport and position its content accordingly.

### When not to use this component

This component fills the viewport and is not designed for use alongside other content.

### Accessibility notes

This component's error message is wrapped in a `<strong>` element, indicating to users of assistive technology that it is an important message. This is similar behaviour to the Guidance component used in Media Player's Placeholder.

### Roadmap

The requirements of this component are expected to change. Developments in Mozart's error reporting will influence how (and where) this component is used in the future.

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
