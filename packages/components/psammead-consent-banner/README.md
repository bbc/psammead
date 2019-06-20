# psammead-consent-banner -

## Description

The `psammead-consent-banner` component is a styled `div` that encapsulates information regarding privacy and cookie policy. The component also has two options, for users to accept the policy or be directed to a page with additional information regarding the data policy.

<!-- ### When not to use this component -->

## Installation

`npm install @bbc/psammead-consent-banner`

## Props

<!-- prettier-ignore -->
| Argument | Type | Required | Default | Example |
| -------- | ---- | -------- | ------- | --------|
| title | string | Yes | N/A | `We've updated our Privacy and Cookies Policy` |
| text | element | Yes | N/A | `<p> This is some text</p>` |
| accept | element | Yes | N/A | `<button type="button">Accept</button>` |
| reject | element | Yes | N/A | `<a href="https://www.bbc.co.uk/usingthebbc/your-data-matters">Find out what's changed</a>` |
| id | string | No | Null | `ConsentBanner` |
| hidden | bool | No | Null | `false` |

## Usage

The typical use-case of this component is on top of the webpage of all page types. It is visible for new users.

```jsx
import { ConsentBanner, ConsentBannerText } from '@bbc/psammead-consent-banner';

const Accept = (
  <button onClick={() => {}} type="button">
    OK
  </button>
);

const Reject = (
  <a href="https://www.bbc.co.uk/usingthebbc/your-data-matters">
    Find out what&apos;s changed
  </a>
);

const Text = (
  <ConsentBannerText>
    This is some text with <a href="https://www.bbc.com/news">a link</a> inside
    the consent banner. We have made some important changes to our Privacy and
    Cookie Policy.
  </ConsentBannerText>
);

const props = {
  title: 'We have updated our Privacy and Cookies Policy',
  text: Text,
  accept: Accept,
  reject: Reject,
  id: null,
  hidden: false,
};
```

<!-- ## Accessibility notes -->

<!-- ## Roadmap -->

<!-- ## Additional notes -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
