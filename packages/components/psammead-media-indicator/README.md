# psammead-media-indicator - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-media-indicator%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-media-indicator%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/media-indicator/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/media-indicator--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-media-indicator.svg)](https://www.npmjs.com/package/@bbc/psammead-media-indicator) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `MediaIndicator` component provides a 'play', 'audio' or 'camera' icon as well as an optional duration timestamp depending on the `type` prop. The component by default renders the 'play' icon. This component has options for both providing and not providing a duration. If one isn't provided, it will simply render the play, audio or camera icon.

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
| service | string | Yes | N/A | `'news'` |

### Supported `type`s

<!-- prettier-ignore -->
| type             | icon |
| ---------------- | ---- |
| `'video'`        | <svg viewBox="0 0 32 32" width="12px" height="12px" focusable="false"><polygon points="3,32 29,16 3,0"></polygon></svg> |
| `'audio'`        | <svg viewBox="0 0 13 12" width="13px" height="12px" focusable="false"><path d="M9.021 1.811l-.525.525c.938.938 1.5 2.25 1.5 3.675s-.563 2.738-1.5 3.675l.525.525c1.05-1.087 1.725-2.55 1.725-4.2s-.675-3.112-1.725-4.2z"></path><path d="M10.596.199l-.525.562c1.35 1.35 2.175 3.225 2.175 5.25s-.825 3.9-2.175 5.25l.525.525c1.5-1.462 2.4-3.525 2.4-5.775s-.9-4.312-2.4-5.812zM6.996 1.511l-2.25 2.25H.996v4.5h3.75l2.25 2.25z"></path></svg> |
| `'photogallery'` | <svg viewBox="0 0 32 26" width="16px" height="13px" focusable="false"><path d="M9,2V0H4V2H0V26H32V2ZM6.5,10A2.5,2.5,0,1,1,9,7.52,2.5,2.5,0,0,1,6.5,10ZM20,23a9,9,0,1,1,9-9A9,9,0,0,1,20,23Z"></path><circle cx="20" cy="14.02" r="5.5"></circle></svg> |

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
  service="news"
/>;
```

### When to use this component

The `MediaIndicator` component is designed to be used on top of an image which is linking to a page containing a video, audio or photo item based on that image. It tells the user to expect video, audio or photographic content on the page as well as how long it is in duration if applicable.

<!-- ### When not to use this component -->

### Accessibility notes

This component is marked as `aria-hidden="true"`, which means that it should be ignored by screenreaders. It is expected that media promos provide detailed information about their content such as duration in visually hidden text in the promo headline.

<!-- ## Roadmap -->

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead respository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
