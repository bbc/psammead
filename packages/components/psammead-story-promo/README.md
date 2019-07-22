# psammead-story-promo - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-story-promo%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-story-promo%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/story-promo/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/story-promo--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-story-promo.svg)](https://www.npmjs.com/package/@bbc/psammead-story-promo) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `StoryPromo` component is designed to be used on 'index' pages, which are pages that link to other articles/stories. It supports having an image on the left of the promo with info on the right. This info can be any collection of nodes, however typically these would be a headline, text summary and timestamp.

## Installation

`npm install @bbc/psammead-story-promo`

## StoryPromo Props

<!-- prettier-ignore -->
| Argument | Type   | Required | Default | Example        |
| -------- | ------ | -------- | ------- | -------------- |
| image    | node   | No       | Null    | `<img>`          |
| info     | node   | Yes      | N/A     | `<h2>Title</h2>` |
| mediaIndicator     | node   | No      | null     | `<MediaIndicator duration="2:15" datetime="PT2M15S" offscreenText="Video 2 minutes 15 seconds" />` |
| topStory | boolean | No      | false   | true          |

## Headline Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| Script    | object | yes | latin | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }|
| service | string | yes | N/A | `'news'` |

## Summary Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| Script    | object | yes | latin | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }|
| service | string | yes | N/A | `'news'` |

## LiveLabel

The `LiveLabel` component is to be used inside a `Link` in index pages to show a promo for a Live page.

### Props

<!-- prettier-ignore -->
| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| service | string | yes | N/A | `'news'` |
| dir | string | no | `'ltr'`| `'rtl'` |

## Usage

The typical use-case of this component is as displayed below. A Image sits on the left side of the promo with info elements on the right. These info elements are typically a headline, text summary paragraph and timestamp. The `Headline` and `Summary` components are provided by this package and can be imported as seen below.

This component also has an option to display a media indicator, which consists of a play icon and duration of the media, if that data is provided.

The `topStory` prop can be passed to adopt a vertical card layout under 600px. This is designed to be used only on the first (top) story on an index. This prop must be passed to the StoryPromo, Headline and Summary components.

```jsx
import React, { Fragment } from 'react';
import StoryPromo, {
  Headline,
  Summary,
  Link,
  LiveLabel,
} from '@bbc/psammead-story-promo';
import { latin } from '@bbc/gel-foundations/scripts';
import VisuallyHiddenText from "@bbc/psammead-visually-hidden-text'

const Image = <img src="https://foobar.com/image.jpg" />;

const LiveComponent = ({ headline, service, dir }) => (
  <span role="text">
    <LiveLabel service={service} dir={dir}>
      LIVE
    </LiveLabel>
    <VisuallyHiddenText lang="en-GB">Live, </VisuallyHiddenText>
    <span>{headline}</span>
  </span>
);

const Info = ({ isLive }) => (
  <Fragment>
    <Headline script={latin} topStory={true} service="news">
      <Link href="https://www.bbc.co.uk/news">
        {isLive ? (
          <LiveComponent service="news" headline="The headline of the live promo" />
        ): The headline of the promo}
      </Link>
    </Headline>
    <Summary script={latin} topStory={true} service="news">
      The summary of the promo
    </Summary>
    <time>12 March 2019</time>
  </Fragment>
);

<StoryPromo image={Image} info={Info({ isLive: false })} topStory={true} />;
```

### When to use this component

The `StoryPromo` component is designed to be used within a link element to allow the user to navigate to the story on another page.

<!-- ### When not to use this component -->

### Accessibility notes

This component uses full semantic markup for the `Headline`, `Summary`, and `Link`, using `h3`, `p` and `a` respectively. Other accessibility factors such as image alt text and time elements are passed in as props and aren't explicitly set in this component.

The link is nested inside the `h3` for better support with VoiceOver Mac and Safari. We use the `faux block link` pattern which makes the entire block clickable, whilst also enabling links nested within in that block to also be clickable.

We haven't yet thoroughly looked at cross device browser AT testing yet, this is in-progress. We will update with a11y notes when carrying out a proper release.

## Roadmap

This component will soon be integrated on to add support for additional UX and product requirements such as;

- Hover and focus states
- Logic to toggle a 'Top Story' mode which has greater text size and a vertically stacked design

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
