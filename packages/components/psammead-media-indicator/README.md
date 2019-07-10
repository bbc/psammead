# psammead-media-indicator - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-media-indicator%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-media-indicator%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/media-indicator/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/media-indicator--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-media-indicator.svg)](https://www.npmjs.com/package/@bbc/psammead-media-indicator) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `MediaIndicator` component provides a 'play' or 'audio' icon as well as a duration timestamp depending on the `type` prop. The component by default renders the 'play' icon. This component has options for both providing and not providing a duration. If one isn't provided, it will simply render the play or audio icon. Offscreen text should be used to describe the media type, i.e. `'Audio'` or `'Video'`. It should not be played due to nesting inside an element marked as `aria-hidden="true"`, but will provide a fallback for those user agents which have incomplete aria support.

## Installation

`npm install @bbc/psammead-media-indicator`

## Props

<!-- prettier-ignore -->
| Argument      | Type   | Required | Default | Example                      |
| ------------- | ------ | -------- | ------- | ---------------------------- |
| duration      | string | No       | Null    | '2:15'                       |
| datetime      | string | No       | Null    | 'PT2M15S'                    |
| offscreenText | string | No       | Null    | 'Video'                      |
| type          | string | No       | 'video' | 'audio'                      |
| topStory      | boolean | No      | false   | true                         |

## Usage

The typical use-case of this component is on top of images within promos for articles that contains a video asset at the top of the page. It indicates to the user that the link is to a video and how long the video is in duration.

For top story promos, we should pass the `topStory` prop to the `Media Indicator` to keep the same padding, otherwise this will be modified under 400px.

```jsx
import MediaIndicator from '@bbc/psammead-media-indicator';

<MediaIndicator
  duration="2:15"
  datetime="PT2M15S"
  offscreenText="Audio"
  type="audio"
/>;
```

### When to use this component

The `MediaIndicator` component is designed to be used on top of an image which is linking to a page containing a video or audio based on that image. It tells the user to expect a video or audio on the page as well as how long it is in duration.

<!-- ### When not to use this component -->

### Accessibility notes

This component is marked as `aria-hidden="true"`, which means that it should be ignored by screenreaders. It is intended that media promos provide information about their content such as duration in visually hidden text in the promo headline. This component does provide some offscreen text for those user agents which have incomplete aria support, in an attempt to provide context about the timestamp contained in this component.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
