# psammead-story-promo - [![Known Vulnerabilities](https://snyk.io/test/github/bbc/psammead/badge.svg?targetFile=packages%2Fcomponents%2Fpsammead-story-promo%2Fpackage.json)](https://snyk.io/test/github/bbc/psammead?targetFile=packages%2Fcomponents%2Fpsammead-story-promo%2Fpackage.json) [![Storybook](https://raw.githubusercontent.com/storybooks/story-promo/master/badge/badge-storybook.svg?sanitize=true)](https://bbc.github.io/psammead/?path=/story/story-promo--default) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/bbc/psammead/blob/latest/LICENSE) [![npm version](https://img.shields.io/npm/v/@bbc/psammead-story-promo.svg)](https://www.npmjs.com/package/@bbc/psammead-story-promo) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md)

## Description

The `StoryPromo` component is designed to be used on 'index' pages, which are pages that link to other articles/stories. It supports having an image on the left of the promo with text on the right. This text can be any collection of nodes, however typically these would be a headline, text summary and timestamp.

## Installation

`npm install @bbc/psammead-story-promo`

## StoryPromo Props

| Argument | Type   | Required | Default | Example        |
| -------- | ------ | -------- | ------- | -------------- |
| image    | node   | No       | Null    | `<img>`          |
| text     | node   | Yes      | N/A     | `<h2>Title</h2>` |

## Heading Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| Script    | object | yes | latin | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }|

## Paragraph Props

| Argument  | Type | Required | Default | Example |
| --------- | ---- | -------- | ------- | ------- |
| Script    | object | yes | latin | { canon: { groupA: { fontSize: '28', lineHeight: '32',}, groupB: { fontSize: '32', lineHeight: '36', }, groupD: { fontSize: '44', lineHeight: '48', }, }, trafalgar: { groupA: { fontSize: '20', lineHeight: '24', }, groupB: { fontSize: '24', lineHeight: '28', }, groupD: { fontSize: '32', lineHeight: '36', }, }, }|

## Usage

The typical use-case of this component is as displayed below. A Image sits on the left side of the promo with text elements on the left. These text elements are typically a headline, text summary paragraph and timestamp. The `Headline` and `Paragraph` components are provided by this package and can be imported as seen below.

```jsx
import React, { Fragment } from 'react';
import StoryPromo, { Heading, Paragraph } from '@bbc/psammead-story-promo';
import { latin } from '@bbc/gel-foundations/scripts';

const Image = (
  <img src="https://foobar.com/image.jpg" />
);

const Text = (
  <Fragment>
    <Heading script={latin}>The headline of the promo</Heading>
    <Paragraph script={latin}>The summary of the promo</Paragraph>
    <time>12 March 2019</time>
  </Fragment>
);

<StoryPromo
  image={Image}
  text={Text}
/>
```

### When to use this component

The `StoryPromo` component is designed to be used within a link element to allow the user to navigate to the story on another page.

<!-- ### When not to use this component -->

### Accessibility notes

This component uses full semantic markup for the heading and paragraph, using `h3` and `p` respectively. Other accessibility factors such as image alt text and time elements are passed in as props and aren't explicitly set in this component.

## Roadmap

- Hover and focus states will be added

## Contributing

Psammead is completely open source. We are grateful for any contributions, whether they be new components, bug fixes or general improvements. Please see our primary contributing guide which can be found at [the root of the Psammead repository](https://github.com/bbc/psammead/blob/latest/CONTRIBUTING.md).

### [Code of Conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md)

We welcome feedback and help on this work. By participating in this project, you agree to abide by the [code of conduct](https://github.com/bbc/psammead/blob/latest/CODE_OF_CONDUCT.md). Please take a moment to read it.

### License

Psammead is [Apache 2.0 licensed](https://github.com/bbc/psammead/blob/latest/LICENSE).
